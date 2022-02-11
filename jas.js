// function Slider(element) {
//   this.slides = ['https://upload.wikimedia.org/wikipedia/commons/0/09/POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG', 'https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg', 'https://cdnimg.rg.ru/img/content/207/35/45/TASS_40491553_d_850.jpg'];
//   this.slide = 0;
//   this.fkg = 0;
//   this.sliderElem = document.querySelector(element);
//   this.slidesElem = this.sliderElem.querySelector('.slides');
//   this.controls = {
//     controlsElem: this.sliderElem.querySelector('.controls'),
//     prevBtn: this.sliderElem.querySelector('.controls #prev'),
//     nextBtn: this.sliderElem.querySelector('.controls #next')
//   }
//   this.timerq= (delay)=>{
//     this.fkg = setInterval(()=>{
//       this.slide++;
//       if (this.slide > this.slides.length - 1) this.slide = 0;
//       this.setSlide(this.slide);
//     }, delay*1000)
//   }
//     this.setSlide = (slide) => this.slidesElem.innerHTML =
//     `<div class="slide"><img src="${this.slides[slide]}" alt=""></div>`;
//   this.setTimer = (delay) => setInterval(() => {
//     this.slide++;
//     if (this.slide > this.slides.length - 1) this.slide = 0;
//     this.setSlide(this.slide);
//   }, delay * 1000);
//   this.setControls = () => {
//     this.controls.prevBtn.onclick = () => {
//       clearInterval(this.fkg)
//       this.slide--;
//       if (this.slide < 0) this.slide = this.slides.length - 1;
//       this.setSlide(this.slide);
//       this.timerq(3)
//     }
//     this.controls.nextBtn.onclick = () => {
//       clearInterval(this.fkg)
//       this.slide++;
//       if (this.slide > this.slides.length - 1) this.slide = 0;
//       this.setSlide(this.slide);
//       this.timerq(3)
//     }
//   }
// }

let test15 = document.querySelector('.d15 button');
let line = document.querySelectorAll('.line')
test15.addEventListener('click',()=>{
  if(line[0].classList.contains('bur')) 
  {
    line.forEach((item,i,arr)=>{
      item.classList.remove('bur')
    })
}else
line.forEach((item,i,arr)=>{
  item.classList.add('bur')
})
})

  

// const slider = new Slider('.slider');
// slider.timerq(1);
// slider.setControls();


