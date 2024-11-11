// //  MOBILE HEADER
// let headerr =  document.querySelector('header')
// let OPButton = document.querySelector('.openbtn')
// let headerItem = document.querySelectorAll('header .Menu-Item')
// let Menu = document.querySelector('header .Menu')
// OPButton.addEventListener('click',()=>{
//           Menu.classList.toggle('Open')
//           OPButton.classList.toggle('Open')
//           headerr.classList.toggle('Open')

//             headerr.classList.toggle('light')
     
  
// })
//   DROPDOWN MENU
let menuItems = document.querySelectorAll('.click')
let ISOpenNav = []
menuItems.forEach((item,index)=>{
    $(item.nextElementSibling).slideUp();
    $(item.children[1]).css('transform','rotate(-180deg)')
item.setAttribute('data-index',index)
  ISOpenNav.push(`o-${index+1}`)
  let Is = false
  item.addEventListener('click',(e)=>{
    console.log(e);
     let indexX = Number(e.currentTarget.getAttribute('data-index'))
     console.log(ISOpenNav[indexX]  );
     switch (ISOpenNav[indexX]){
      case 'o-1':{
          console.log('item1');
      
            if(!Is){
              console.log(e.currentTarget.nextElementSibling);
             $(e.currentTarget.nextElementSibling).slideDown();
             $(e.currentTarget.children[1]).css('transform','rotate(0deg)')
             Is = true
          
        }
         else{
          $(e.currentTarget.nextElementSibling).slideUp();
          $(e.currentTarget.children[1]).css('transform','rotate(-180deg)')
         
            Is = false
           
        }
          break
      }
   
     }

  })
})