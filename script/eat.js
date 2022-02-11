let eatHeaderFixed = document.querySelector('.eat-header')
let headerHeight = document.querySelector('header');
document.querySelector('body').addEventListener('scroll', () => {
  console.log(eatHeaderFixed.scrollTop + headerHeight.scrollHeight);

})

