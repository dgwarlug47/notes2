import shutil
import os

def copy_folder(source_folder, destination_folder):
    try:
        if not os.path.exists(destination_folder):
            os.makedirs(destination_folder)
        
        for filename in os.listdir(source_folder):
            source_path = os.path.join(source_folder, filename)
            destination_path = os.path.join(destination_folder, filename)
            
            if os.path.isfile(source_path):
                shutil.copy(source_path, destination_path)
    except FileNotFoundError:
        print("Error: Source folder not found.")
    except PermissionError:
        print("Error: Permission denied.")
    except Exception as e:
        print(e)

base = '/Users/davi/Desktop/Code/notes2/content/blog/'

articlesPaths = [
    ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/United States of America/(1996) Infinite Jest/Analysis',
     base + '/Literature/Infinite Jest'),
     ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/Russia/(1866) Crime and Punishment',
      base + '/Literature/Crime and Punishment'),
     ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Science/Natural Science/Psychology/mbti',
      base + 'Science/MBTI'),
     ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Science/Natural Science/Urban Geography/USA/Manhattan/Upper East side',
      base + 'Urban Geography/Manhattan'),
       ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Spare/Games/Sports/Football/Messi2',
        base + '/Messi3'),
        ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Visual arts/Painting/Impressionism',
        base + '/Painting/Impress'),
         ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Visual arts/Architecture/art deco/',
          base + '/Art Deco'),
          ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Science/Natural Science/Urban Geography/USA/California/LA',
           base + '/LA'),
           ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Humanities/Philosophy/Contemporary/Foucault/Discipline and punish',
            base + 'Discipline and Punish by Focault'),
            ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Humanities/Philosophy/Contemporary/Existentialism/Camus',
             base + '/Camus Summary'),
             ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Performing arts/Music/Analysis/Ok Computer',
              base + '/Ok Computer'),
              ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Humanities/Philosophy/Modern/Hegel/Geist',
               base + '/Hegel Geist'),
               ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Business/Real Estate/North America',
               base + '/Real Estate'),
               ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Performing arts/Moving pictures/Cinema/Critics/1970s/Annie Hall',
                base + 'Cinema/Annie'),
                ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Science/Social Sciences/Economics/Piketty',
                 base + 'Economics/Piketty'),
                 ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Performing arts/Moving pictures/Cinema/Critics/2010s/Midnight in Paris',
                  base + 'Cinema/Midnight in paris'),
                  ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Performing arts/Moving pictures/Cinema/Critics/2010s/Manchester by the sea',
                   base + 'Cinema/Manchester by the sea'),
                   ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Science/Natural Science/Urban Geography/USA/California/SF',
                    base + 'Urban Geography/SF'),
                    ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Science/Natural Science/Urban Geography/Canada/Toronto',
                     base + 'Urban Geography/Toronto'),
                     ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/Italy/(1321) Divine Comedy/Inferno',
                      base + 'Literature/Inferno'),
                      ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Visual arts/Painting/Expressionism',
        base + '/Painting/Express'),
                        ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Visual arts/Painting/Surrealism',
        base + '/Painting/Surrealism'),
                            ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Visual arts/Painting/Fauvism',
        base + '/Painting/Fauvism'),
                                ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Humanities/Philosophy/Contemporary/Existentialism/Kierkegaard',
                                 base + '/Philophy/Kierke'),
                            ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Science/Social Sciences/History/Rome/Republic/Fall of Republic',
                             base + 'History/Rome'),
                             ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Science/Social Sciences/Anthropology',
                              base + 'Anthropoloy/Levi'),
                                ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Science/Social Sciences/Sociology/Zygmunt Bauman',
                                 base + 'Sociology/Liquid'),
                                 ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/Germany/(1924) The Magic Mountain',
                                  base + 'Literature/Magic mountain'),
                                  ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Documents/Growth/Gym/Fat/Cooking',
                                   base + 'Groceries/March 2025'),
                                   ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Mathematics/Logic/(1891) About an elementary question of the theory of diversity - Cantor',
                                    base + 'Mathemathics/Cantor'),
                                    ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Performing arts/Moving pictures/Cinema/Critics/2020s/Licorice Pizza',
                                     base + 'Cinema/Licorice Pizza'),
                                     ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Spare/Games/Sports/Football/World cup',
                                      base + 'World cup/Football'),
                                      ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Spare/Fundamentals',
                                       base + 'Fundamentals/PleaseHelpMe'),
                                       ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Performing arts/Moving pictures/Cinema/Critics/2010s/Begin Again',
                                        base + 'Cinema/Begin Again'),
                                        ('/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Spare/Games/Sports/Football/World cup',
                                         base + 'World cup/Football'),
                                         ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/Canada/(1985) The Handmaid's Tale",
                                          base + 'Literature/The Handmaid'),
                                          ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/United States of America/(1958) Breakfast at Tifanny's",
                                           base + 'Literature/Breakfast at Tifanny'),
                                           ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/Brazil/(1881) Memorias Postumas de Bras Cubas",
                                            base + 'Literature/Memorias Postumas de Bras Cubas'),
                                            ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/United States of America/(1920) The Age of Innocence",
                                             base + 'Literature/The Age of Innocence'),
                                             ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/Brazil/(1900) Dom Casmurro",
                                              base + 'Literature/Dom Casmurro'),
                                              ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/UK/(1948) 1984",
                                               base + 'Literature/1984'),
                                               ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/UK/(1940) And then there were none",
                                               base + 'Literature/And then there were none'),
                                               ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/United States of America/(1953) Farenheit 451",
                                                base + 'Literature/Farenheit 451'),
                                                ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/UK/(2012) Winter of the world",
                                                 base + 'Literature/Winter of the world'),
                                                 ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Spare/Games/Sports/Football/Champions League",
                                                  base + 'Football/Champions League'),
                                                  ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Performing arts/Music/Favourites",
                                                   base + 'Music/Favourites'),
                                                   ("/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/Arts/Literature/Novels/UK/(1925) Mrs Dalloway",
                                                    base + 'Literature/Mrs Dalloway'),
]

for articlePath in articlesPaths:
    copy_folder(articlePath[0], articlePath[1])
