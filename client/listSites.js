
let africa_sites = document.getElementById('african_sites');
function addButton() {
africa_sites.addEventListener('click', async function listSites (event){
    const siteResponse = await fetch(`http://127.0.0.1:8090/sites`);
    let body = await siteResponse.text();
    document.getElementById('sites_africa').innerHTML = body;
})}

document.addEventListener('DOMContentLoaded', addButton);
