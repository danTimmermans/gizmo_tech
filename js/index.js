
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


let toggleConnectionModal = () =>{
    modalClient.classList.toggle('connection-modal-visible');
}

clientButton.addEventListener('click', toggleConnectionModal);