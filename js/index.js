
// search field
let loupe = document.querySelector('#loupe');
let MobileSearchField = document.querySelector('#mobile-search-field');



let toggleSearch = () =>{
    MobileSearchField.classList.toggle('search-field-visible');
}
loupe.addEventListener('click', toggleSearch);

// Nav menu
let burger = document.querySelector('.burger');
let mobileNavMenu = document.querySelector('.navLinks-container');

let toggleNavMenu = () =>{
    mobileNavMenu.classList.toggle('nav-menu-visible');
    burger.classList.toggle('open');
}
burger.addEventListener('click', toggleNavMenu);

// modal client
let modalClient = document.querySelector('.modal-client-background');
let clientButton =document.querySelector('.login');
let connection = document.querySelector('.connection');

let toggleConnectionModal = () =>{
    modalClient.classList.toggle('connection-modal-visible');
}
let closeConnectionModal = () =>{
    modalClient.classList.remove('connection-modal-visible');
}

clientButton.addEventListener('click', toggleConnectionModal);
connection.addEventListener('click', closeConnectionModal);


// modal panier vide
let panier = document.querySelector('.panier');
let modalePanierVide = document.querySelector('#modal-panier-vide');

let modalPanierVideVisible = () =>{
    modalePanierVide.classList.toggle('connection-modal-visible');
}

panier.addEventListener('click', modalPanierVideVisible);

// modale newsletter
let cross = document.querySelector('.cross');
let modalNewsletter = document.querySelector('.newsletter-modal');

let modalNewsletterTimer = () => {
    modalNewsletter.classList.add('newsletter-modal-visible');
}
setTimeout(()=> {
    modalNewsletterTimer();
}, 5000);

let closeNewsletterModal = () => {
    modalNewsletter.classList.remove('newsletter-modal-visible');
};
cross.addEventListener('click', closeNewsletterModal);

