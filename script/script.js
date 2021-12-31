const buttonSubtitle = document.querySelector('.more-detailed');
const sliderImgTree = document.querySelectorAll('.sliderImg1 img');
const arrow1 = document.querySelector('.arrow1');
const arrow2 = document.querySelector('.arrow2');

const mainDescriptionSubtitleBoth = document.querySelector('.main-description-subtitle-both');

const buttonSubtitleActiveClass = 'buttonSubtitleActive';

buttonSubtitle.addEventListener('click', () => {
  if (mainDescriptionSubtitleBoth.classList.contains(buttonSubtitleActiveClass)) {
    mainDescriptionSubtitleBoth.classList.remove(buttonSubtitleActiveClass)
    mainDescriptionSubtitleBoth.style.height = ''
  } else {
    mainDescriptionSubtitleBoth.classList.add(buttonSubtitleActiveClass)
    mainDescriptionSubtitleBoth.style.height = mainDescriptionSubtitleBoth.scrollHeight + 'px'
  }
})
sliderImgTree[0].classList.add('activateTranform');


test2 = (k = 1) => interval1 = () => {
  func2 = () => {
    alert('feef')
  }
  sliderImgTree[k].style.opacity = 1;
  if (k == 0) {
    sliderImgTree[2].style.opacity = 0;
  } else {
    sliderImgTree[k - 1].style.opacity = 0;
  }
  sliderImgTree[k].classList.add('activateTranform');
}
funcInterval = () => {

  sumInteval();
  setInterval(sumInteval, 21000);

}
let testVar = [1, 2, 0]
sumInteval = () => {
  setTimeout(test2(1), 7000);
  setTimeout(test2(2), 14000);
  setTimeout(test2(0), 21000);
}
funcInterval()

arrow1.addEventListener('click', func2)
