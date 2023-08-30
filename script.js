// Obtén el elemento del texto de celebración
const celebrationText = document.getElementById("celebrationText");

// Event listener para las opciones de fondo
const backgroundOptions = document.querySelectorAll("#backgroundDropdown li");
backgroundOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedColor = option.textContent.toLowerCase();
    celebrationText.style.backgroundColor = selectedColor;
  });
});
