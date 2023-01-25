
const endpoint = 'http://127.0.0.1:8090/';

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

let africanSites = document.getElementById("afri_submit");
africanSites.addEventListener('click', (event) => loadAfriSites());


async function loadAfriSites () {
    try {
    let city = document.getElementById("afriSites").value;
    const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
    const sitesContent = await sitesResponse.text();
    let obj = JSON.parse(sitesContent);
    let newlist = "";
    for (let z=0; z<obj.length; z++){
        var key = Object.keys(obj[z]);
        newlist+="<ul>";
        newlist+="<li class='classAfri'>";
        newlist+=key;
        newlist+="</li>";
        newlist+="</ul>";
        var description = obj[z][key];
        newlist+="<p>";
        newlist+=description;
        newlist+="</p>";
    }
    document.getElementById('afri_sites').innerHTML = newlist; 

    const listItems = document.querySelectorAll('.classAfri');
    for (const listItem of listItems) {
        listItem.addEventListener('click', (event) => afriComments(event.target.textContent));
    }

    }
    catch (e) {
        alert(e);
    }
}

async function afriComments(site){
    const commentResponse = await fetch(`http://127.0.0.1:8090/comments/${site}`);
    const commentContent = await commentResponse.text();
    let obj = JSON.parse(commentContent); /*commentResponse */
    let newlist = "";
    for (let z=0; z<obj.length; z++){
        /*var key = Object.keys(obj[z]);
        newlist+="<ul>";
        newlist+="<li>";
        newlist+=key;
        newlist+=":";
        newlist+="</li>";
        newlist+="</ul>";
        var description = obj[z][key];
        newlist+="<p>";
        newlist+=description;
        newlist+="</p>";*/
        newlist+="<p>";
        newlist+=obj[z];
        newlist+="</p>";
    }
    document.getElementById("africa_comments").innerHTML = newlist;
}

let asiaSites = document.getElementById("asia_submit");
asiaSites.addEventListener('click', (event) => loadAsiaSites());


async function loadAsiaSites () {
    try{
        let city = document.getElementById("asianSites").value;
        const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
        const sitesContent = await sitesResponse.text();
        let obj = JSON.parse(sitesContent);
        let newlist = "";
        for (let z=0; z<obj.length; z++){
            var key = Object.keys(obj[z]);
            newlist+="<ul>";
            newlist+="<li class='classAsia'>";
            newlist+=key;
            newlist+="</li>";
            newlist+="</ul>";
            var description = obj[z][key];
            newlist+="<p>";
            newlist+=description;
            newlist+="</p>";
        }
        document.getElementById('asia_sites').innerHTML = newlist;

        const listItems = document.querySelectorAll('.classAsia');
        for (const listItem of listItems) {
            listItem.addEventListener('click', (event) => asiaComments(event.target.textContent));
        }
    }
    catch (e) {
        alert(e);
    }
}

async function asiaComments(site){
    const commentResponse = await fetch(`http://127.0.0.1:8090/comments/${site}`);
    const commentContent = await commentResponse.text();
    let obj = JSON.parse(commentContent); 
    let newlist = "";
    for (let z=0; z<obj.length; z++){
        var key = Object.keys(obj[z]);
        /*newlist+="<ul>";
        newlist+="<li>";
        newlist+=key;
        newlist+=":";
        newlist+="</li>";
        newlist+="</ul>";
        var description = obj[z][key];
        newlist+="<p>";
        newlist+=description;
        newlist+="</p>";*/
        newlist+="<p>";
        newlist+=obj[z];
        newlist+="</p>";
    }
    document.getElementById("asia_comments").innerHTML = newlist;
}

let europeSites = document.getElementById("euro_submit");
europeSites.addEventListener('click', (event) => loadEuroSites());


