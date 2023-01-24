
const endpoint = 'http://127.0.0.1:8090/';

/*
let african_cities = document.getElementById('african_cities');

function addButton() {
african_cities.addEventListener('click', async function listCities (event){ 
    const cityResponse = await fetch(`http://127.0.0.1:8090/africanCities`);
    let body = await cityResponse.text();
    document.getElementById("list_african_cities").innerHTML = body;
})}
*/

let african_countries = document.getElementById("afrisearch");
let country = document.getElementById('afrisearch').value; /* SHOULD BE LET INSTEAD OF VAR? */

african_countries.addEventListener('keypress', (event) => searchCountry(event.target.value));

async function searchCountry(country){
    try {
        const countryResponse = await fetch(`http://127.0.0.1:8090/africanCountry/${country}`);
        let body = await countryResponse.text();
        body = body.replaceAll("[","");
        body = body.replaceAll("]","");
        arr = body.split(",");
        let list = "";
        list +="<ul>";
        for (let i=0; i<arr.length; i++) {
            curr = arr[i];
            list += "<li class='afri_city'>"; 
            list += curr 
            list +="</li>";
        }
        list+="</ul>"

        document.getElementById('afriCountry').innerHTML = list;
        /*

        const listItems = document.querySelectorAll('.afri_city');
        for (const listItem of listItems) {
            listItem.addEventListener('click', (event) => loadSites(event.target.textContent));
        } */

        document.getElementById("afri_country_explain").innerHTML = `Click on a city to see the sites in it that have been reviewed. If there are no cities, I'm afraid this is not a popular enough destination for reviews`; 
    }
    catch(e){
        alert(e);
    }
}

let asian_countries = document.getElementById("asiasearch");

asian_countries.addEventListener('keypress', (event) => asiaCountry(event.target.value));

async function asiaCountry(country){
    try {
        const countryResponse = await fetch(`http://127.0.0.1:8090/asianCountry/${country}`);
        let body = await countryResponse.text();
        body = body.replaceAll("[","");
        body = body.replaceAll("]","");
        arr = body.split(",");
        let list = "";
        list +="<ul>";
        for (let i=0; i<arr.length; i++) {
            curr = arr[i];
            list += "<li class='asia_city'>"; 
            list += curr 
            list +="</li>";
        }
        list+="</ul>"

        document.getElementById("list_asian_cities").innerHTML = list;

        /*
        const listItems = document.querySelectorAll('.asia_city');
        for (const listItem of listItems) {
            listItem.addEventListener('click', (event) => loadSites(event.target.textContent));
        }
        */
        document.getElementById("asia_country_explain").innerHTML = `Click on a city to see the sites in it that have been reviewed. If there are no cities, I'm afraid this is not a popular enough destination for reviews`; 
    }
    catch(e){
        alert(e);
    }
}

let european_countries = document.getElementById("eurosearch");
let eurocountry = document.getElementById('eurosearch').value; /* SHOULD BE LET INSTEAD OF VAR? */

european_countries.addEventListener('keypress', (event) => searchEuroCountry(event.target.value));

async function searchEuroCountry(eurocountry){
    try {
        const euroResponse = await fetch(`http://127.0.0.1:8090/europeanCountry/${eurocountry}`);
        let ebody = await euroResponse.text();
        document.getElementById('euroCountry').innerHTML = ebody;
        
        ebody = ebody.replaceAll("[","");
        ebody = ebody.replaceAll("]","");
        earr = ebody.split(",");
        let elist = "";
        elist +="<ul>";
        for (let a=0; a<earr.length; a++) {
            ecurr = earr[a];
            elist += "<li class='euro_city'>"; 
            elist += ecurr 
            elist +="</li>";
        }
        elist+="</ul>"

        document.getElementById('euroCountry').innerHTML = elist;

        /*const elistItems = document.querySelectorAll('.euro_city');
        for (const elistItem of elistItems) {
            elistItem.addEventListener('click', (event) => loadSites(event.target.textContent));
        }
        */

        document.getElementById("euro_country_explain").innerHTML = `Click on a city to see the sites in it that have been reviewed. If there are no cities, I'm afraid this is not a popular enough destination for reviews`; 
    }
    catch(e){
        alert(e);
    }
}


let na_state = document.getElementById("nasearch");
let nastate = document.getElementById('nasearch').value;

na_state.addEventListener('keypress', (event) => searchNA(event.target.value));

async function searchNA(nastate){
    try {
        const naResponse = await fetch(`http://127.0.0.1:8090/northStates/${nastate}`);
        let nabody = await naResponse.text();
        
        nabody = nabody.replaceAll("[","");
        nabody = nabody.replaceAll("]","");
        na_arr = nabody.split(",");
        let nalist = "";
        nalist +="<ul>";
        for (let c=0; c<na_arr.length; c++) {
            nacurr = na_arr[c];
            nalist += "<li class='euro_city'>"; 
            nalist += nacurr 
            nalist +="</li>";
        }
        nalist+="</ul>"

        document.getElementById('naState').innerHTML = nalist;

        /*const elistItems = document.querySelectorAll('.euro_city');
        for (const elistItem of elistItems) {
            elistItem.addEventListener('click', (event) => loadSites(event.target.textContent));
        }*/
        document.getElementById("na_country_explain").innerHTML = `Click on a city to see the sites in it that have been reviewed. If there are no cities, I'm afraid this is not a popular enough destination for reviews`; 
    }
    catch(e){
        alert(e);
    }
}

