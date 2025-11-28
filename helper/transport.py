import shutil
import os
import signal
import argparse
import sys
from tqdm import tqdm
from transport_config import generateAbsoluteDownstreamAndUpstreamFilePaths

# Parse command line arguments
parser = argparse.ArgumentParser(description='Copy folders from Google Drive to blog content directory')

parser.add_argument('--mode', 
                    choices=['quick', 'long', 'all'], 
                    default='all',
                    help='Which articles to copy: quick, long, or all (default: all)')

args = parser.parse_args()


class TimeoutError(Exception):
    pass

def timeout_handler(signum, frame):
    raise TimeoutError("Operation timed out")

def copy_folder(source_folder, destination_folder, timeout=100):
    try:
        if not os.path.exists(source_folder):
            raise FileNotFoundError(f"Source folder does not exist: {source_folder}")

        if not os.path.exists(destination_folder):
            os.makedirs(destination_folder)
        
        # Set the timeout alarm
        signal.signal(signal.SIGALRM, timeout_handler)
        signal.alarm(timeout)
        
        try:
            for filename in os.listdir(source_folder):
                source_path = os.path.join(source_folder, filename)
                destination_path = os.path.join(destination_folder, filename)
                
                if os.path.isfile(source_path):
                    shutil.copy(source_path, destination_path)
            
            # Operation completed successfully, cancel the alarm
            signal.alarm(0)
            return True
            
        except TimeoutError:
            return False
            
    except FileNotFoundError:
        print("Error: Source folder not found.")
        return False
    except PermissionError:
        print("Error: Permission denied.")
        return False
    except Exception as e:
        print(e)
        return False
    finally:
        # Ensure the alarm is canceled in any case
        signal.alarm(0)

# Import path configurations
print(f"📁 Loaded {len(generateAbsoluteDownstreamAndUpstreamFilePaths())}articles")

for articlePath in tqdm(generateAbsoluteDownstreamAndUpstreamFilePaths()):
    success = copy_folder(articlePath[0], articlePath[1])
    if not success:
        print("Skipped due to timeout:" + str(articlePath))