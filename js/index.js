

let loupe = document.querySelector('#loupe');
let MobileSearchField = document.querySelector('#mobile-search-field');
console.log(loupe);
console.log(MobileSearchField);


let toggleSearch = () =>{
    MobileSearchField.classList.toggle('search-field-visible');
    console.log('ok');
}
loupe.addEventListener('click', toggleSearch);