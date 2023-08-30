// Obtén el elemento del texto de celebración
const celebrationText = document.getElementById("celebrationText");

// Función para cambiar el fondo del texto de celebración
function changeBackgroundColor(color) {
  celebrationText.style.backgroundColor = color;
}

// Event listener para las opciones de fondo
const backgroundOptions = document.querySelectorAll("#backgroundDropdown li");
backgroundOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedColor = option.textContent.toLowerCase();
    changeBackgroundColor(selectedColor);
  });
});

// Event listener para las opciones de fuente
const fontOptions = document.querySelectorAll("#fontDropdown .font-option");
fontOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedFont = option.getAttribute("value");
    celebrationText.style.fontFamily = selectedFont;
  });
});

// Event listener para las opciones de emoji
const emojiOptions = document.querySelectorAll("#emojiDropdown li");
emojiOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedEmoji = option.textContent;
    celebrationText.textContent = selectedEmoji + " Congratulations! You've reached 11 followers on social media! " + selectedEmoji;
  });
});

// Obtén el elemento del input de seguidores
const followerCountInput = document.getElementById("followerCount");

// Función para formatear el número con "k" o "M"
function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "k";
  } else {
    return number.toString();
  }
}

// Event listener para el cambio en el input de seguidores
followerCountInput.addEventListener("input", function () {
  const followerCount = followerCountInput.value;
  const formattedCount = formatNumber(followerCount);
  celebrationText.textContent = `🎉 Congratulations! You've reached ${formattedCount} followers on social media! 🎉`;
});


// Cierra los dropdowns cuando se hace clic fuera de ellos
window.addEventListener("click", function (event) {
  dropdowns.forEach(function (dropdown) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  });
});
