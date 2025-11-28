source /Users/davi/Desktop/Code/notes2/.venv/bin/activate
python3 helper/transport.py
sleep 3
open -a "Google Chrome" "http://localhost:8000/"
gatsby develop
git diff
git add .

# User sign-off section
echo "📝 Please review and sign off on the following:"
echo ""
echo "1. Memory Trigger - Have you added/updated the memory trigger for this content?"
echo "   (This helps with retention and recall)"
read -p "✅ Sign off on Memory Trigger (y/n): " memoryTrigger

echo ""
echo "2. Quiz Question - Have you created/updated quiz questions for this content?"
echo "   (This helps with active learning and comprehension)"
read -p "✅ Sign off on Quiz Question (y/n): " quizQuestion

echo ""
if [[ "$memoryTrigger" != "y" ]] || [[ "$quizQuestion" != "y" ]]; then
    echo "⚠️  Please complete the missing items before proceeding."
    echo "Exiting..."
    exit 1
fi

echo "✅ Both items signed off! Proceeding with commit..."
echo ""

read -p "Enter commit message: " commitMessage
git commit -m "$commitMessage"

git push