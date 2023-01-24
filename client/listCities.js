
const endpoint = 'http://127.0.0.1:8090/';

/*
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
    for (const listItem of listItems) {
        listItem.addEventListener('click', (event) => loadCity(event.target.textContent));
    } 
}

let africa_button = document.getElementById('african_cities');

africa_button.addEventListener('click', async function listCity (event){
    const cityResponse = await fetch(`http://127.0.0.1:8090/cities`);
    let body = await response.text();
    document.getElementById('list_african_cities').innerHTML = body;
})

document.addEventListener('DOMContentLoaded', listCities);
document.addEventListener('DOMContentLoaded', listCity);

*/


let african_cities = document.getElementById('african_cities');

function addButton() {
african_cities.addEventListener('click', async function listCities (event){ 
    const cityResponse = await fetch(`http://127.0.0.1:8090/africanCities`);
    let body = await cityResponse.text();
    document.getElementById("list_african_cities").innerHTML = body;
})}

let african_countries = document.getElementById("afrisearch");
let country = document.getElementById('afrisearch').value;

african_countries.addEventListener('keypress', (event) => searchCountry(event.target.value));

async function searchCountry(country){
    try {
        const countryResponse = await fetch(`http://127.0.0.1:8090/africanCountry/${country}`);
        let body = await countryResponse.text();
        body = body.replaceAll("[","");
        body = body.replaceAll("]","");
        arr = body.split(",");
        let list = "";
        list +=`<ul>`;
        for (let i=0; i<arr.length; i++) {
            curr = arr[i];
            list += `<li class='afri_city'>` + curr + `</li>`;
        }
        list+=`</ul>`

        document.getElementById('afriCountry').innerHTML = list;
        document.getElementById("country_explain").innerHTML = `Click on a city to see the sites in it that have been reviewed. If there are no cities, I'm afraid this is not a popular enough destination for reviews`; 
    }
    catch(e){
        alert(e);
    }
}

document.addEventListener('DOMContentLoaded', addButton);
/* document.addEventListener('DOMContentLoaded', searchCountry); */