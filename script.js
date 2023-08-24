document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generateBtn");
    const followerCountInput = document.getElementById("followerCount");
    const celebrationText = document.getElementById("celebrationText");
    const screenshotBtn = document.getElementById("screenshotBtn");

    generateBtn.addEventListener("click", function() {
        const followerCount = parseInt(followerCountInput.value);
        if (!isNaN(followerCount)) {
            const text = generateCelebrationText(followerCount);
            celebrationText.textContent = text;
        }
    });

    screenshotBtn.addEventListener("click", function() {
        takeScreenshot();
    });

    function generateCelebrationText(count) {
        return `🎉 Congratulations! You've reached ${count} followers on social media! 🎉`;
    }

    function takeScreenshot() {
        html2canvas(celebrationText).then(function(canvas) {
            const link = document.createElement('a');
            link.download = 'follower_celebration.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }

    function generateCelebrationText(count) {
        const formattedCount = formatFollowers(count);
        return `🎉 Congratulations! You've reached ${formattedCount} followers on social media! 🎉`;
    }
    
    function formatFollowers(count) {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(count % 1000000 === 0 ? 0 : 1) + "M";
        } else if (count >= 1000) {
            return (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "k";
        } else {
            return count.toString();
        }
    }
    
});
