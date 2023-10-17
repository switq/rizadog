const itens = document.getElementById('itens');

function toggleMap(event) {
    event.preventDefault();
    if (mapa.style.display != "flex") mapa.style.display = "flex";
    else mapa.style.display = "none";
}

function toggleMenu(event) {
    event.preventDefault();
    if (itens.style.display != 'block') itens.style.display = 'block';
    else itens.style.display = 'none';
}

function itemMenu() {
    itens.style.display = 'none';
}

document.getElementById('map').addEventListener('click', e => toggleMap(e));
document.getElementById('fechaMapa').addEventListener('click', e => toggleMap(e));
document.getElementById('mapa').addEventListener('click', e => toggleMap(e));

document.getElementById('menuToggle').addEventListener('click', e => toggleMenu(e));
document.getElementById('fechaNav').addEventListener('click', e => toggleMenu(e));

const itensNav = document.querySelectorAll('.itemNav');
itensNav.forEach(item => item.addEventListener('click', itemMenu))