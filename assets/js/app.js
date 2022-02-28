// catch menu
const menu = document.querySelector('.menu h5');
const menuItem = document.querySelector('.menuItem');
const frontPart = document.querySelector('.frontPart');
const innerPart = document.querySelector('.innerPart');
const back = document.querySelector('.back');
const body = document.querySelector('body');

const allItems = document.querySelectorAll('.menuItem ul li');

menu.addEventListener('click',()=>{
    menuItem.classList.toggle('active');
    let icon = document.querySelector('.menu i')
    icon.classList.toggle('active')

   menuItem.parentElement.addEventListener('click',function(e){
       if(e.target==this){
        menuItem.classList.remove('active');
        icon.classList.remove('active')
       }
   })
})

allItems.forEach(element => {
    element.addEventListener('click',function(){
        console.log(this)
        let own = this
        frontPart.classList.add('active')
        innerPart.classList.add('active')

    })
});
back.addEventListener('click',()=>{
    frontPart.classList.remove('active')
    innerPart.classList.remove('active')
})


const mobileMenuHead = document.querySelector('.mobileMenuHead button')
mobileMenuHead.addEventListener('click',()=>{
    menuItem.classList.remove('active')
})














// footer

const currentCountry = document.querySelector('.currentCountry');
const allCountry = document.querySelectorAll('.country');
const footerItem = document.querySelectorAll('.footerItem h6');

currentCountry.addEventListener('click',function(){
    const allCountry = document.querySelector('.allCountryWin');
    allCountry.classList.toggle('active');
    const close = document.querySelector('.allCountry button')
    close.addEventListener('click',()=>{
        allCountry.classList.remove('active');
    })
})
footerItem.forEach(item=>{
    item.addEventListener('click',function(){
        console.log(this.parentElement.parentElement.lastChild.previousElementSibling)

        this.parentElement.parentElement.lastChild.previousElementSibling.classList.toggle('active');
        
    })
})




























