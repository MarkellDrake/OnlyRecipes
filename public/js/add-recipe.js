document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const ingredientsContaier = document.querySelector('.ingredients');
    const addButton = document.querySelector('.add-ingredient');

    form.addEventListener ('submit', (e) => {
        e.preventDefault();

        const recipeName = document.querySelector('#recipe-name').value;
        const recipeInstructions = document.querySelector('#recipe-instructions').value;
        
        const ingredients = [];
        const ingredientContainers = document.querySelectorAll('.ingredient');
        ingredientContainers.forEach((container) => {
            const ingredientName = container.querySelector('input[name="recipe-ingredient-name"]').value;
            const ingredientUnit = container.querySelector('input[name="recipe-ingredient-unit"]').value;
            const ingredientAmount = container.querySelector('input[name="recipe-ingredient-amount"]').value;
            const ingredientObj = {
                name: ingredientName,
                measurement_type: ingredientUnit,
                amount: ingredientAmount,
            }
            ingredients.push(ingredientObj);
        });

        const formData = {
            name: recipeName,
            instructions: recipeInstructions,
            ingredients: ingredients
        }

        const dataString = JSON.stringify(formData);

        console.log(dataString);

        fetch('/api/recipe/add-recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: dataString,
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    });

    addButton.addEventListener('click', () => {
        const newIngredient = document.createElement('div');
        newIngredient.classList.add('ingredient');
        newIngredient.innerHTML = `
        <label for="recipe-ingredient-name">Ingredient Name:</label>
        <input class="form-input" type="text" id="recipe-ingredient-name" name="recipe-ingredient-name"/>
        <label for="recipe-ingredient-unit">Ingredient Unit of Measurement:</label>
        <input class="form-input" type="text" id="recipe-ingredient-unit" name="recipe-ingredient-unit"/>
        <label for="recipe-ingredient-amount">Ingredient Amount:</label>
        <input class="form-input" type="text" id="recipe-ingredient-amount" name="recipe-ingredient-amount"/>
        <button class="remove-ingredient" type="button">Remove</button>
        `;
        ingredientsContaier.appendChild(newIngredient);
    });

    ingredientsContaier.addEventListener('click', (e) => {
        if (e.target.className === 'remove-ingredient') {
            const ingredientToRemove = e.target.parentNode;
            ingredientToRemove.remove();
        }
    });
});