async function loadEuroSites () {
    try{
        let city = document.getElementById("euroSites").value;
        const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
        const sitesContent = await sitesResponse.text();
        let obj = JSON.parse(sitesContent);
        let newlist = "";
        for (let z=0; z<obj.length; z++){
            var key = Object.keys(obj[z]);
            newlist+="<ul>";
            newlist+="<li class='classEuro'>";
            newlist+=key;
            newlist+="</li>";
            newlist+="</ul>";
            var description = obj[z][key];
            newlist+="<p>";
            newlist+=description;
            newlist+="</p>";
        }
        document.getElementById('euro_sites').innerHTML = newlist;

        const listItems = document.querySelectorAll('.classEuro');
        for (const listItem of listItems) {
            listItem.addEventListener('click', (event) => euroComments(event.target.textContent));
        }
    }
    catch(e){
        alert(e);
    }
}

async function euroComments(site){
    const commentResponse = await fetch(`http://127.0.0.1:8090/comments/${site}`);
    const commentContent = await commentResponse.text();
    let obj = JSON.parse(commentContent); 
    let newlist = "";
    for (let z=0; z<obj.length; z++){
        /*var key = Object.keys(obj[z]);
        newlist+="<ul>";
        newlist+="<li>";
        newlist+=key;
        newlist+=":";
        newlist+="</li>";
        newlist+="</ul>";
        var description = obj[z][key];
        newlist+="<p>";
        newlist+=description;
        newlist+="</p>";*/
        newlist+="<p>";
        newlist+=obj[z];
        newlist+="</p>";
    }
    document.getElementById("euro_comments").innerHTML = newlist;
}

let NASites = document.getElementById("na_submit");
NASites.addEventListener('click', (event) => loadNASites());


async function loadNASites () {
    try{
        let city = document.getElementById("naSites").value;
        const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
        const sitesContent = await sitesResponse.text();
        let obj = JSON.parse(sitesContent);
        let newlist = "";
        for (let z=0; z<obj.length; z++){
            var key = Object.keys(obj[z]);
            newlist+="<ul>";
            newlist+="<li class='classNA'>";
            newlist+=key;
            newlist+="</li>";
            newlist+="</ul>";
            var description = obj[z][key];
            newlist+="<p>";
            newlist+=description;
            newlist+="</p>";
        }
        document.getElementById('na_sites').innerHTML = newlist;

        const listItems = document.querySelectorAll('.classNA');
        for (const listItem of listItems) {
            listItem.addEventListener('click', (event) => naComments(event.target.textContent));
        }
    }
    catch(e){
        alert(e);
    }
}

async function naComments(site){
    const commentResponse = await fetch(`http://127.0.0.1:8090/comments/${site}`);
    const commentContent = await commentResponse.text();
    let obj = JSON.parse(commentContent); 
    let newlist = "";
    for (let z=0; z<obj.length; z++){
        /*var key = Object.keys(obj[z]);
        newlist+="<ul>";
        newlist+="<li>";
        newlist+=key;
        newlist+=":";
        newlist+="</li>";
        newlist+="</ul>";
        var description = obj[z][key];
        newlist+="<p>";
        newlist+=description;
        newlist+="</p>";*/
        newlist+="<p>";
        newlist+=obj[z];
        newlist+="</p>";
    }
    document.getElementById("na_comments").innerHTML = newlist;

}

let SASites = document.getElementById("sa_submit");
SASites.addEventListener('click', (event) => loadSASites());


async function loadSASites () {
    try{
        let city = document.getElementById("saSites").value;
        const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
        const sitesContent = await sitesResponse.text();
        let obj = JSON.parse(sitesContent);
        let newlist = "";
        for (let z=0; z<obj.length; z++){
            var key = Object.keys(obj[z]);
            newlist+="<ul>";
            newlist+="<li class='classSA'>";
            newlist+=key;
            newlist+="</li>";
            newlist+="</ul>";
            var description = obj[z][key];
            newlist+="<p>";
            newlist+=description;
            newlist+="</p>";
        }
        document.getElementById('sa_sites').innerHTML = newlist;

        const listItems = document.querySelectorAll('.classSA');
        for (const listItem of listItems) {
            listItem.addEventListener('click', (event) => saComments(event.target.textContent));
        }
    }
    catch(e){
        alert(e);
    }
}

