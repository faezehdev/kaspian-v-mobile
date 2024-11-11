//  MOBILE HEADER
let headerr =  document.querySelector('header')
let OPButton = document.querySelector('.openbtn')
let headerItem = document.querySelectorAll('header .Menu-Item')
let Menu = document.querySelector('header .Menu')
OPButton.addEventListener('click',()=>{
          Menu.classList.toggle('Open')
          OPButton.classList.toggle('Open')
          headerr.classList.toggle('Open')

            headerr.classList.toggle('light')
     
  
})