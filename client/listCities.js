const endpoint = 'http://127.0.0.1:8090/';

function addButton(){ 
    try {
        let submit = document.querySelectorAll(".submitCountry");
        for (sub of submit){
            sub.addEventListener('keypress', (event) => searchCountry(event.target.id));
        }
    }
    catch (e) {
        alert(e);
    }
} 

async function searchCountry(continent) {
    try{
        let city = document.getElementById(continent).value;

        const countryResponse = await fetch(`http://127.0.0.1:8090/country/${continent}/${city}`);

        let body = await countryResponse.text();
        body = body.replaceAll("[","");
        body = body.replaceAll("]","");
        arr = body.split(",");
        let list = "";
        list +="<ul>";
        for (let i=0; i<arr.length; i++) {
            curr = arr[i];
            list += "<li>"; 
            list += curr 
            list +="</li>";
        }
        list+="</ul>"

        if (continent=="Africa") {
            document.getElementById('afriCountry').innerHTML = list;
        }
        else if (continent=="Asia"){
            document.getElementById("list_asian_cities").innerHTML = list;
        }
        else if (continent=="Europe"){
            document.getElementById('euroCountry').innerHTML = list;
        }
        else if (continent=="North America"){
            document.getElementById('naState').innerHTML = list;
        }
        else if (continent=="South America"){
            document.getElementById('saCountry').innerHTML = list;
        }
        else if (continent=="Australia"){
            document.getElementById('auState').innerHTML = list;
        }
    }
    catch(e) {
        alert(e);
    }
}

function sitesButton() {
    try {
        let sitesSubmit = document.querySelectorAll(".submittable");
        for (s of sitesSubmit){
            s.addEventListener('click', (event) => searchSites(event.target.name)); 
        }
    }
    catch(e) {
        alert(e);
    }
}

async function searchSites(location){
    try{
        let city = document.getElementById(location).value;
        const sitesResponse = await fetch(`http://127.0.0.1:8090/sites/${city}`);
        const sitesContent = await sitesResponse.text();
        let obj = JSON.parse(sitesContent);
        let newlist = "";
        for (let z=0; z<obj.length; z++){
            var key = Object.keys(obj[z]);
            newlist+="<ul>";
            if (location=="afriSites"){
                newlist+="<li class='classAfri'>";
            }
            else if (location=="asianSites") {
                newlist+="<li class='classAsia'>";
            }
            else if (location=="euroSites"){
                newlist+="<li class='classEuro'>";
            }
            else if (location=="naSites"){
                newlist+="<li class='classNA'>";
            }
            else if (location=="saSites"){
                newlist+="<li class='classSA'>";
            }
            else if (location=="auSites"){
                newlist+="<li class='classAU'>";
            }
            newlist+=key;
            newlist+="</li>";
            newlist+="</ul>";
            var description = obj[z][key];
            newlist+="<p>";
            newlist+=description;
            newlist+="</p>";
        }

        if (location=="afriSites"){
            document.getElementById('afri_sites').innerHTML = newlist;
        }
        else if (location=="asianSites") {
            document.getElementById('asia_sites').innerHTML = newlist;
        }
        else if (location=="euroSites"){
            document.getElementById('euro_sites').innerHTML = newlist;
        }
        else if (location=="naSites"){
            document.getElementById('na_sites').innerHTML = newlist;
        }
        else if (location=="saSites"){
            document.getElementById('sa_sites').innerHTML = newlist;
        }
        else if (location=="auSites"){
            document.getElementById('au_sites').innerHTML = newlist;
        }

        if (location=="afriSites"){
            const listItems = document.querySelectorAll('.classAfri');
            for (const listItem of listItems) {
                listItem.addEventListener('click', (event) => loadComments(event.target.textContent, "africa_comments"));
            }
        }
        else if (location=="asianSites") {
            const listItems = document.querySelectorAll('.classAsia');
            for (const listItem of listItems) {
                listItem.addEventListener('click', (event) => loadComments(event.target.textContent, "asia_comments"));
            }
        }
        else if (location=="euroSites"){
            const listItems = document.querySelectorAll('.classEuro');
            for (const listItem of listItems) {
                listItem.addEventListener('click', (event) => loadComments(event.target.textContent, "euro_comments"));
        }
        }
        else if (location=="naSites"){
            const listItems = document.querySelectorAll('.classNA');
            for (const listItem of listItems) {
                listItem.addEventListener('click', (event) => loadComments(event.target.textContent, "na_comments"));
            }
        }
        else if (location=="saSites"){
            const listItems = document.querySelectorAll('.classSA');
            for (const listItem of listItems) {
                listItem.addEventListener('click', (event) => loadComments(event.target.textContent, "sa_comments"));
            }
        }
        else if (location=="auSites"){
            const listItems = document.querySelectorAll('.classAU');
            for (const listItem of listItems) {
                listItem.addEventListener('click', (event) => loadComments(event.target.textContent, "au_comments"));
            }
        }
    }
    catch(e){
        alert(e);
    }
}

async function loadComments(site, locate) {
    try{
        const commentResponse = await fetch(`http://127.0.0.1:8090/comments/${site}`);
        const commentContent = await commentResponse.text();
        let obj = JSON.parse(commentContent); 
        let newlist = "";
        for (let z=0; z<obj.length; z++){
            newlist+="<p>";
            newlist+=obj[z];
            newlist+="</p>";
        }
        document.getElementById(locate).innerHTML = newlist;
    }
    catch(e){
        alert(e);
    }
}


let comment = document.getElementById("comment_submit");
comment.addEventListener('click', (event) => addComment())

async function addComment () {
    try{
        const site = document.getElementById('commentSite').value;
        let name = document.getElementById('commentName').value;
        const Body = document.getElementById('commentBody').value;
        name += ": " + Body;
        const data = {key:site, content:name};
        const response = await fetch(`http://127.0.0.1:8090/addComment`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
                },
            body: JSON.stringify(data)
        });
        document.getElementById("afterComment").innerHTML=`Comment has been published!`;
    }
    catch (e) {
        alert(e);
    }
};
   
document.addEventListener('DOMContentLoaded', addButton); 
document.addEventListener('DOMContentLoaded', sitesButton);