async function saComments(site){
    const commentResponse = await fetch(`http://127.0.0.1:8090/comments/${site}`);
    const commentContent = await commentResponse.text();
    let obj = JSON.parse(commentContent); 
    let newlist = "";
    for (let z=0; z<obj.length; z++){
        /*var key = Object.keys(obj[z]);
        newlist+="<ul>";
        newlist+="<li>";
        newlist+=key;
        newlist+=":";
        newlist+="</li>";
        newlist+="</ul>";
        var description = obj[z][key];
        newlist+="<p>";
        newlist+=description;
        newlist+="</p>";*/
        newlist+="<p>";
        newlist+=obj[z];
        newlist+="</p>";
    }
    document.getElementById("sa_comments").innerHTML = newlist;

}

let AUSites = document.getElementById("au_submit");
AUSites.addEventListener('click', (event) => loadAUSites());


async function loadAUSites () {
    try{
        let city = document.getElementById("auSites").value;
        const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
        const sitesContent = await sitesResponse.text();
        let obj = JSON.parse(sitesContent);
        let newlist = "";
        for (let z=0; z<obj.length; z++){
            var key = Object.keys(obj[z]);
            newlist+="<ul>";
            newlist+="<li class='classAU'>";
            newlist+=key;
            newlist+="</li>";
            newlist+="</ul>";
            var description = obj[z][key];
            newlist+="<p>";
            newlist+=description;
            newlist+="</p>";
        }
        document.getElementById('au_sites').innerHTML = newlist;

        const listItems = document.querySelectorAll('.classAU');
        for (const listItem of listItems) {
            listItem.addEventListener('click', (event) => auComments(event.target.textContent));
        }
    }
    catch(e){
        alert(e);
    }
}

async function auComments(site){
    const commentResponse = await fetch(`http://127.0.0.1:8090/comments/${site}`);
    const commentContent = await commentResponse.text();
    let obj = JSON.parse(commentContent); 
    let newlist = "";
    for (let z=0; z<obj.length; z++){
        /*var key = Object.keys(obj[z]);
        newlist+="<ul>";
        newlist+="<li>";
        newlist+=key;
        newlist+=":";
        newlist+="</li>";
        newlist+="</ul>";
        var description = obj[z][key];
        newlist+="<p>";
        newlist+=description;
        newlist+="</p>";*/
        newlist+="<p>";
        newlist+=obj[z];
        newlist+="</p>";
    }
    document.getElementById("au_comments").innerHTML = newlist;

}

let comment = document.getElementById("comment_submit");
comment.addEventListener('click', (event) => addComment())

async function addComment () {
    /*var data = '{ "key:"';
    const site = document.getElementById('commentSite').value;
    data += site + ', "content":';
    const name = document.getElementById('commentName').value;
    data += name + ': ';
    const Body = document.getElementById('commentBody').value;
    data += Body + "}"*/
    /* USE STRINGIFY OR PARSE*/
    const site = document.getElementById('commentSite').value;
    let name = document.getElementById('commentName').value;
    const Body = document.getElementById('commentBody').value;
    name += ": " + Body;
    const data = {key:site, content:name};
    const response = await fetch(`http://127.0.0.1:8090/addComment`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' /*'text/plain'*/
            },
        body: JSON.stringify(data)
    });
    /* recipeForm.reset(); */
    document.getElementById("afterComment").innerHTML=`Comment has been published!`;
};

    


document.addEventListener('DOMContentLoaded', addButton);
document.addEventListener('DOMContentLoaded', asiaCountry); 
document.addEventListener('DOMContentLoaded', addNA)