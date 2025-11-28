import spotipy
from spotipy.oauth2 import SpotifyOAuth

# Set up authentication (replace with your own client_id, client_secret, and redirect_uri)
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(
    client_id="8050d0150a1747208610754f0acb36a9",
    client_secret="5b24722a238a44e1ad6eb242de703199",
    redirect_uri="http://localhost:8888/callback",
    scope="user-top-read"
))

# Get top artists
results = sp.current_user_top_artists(limit=200, time_range='medium_term')
for idx, artist in enumerate(results['items']):
    print(f"{idx+1}: {artist['name']}")