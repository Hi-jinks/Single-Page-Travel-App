const end = 'http://127.0.0.1:8090/';

async function listCities (continent) {
    const cityResponse = await fetch(`http://127.0.0.1:8090/cities/${continent}`);
    const cityNamesText = await cityResponse.text();
    const cityNames = JSON.parse(cityNamesText);
    const cityListElt = document.getElementById('list_african_cities');
    let list = '';
    for (const cityName of cityNames) {
        list += `<li class='city_list_item'>${cityName}</li>`;
    }
    cityListElt.innerHTML = list;
    const listItems = document.querySelectorAll('.city_list_item');
    /* for (const listItem of listItems) {
        listItem.addEventListener('click', (event) => loadCity(event.target.textContent));
    } */
}

document.addEventListener('DOMContentLoaded', listCities);
