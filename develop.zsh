python3 transport.py
sleep 3
open -a "Google Chrome" "http://localhost:8000/"
gatsby develop
git diff
git add .
read commitMessage
git commit -m "$commitMessage"
git push