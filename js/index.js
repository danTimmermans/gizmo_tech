
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

// let modalNewsletterTimer = () => {
//     modalNewsletter.classList.add('newsletter-modal-visible');
// }
// setTimeout(()=> {
//     modalNewsletterTimer();
// }, 5000);

let closeNewsletterModal = () => {
    modalNewsletter.classList.remove('newsletter-modal-visible');
};
cross.addEventListener('click', closeNewsletterModal);

// secondary nav menu 
let allProducts = document.querySelector('#all-products');
let secondaryNav = document.querySelector('.secondary-nav');
let secondaryNavMenuPromo = document.querySelector('#promo-gizmo');
let secondaryNavMenuPhoto = document.querySelector('#photos-videos');
let secondaryNavMenuItemPromo =document.querySelector('.secondary-nav-menu-item-promo');
let secondaryNavMenuItemPhoto =document.querySelector('.secondary-nav-menu-item-photo');
let secondaryNavMenuItemReparateurs = document.querySelector('#reparateur');
let secondaryNavMenuItemInfo = document.querySelector('#info-contact');
let closeSecondaryNav = document.querySelector('.close-secondary-menu');

let secondaryNavVisible = () =>{
    secondaryNav.classList.add('secondary-nav-visible');
}
let closeSecondaryNavMenu = () => {
    secondaryNav.classList.remove('secondary-nav-visible');
}
closeSecondaryNav.addEventListener('click', closeSecondaryNavMenu);

allProducts.addEventListener('mouseover', secondaryNavVisible)

let secondaryNavMenuItemPromoVisible = () =>{
    secondaryNavMenuItemPromo.classList.add('secondary-nav-menu-item-items-visible');
    secondaryNavMenuItemPhoto.classList.remove('secondary-nav-menu-item-items-visible');
}

let secondaryNavMenuItemPhotoVisible = () =>{
    secondaryNavMenuItemPhoto.classList.add('secondary-nav-menu-item-items-visible');
    secondaryNavMenuItemPromo.classList.remove('secondary-nav-menu-item-items-visible');
}

let secondaryNavMenuItemPromoInvisible = () =>{
    secondaryNavMenuItemPromo.classList.remove('secondary-nav-menu-item-items-visible')
}
let secondaryNavMenuItemPhotoInvisible = () =>{
    secondaryNavMenuItemPhoto.classList.remove('secondary-nav-menu-item-items-visible')
}

let allSecondaryMenuInvisible = () =>{
    secondaryNavMenuItemPromo.classList.remove('secondary-nav-menu-item-items-visible');
    secondaryNavMenuItemPhoto.classList.remove('secondary-nav-menu-item-items-visible');
}

secondaryNavMenuPromo.addEventListener('mouseover', secondaryNavMenuItemPromoVisible);

secondaryNavMenuPhoto.addEventListener('mouseover', secondaryNavMenuItemPhotoVisible);

secondaryNav.addEventListener('mouseleave', closeSecondaryNavMenu);

secondaryNavMenuItemReparateurs.addEventListener('mouseover', allSecondaryMenuInvisible);
secondaryNavMenuItemInfo.addEventListener('mouseover', allSecondaryMenuInvisible);
