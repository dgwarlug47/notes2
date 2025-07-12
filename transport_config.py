# Configuration file for transport.py
# Contains all source and destination path mappings

baseDownstream = '/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/'
baseUpstream = '/Users/davi/Desktop/Code/notes2/content/blog/'


relativeSourceFilePaths = [
    'Arts/Literature/Novels/United States of America/(1996) Infinite Jest/Analysis',
    'Arts/Literature/Novels/Russia/(1866) Crime and Punishment',
    'Science/Natural Science/Psychology/mbti',
    'Science/Natural Science/Urban Geography/USA/Manhattan/Upper East side',
    'Arts/Visual arts/Painting/Impressionism',
    'Arts/Visual arts/Architecture/art deco/',
    'Science/Natural Science/Urban Geography/USA/California/LA',
    'Humanities/Philosophy/5 - Contemporary/Foucault/Discipline and punish',
    'Humanities/Philosophy/5 - Contemporary/Camus',
    'Arts/Performing arts/Music/Analysis/Ok Computer',
    'Humanities/Philosophy/4 - Modern/Hegel/Geist',
    'Business/Real Estate/North America',
    'Arts/Performing arts/Moving pictures/Cinema/Critics/1970s/Annie Hall',
    'Science/Social Sciences/Economics/Piketty',
    'Arts/Performing arts/Moving pictures/Cinema/Critics/2010s/Midnight in Paris',
    'Arts/Performing arts/Moving pictures/Cinema/Critics/2010s/Manchester by the sea',
    'Science/Natural Science/Urban Geography/USA/California/SF',
    'Science/Natural Science/Urban Geography/Canada/Toronto',
    'Arts/Literature/Novels/Italy/(1321) Divine Comedy/Inferno',
    'Arts/Visual arts/Painting/Expressionism',
    'Arts/Visual arts/Painting/Surrealism',
    'Arts/Visual arts/Painting/Fauvism',
    'Humanities/Philosophy/4 - Modern/Kierkegaard',
    'Science/Social Sciences/History/Rome/Republic/Fall of Republic',
    'Science/Social Sciences/Anthropology',
    'Science/Social Sciences/Sociology/Zygmunt Bauman',
    'Arts/Literature/Novels/Germany/(1924) The Magic Mountain',
    'Mathematics/Logic/(1891) About an elementary question of the theory of diversity - Cantor',
    'Arts/Performing arts/Moving pictures/Cinema/Critics/2020s/Licorice Pizza',
    'Spare/Games/Sports/Football/World cup',
    'Spare/Fundamentals',
    'Arts/Performing arts/Moving pictures/Cinema/Critics/2010s/Begin Again',
    'Spare/Games/Sports/Football/World cup',
    "Arts/Literature/Novels/Canada/(1985) The Handmaid's Tale",
    "Arts/Literature/Novels/United States of America/(1958) Breakfast at Tifanny's",
    "Arts/Literature/Novels/Brazil/(1881) Memorias Postumas de Bras Cubas",
    "Arts/Literature/Novels/United States of America/(1920) The Age of Innocence",
    "Arts/Literature/Novels/Brazil/(1900) Dom Casmurro",
    "Arts/Literature/Novels/UK/(1948) 1984",
    "Arts/Literature/Novels/United States of America/(1953) Farenheit 451",
    "Arts/Literature/Novels/UK/(2012) Winter of the world",
    "Spare/Games/Sports/Football/Champions League",
    "Arts/Performing arts/Music/Favourites",
    "Arts/Literature/Novels/UK/(1925) Mrs Dalloway",
    "Humanities/Philosophy/5 - Contemporary/Heidegger",
    "Arts/Performing arts/Moving pictures/Cinema/Critics/2000s/500 days of summer",
    "Humanities/Religion/Christianism/Principles",
    "Arts/Literature/Novels/Russia/(1878) Anna Karenina",
    "Spare/Games/Sports/Football/Messi2"
]


def generateAbsoluteDownstreamAndUpstreamFilePaths():
    """Generate absolute paths for upstream and downstream files based on relative paths"""
    # If x is a known value
    result = [(baseDownstream + item, baseUpstream + item) for item in relativeSourceFilePaths]
    return result