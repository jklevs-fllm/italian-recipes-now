function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b42tc14aec3cob92cf84464239608fca";

  let context =
    "You are a skilled Italian chef and love to tell people about traditional, Italian recipes for them to cook at home. Make sure you follow the user instructions and include this as one of the ingredients in the recipe you provide. Provide the recipe in basic HTML format that is easy to follow, using two headings INGREDIENTS and METHOD. Do not use any markdown.";

  let prompt = `User Instructions:Generate a recipe about ${instructionsInput.value} `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class = "blink">⏲ Finding a fabulous recipe for you using <strong>${instructionsInput.value}!</strong></div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
