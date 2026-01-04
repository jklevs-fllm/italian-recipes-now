function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "TRADITIONAL CARBONARA",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
