const end = 'http://127.0.0.1:8090/';

async function listCities (continent) {
    const recipeResponse = await fetch(`http://127.0.0.1:8090/cities/${continent}`);
    const cityKeysText = await cityResponse.text();
    const cityKeys = JSON.parse(cityKeysText);
    const cityListElt = document.getElementById('list_african_cities');
    let list = '';
    for (const cityKey of cityKeys) {
        list += `<li class='city_list_item'>${cityKey}</li>`;
    }
    cityListElt.innerHTML = list;
    const listItems = document.querySelectorAll('.recipe_list_item');
    for (const listItem of listItems) {
        listItem.addEventListener('click', (event) => loadRecipe(event.target.textContent));
    }
}

document.addEventListener('DOMContentLoaded', listCities);