let sa_countries = document.getElementById("sasearch");
let sacountry = document.getElementById('sasearch').value; 

sa_countries.addEventListener('keypress', (event) => searchSA(event.target.value));

async function searchSA(sacountry){
    try {
        const saResponse = await fetch(`http://127.0.0.1:8090/southAmerica/${sacountry}`);
        let sabody = await saResponse.text();
        sabody = sabody.replaceAll("[","");
        sabody = sabody.replaceAll("]","");
        sa_arr = sabody.split(",");
        let salist = "";
        salist +="<ul>";
        for (let e=0; e<sa_arr.length; e++) {
            sacurr = sa_arr[e];
            salist += "<li class='sa_city'>"; 
            salist += sacurr 
            salist +="</li>";
        }
        salist+="</ul>"

        document.getElementById('saCountry').innerHTML = salist;
        /*

        const salistItems = document.querySelectorAll('.sa_city');
        for (const salistItem of salistItems) {
            salistItem.addEventListener('click', (event) => loadSites(event.target.textContent));
        } */

        document.getElementById("sa_country_explain").innerHTML = `Click on a city to see the sites in it that have been reviewed. If there are no cities, I'm afraid this is not a popular enough destination for reviews`; 
    }
    catch(e){
        alert(e);
    }
}

let au_states = document.getElementById("ausearch");
let austate = document.getElementById('ausearch').value;

au_states.addEventListener('keypress', (event) => searchAU(event.target.value));

async function searchAU(austate){
    try {
        const auResponse = await fetch(`http://127.0.0.1:8090/australia/${austate}`);
        let aubody = await auResponse.text();
        aubody = aubody.replaceAll("[","");
        aubody = aubody.replaceAll("]","");
        auarr = aubody.split(",");
        let aulist = "";
        aulist +="<ul>";
        for (let f=0; f<auarr.length; f++) {
            aucurr = auarr[f];
            aulist += "<li class='au_city'>"; 
            aulist += aucurr 
            aulist +="</li>";
        }
        aulist+="</ul>"

        document.getElementById('auState').innerHTML = aulist;
        /*

        const salistItems = document.querySelectorAll('.sa_city');
        for (const salistItem of salistItems) {
            salistItem.addEventListener('click', (event) => loadSites(event.target.textContent));
        } */

        document.getElementById("au_country_explain").innerHTML = `Click on a city to see the sites in it that have been reviewed. If there are no cities, I'm afraid this is not a popular enough destination for reviews`; 
    }
    catch(e){
        alert(e);
    }
}

let africanSites = document.getElementById("afriSites");
africanSites.addEventListener('keypress', (event) => loadAfriSites(event.target.value));


async function loadAfriSites (city) {
    try {
    const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
    const sitesContent = await sitesResponse.text();
    let obj = JSON.parse(sitesContent)
    let newlist = "";
    for (let z=0; z<obj.length; z++){
        var key = Object.keys(obj[z]);
        newlist+="<ul>";
        newlist+="<li>";
        newlist+=key;
        newlist+="</li>";
        newlist+="</ul>";
    }
    document.getElementById('afri_sites').innerHTML = newlist; 
    }
    catch (e) {
        alert(e);
    }
}

let asiaSites = document.getElementById("asianSites");
asiaSites.addEventListener('keypress', (event) => loadAsiaSites(event.target.value));


async function loadAsiaSites (city) {
    const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
    const sitesContent = await sitesResponse.text();
    document.getElementById('asia_sites').innerHTML = sitesContent;
}

let europeSites = document.getElementById("euroSites");
europeSites.addEventListener('keypress', (event) => loadEuroSites(event.target.value));


async function loadEuroSites (city) {
    const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
    const sitesContent = await sitesResponse.text();
    document.getElementById('euro_sites').innerHTML = sitesContent;
}

let NASites = document.getElementById("naSites");
NASites.addEventListener('keypress', (event) => loadNASites(event.target.value));


async function loadNASites (city) {
    const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
    const sitesContent = await sitesResponse.text();
    document.getElementById('na_sites').innerHTML = sitesContent;
}

let SASites = document.getElementById("saSites");
SASites.addEventListener('keypress', (event) => loadSASites(event.target.value));


async function loadSASites (city) {
    const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
    const sitesContent = await sitesResponse.text();
    document.getElementById('sa_sites').innerHTML = sitesContent;
}

let AUSites = document.getElementById("auSites");
AUSites.addEventListener('keypress', (event) => loadAUSites(event.target.value));


async function loadAUSites (city) {
    const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
    const sitesContent = await sitesResponse.text();
    document.getElementById('au_sites').innerHTML = sitesContent;
}


document.addEventListener('DOMContentLoaded', addButton);
document.addEventListener('DOMContentLoaded', asiaCountry); 
document.addEventListener('DOMContentLoaded', addNA)