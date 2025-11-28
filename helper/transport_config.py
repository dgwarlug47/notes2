# Configuration file for transport.py
# Contains all source and destination path mappings

baseDownstream = '/Users/davi/Library/CloudStorage/GoogleDrive-davisena145@gmail.com/My Drive/Desktop/Knowledge/'
baseUpstream = '/Users/davi/Desktop/Code/notes2/content/blog/'


relativeSourceFilePaths = [
    'Arts/Literature/Novels/Germany/(1924) The Magic Mountain',
    'Arts/Literature/Novels/Italy/(1321) Divine Comedy/Inferno',
    'Arts/Literature/Novels/Russia/(1866) Crime and Punishment',
    'Arts/Literature/Novels/United States of America/(1996) Infinite Jest/Analysis',
    'Arts/Performing arts/Moving pictures/Cinema/Critics/1970s/Annie Hall',
    'Arts/Performing arts/Moving pictures/Cinema/Critics/2010s/Begin Again',
    'Arts/Performing arts/Moving pictures/Cinema/Critics/2010s/Manchester by the sea',
    'Arts/Performing arts/Moving pictures/Cinema/Critics/2010s/Midnight in Paris',
    'Arts/Performing arts/Moving pictures/Cinema/Critics/2020s/Licorice Pizza',
    'Arts/Performing arts/Music/Indie/Ok Computer',
    'Arts/Visual arts/Architecture/(1910 - 1950) Art Deco',
    'Arts/Visual arts/Painting/(1905 - 1920) Expressionism',
    'Arts/Visual arts/Painting/(1905 – 1908) Fauvism',
    'Arts/Visual arts/Painting/(1867 - 1886) Impressionism',
    'Arts/Visual arts/Painting/(1920 - 1940) Surrealism',
    'Business/Real Estate/North America',
    'Humanities/Philosophy/(1600s – 1900s) - Modern/Hegel/Geist',
    'Humanities/Philosophy/(1600s – 1900s) - Modern/Kierkegaard',
    'Humanities/Philosophy/(1900 – 1970s) - Contemporary/Camus',
    'Humanities/Philosophy/(1900 – 1970s) - Contemporary/Foucault/Discipline and punish',
    'Mathematics/Logic/(1891) About an elementary question of the theory of diversity - Cantor',
    'Science/Natural Science/Psychology/mbti',
    'Science/Natural Science/Urban Geography/Canada/Toronto',
    'Science/Natural Science/Urban Geography/USA/California/LA',
    'Science/Natural Science/Urban Geography/USA/California/SF',
    'Science/Natural Science/Urban Geography/USA/Manhattan/Upper East side',
    'Science/Social Sciences/Anthropology/Claude Levis Strauss',
    'Science/Social Sciences/Economics/Piketty',
    'Science/Social Sciences/History/Rome/Republic/Fall of Republic',
    'Science/Social Sciences/Sociology/Zygmunt Bauman',
    'Spare/Fundamentals',
    'Spare/Games/Sports/Football/World cup',
    'Spare/Games/Sports/Football/World cup',
    "Arts/Literature/Novels/Brazil/(1881) Memorias Postumas de Bras Cubas",
    "Arts/Literature/Novels/Brazil/(1900) Dom Casmurro",
    "Arts/Literature/Novels/Canada/(1985) The Handmaid's Tale",
    "Arts/Literature/Novels/Russia/(1878) Anna Karenina",
    "Arts/Literature/Novels/UK/(1925) Mrs Dalloway",
    "Arts/Literature/Novels/UK/(1948) 1984",
    "Arts/Literature/Novels/UK/(2012) Winter of the world",
    "Arts/Literature/Novels/United States of America/(1920) The Age of Innocence",
    "Arts/Literature/Novels/United States of America/(1953) Farenheit 451",
    "Arts/Literature/Novels/United States of America/(1958) Breakfast at Tifanny's",
    "Arts/Literature/Poetry/Mine",
    "Arts/Performing arts/Moving pictures/Cinema/Critics/2000s/500 days of summer",
    "Arts/Performing arts/Moving pictures/Cinema/Other2/",
    "Arts/Performing arts/Music/Indie/Real Estate",
    "Arts/Performing arts/Music/Aggregate/Favourites",
    "Humanities/Philosophy/(1900 – 1970s) - Contemporary/Heidegger",
    "Humanities/Philosophy/(1900 – 1970s) - Contemporary/Camus/Myth of sisyphus",
    "Humanities/Religion/Christianism/Principles",
    "Spare/Fundamentals/Theories Good",
    "Spare/Games/Sports/Football/Champions League",
    "Spare/Games/Sports/Football/Messi2",
]


def generateAbsoluteDownstreamAndUpstreamFilePaths():
    """Generate absolute paths for upstream and downstream files based on relative paths"""
    # If x is a known value
    result = [(baseDownstream + item, baseUpstream + item) for item in relativeSourceFilePaths]
    return result