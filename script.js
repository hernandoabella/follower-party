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

// Event listener para el cambio en el input de seguidores
followerCountInput.addEventListener("input", function () {
  const followerCount = followerCountInput.value;
  celebrationText.textContent = `🎉 Congratulations! You've reached ${followerCount} followers on social media! 🎉`;
});

// Cierra los dropdowns cuando se hace clic fuera de ellos
window.addEventListener("click", function (event) {
  dropdowns.forEach(function (dropdown) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  });
});
