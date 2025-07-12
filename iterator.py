import os
import subprocess
import platform
from transport_config import generateAbsoluteDownstreamAndUpstreamFilePaths

def open_and_wait_for_edit(file_path):
    """Open file in editor and wait for user to finish editing"""
    try:
        system = platform.system()
        if system == 'Darwin':  # macOS
            # Use TextEdit and wait for it to close
            process = subprocess.Popen(['open', '-W', '-a', 'TextEdit', file_path])
            process.wait()
        return True
    except Exception as e:
        print(f"❌ Could not open {file_path}: {e}")
        return False

def process_folder_paths(paths_list, category_name):
    """Process a list of folder paths and open files for editing"""
    print(f"\n{'='*60}")
    print(f"📁 PROCESSING {category_name.upper()} ARTICLES")
    print(f"{'='*60}")
    
    for i, (source_path, dest_path) in enumerate(paths_list, 1):
        print(f"\n🔄 [{i}/{len(paths_list)}] Processing: {os.path.basename(dest_path)}")
        print(f"📂 Source: {source_path}")
        
        # Check if source folder exists
        if not os.path.exists(source_path):
            print(f"⚠️  Source folder does not exist! Skipping...")
            continue
            
        # List files in the folder
        try:
            files = [f for f in os.listdir(source_path) 
                    if os.path.isfile(os.path.join(source_path, f)) 
                    and f.endswith(('.md'))]
            
            print(f"📄 Editable files found: {len(files)}")
            
            if files:
                for j, file_name in enumerate(files, 1):
                    file_path = os.path.join(source_path, file_name)
                    
                    # Check if file contains the word "title"
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read().lower()
                            if 'title' not in content:
                                print(f"\n  ⏭️  [{j}/{len(files)}] Skipping: {file_name} (no 'title' found)")
                                continue
                    except Exception as e:
                        print(f"\n  ❌ [{j}/{len(files)}] Cannot read: {file_name} ({e})")
                        continue
                    
                    print(f"\n  📝 [{j}/{len(files)}] Opening: {file_name}")
                    print(f"      🔧 File contains 'title' - opening in editor...")
                    print(f"      ⏳ Waiting for you to finish editing...")
                    
                    # Open file and wait for editing to complete
                    success = open_and_wait_for_edit(file_path)
                    
                    if success:
                        print(f"      ✅ Editing completed for: {file_name}")
                    else:
                        print(f"      ❌ Failed to open: {file_name}")
                        
                        # Ask if user wants to continue
                        response = input(f"      Continue to next file? (y/n): ").lower()
                        if response != 'y':
                            return
            else:
                print(f"📄 No editable files found in folder")
                
        except PermissionError:
            print(f"❌ Permission denied accessing folder")
        except Exception as e:
            print(f"❌ Error processing folder: {e}")
        
        # Ask if user wants to continue to next folder
        if i < len(paths_list):
            response = input(f"\n🔄 Continue to next folder? (y/n): ").lower()
            if response != 'y':
                break
        
        print(f"{'_'*40}")

def main():
    """Main function to process all article paths"""
    print("🚀 ARTICLE FILE EDITOR")
    print("This script will open each file for editing and wait for you to finish.")
    print("Close the editor window when you're done editing each file.")
    
    # Ask user which category to process
    print("\nSelect which articles to process:")
    print("1. Quick articles only")
    print("2. Long articles only") 
    print("3. All articles")
    
    process_folder_paths(generateAbsoluteDownstreamAndUpstreamFilePaths(), "QUICK")
    
    print(f"\n🎉 Editing session complete!")

if __name__ == "__main__":
    main()