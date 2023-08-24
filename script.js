document.addEventListener("DOMContentLoaded", function() {
    const backgroundDropdownToggle = document.getElementById("backgroundDropdownToggle");
    const backgroundDropdown = document.getElementById("backgroundDropdown");
    const followerCountInput = document.getElementById("followerCount");
    const celebrationText = document.getElementById("celebrationText");
    const screenshotBtn = document.getElementById("screenshotBtn");
    
    backgroundDropdownToggle.addEventListener("click", function() {
        backgroundDropdown.classList.toggle("active");
    });

    const backgroundOptions = document.querySelectorAll(".background-option");
    
    backgroundOptions.forEach(option => {
        option.addEventListener("click", function() {
            const selectedBackground = option.value;
            celebrationText.style.backgroundColor = selectedBackground;
        });
    });

    followerCountInput.addEventListener("input", function() {
        const followerCount = parseInt(followerCountInput.value);
        if (!isNaN(followerCount)) {
            const formattedCount = formatFollowers(followerCount);
            celebrationText.innerHTML = `🎉 Congratulations! You've reached ${formattedCount} followers on social media! 🎉`;
        }
    });

    // ... (rest of the code) ...
});
