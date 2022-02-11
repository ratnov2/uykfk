function Slider(element) {
  this.slides = [
    "./img/main/imgSlider1.png",
    "./img/main/imgSlider2.jpg",
    "./img/main/imgSlider3.jpg",
  ];
  this.chitates = [
    'Кто-то самый важный в твоей жизни обязательно появится, словно из воздуха, если только для него есть место. Если это место уже кем-то создано, если вся система уже запущена"',
    '"Мир больше империи. Каждый нашёл бы здесь местечко себе по душе"',
    '"Место человека там, куда он пожелает пойти"',
  ];
  this.chitAutors = ["-Вера Шенгелия", "-Михаэль Драу", "-Вернер фон Браун"];
  this.slide = 0;
  this.fkg = 0;
  this.sliderElem = document.querySelector(element);
  this.chitateElem = document.querySelector(".chitates");

  this.chitateElem.firstElementChild.classList.add("chites-move");
  this.slidesElem = this.sliderElem.querySelector(".sliderImg1");
  this.controls = {
    controlsElem: this.sliderElem.querySelector(".controls"),
    prevBtn: this.sliderElem.querySelector(".slider .prev"),
    nextBtn: this.sliderElem.querySelector(".slider .next"),
  };
  this.timerq = (delay) => {
    this.fkg = setInterval(() => {
      this.slide++;
      if (this.slide > this.slides.length - 1) this.slide = 0;
      this.setSlide(this.slide);
      this.setChitates(this.slide);
      let farm = document.querySelector(".sliderImg1 img");
      let k = setTimeout(() => {
        farm.classList.add("activateTranform");
        this.chitateElem.firstElementChild.classList.add("chites-move");
      }, 100);
    }, delay * 1000);
  };
  this.setSlide = (slide) =>
    (this.slidesElem.innerHTML = `<img class="slide" src="${this.slides[slide]}" alt="">`);
  this.setChitates = (slide) =>
    (this.chitateElem.innerHTML = `<p class="chitates-more">${this.chitates[slide]}</p>
    <p class="chitates-autor">${this.chitAutors[slide]}</p>`);

  this.setControls = () => {
    this.controls.prevBtn.onclick = () => {
      clearInterval(this.fkg);
      this.slide--;
      if (this.slide < 0) this.slide = this.slides.length - 1;
      this.setSlide(this.slide);
      this.setChitates(this.slide);
      this.timerq(7);
      let farm = document.querySelector(".sliderImg1 img");
      let k = setTimeout(() => {

        farm.classList.add("activateTranform");
      }, 100);
    };
    this.controls.nextBtn.onclick = () => {
      clearInterval(this.fkg);
      this.slide++;
      if (this.slide > this.slides.length - 1) this.slide = 0;
      this.setSlide(this.slide);
      this.setChitates(this.slide);
      this.timerq(7);
      let farm = document.querySelector(".sliderImg1 img");
      let k = setTimeout(() => {
        this.chitateElem.firstElementChild.classList.add("chites-move");
        farm.classList.add("activateTranform");
      }, 100);
    };
  };
}
const slider = new Slider(".slider");
slider.timerq(7);
slider.setControls();

let buttonMoveAfterSlider = document.querySelector(".share-header-bottom-text");
let mainDescription = document.querySelector(".main-description");
let header = document.querySelector("header");
let headerText = document.querySelector(".header-text");
let textSubtitleVideo = document.querySelector(".text-subtitle-video");

buttonMoveAfterSlider.addEventListener("click", () => {});

const buttonSubtitle = document.querySelector(".more-detailed");
const sliderImgTree = document.querySelector(".sliderImg1 img");

const mainDescriptionSubtitleBoth = document.querySelector(
  ".main-description-subtitle-both"
);

const buttonSubtitleActiveClass = "buttonSubtitleActive";

buttonSubtitle.addEventListener("click", () => {
  if (
    mainDescriptionSubtitleBoth.classList.contains(buttonSubtitleActiveClass)
  ) {
    mainDescriptionSubtitleBoth.classList.remove(buttonSubtitleActiveClass);
    mainDescriptionSubtitleBoth.style.height = "";
  } else {
    mainDescriptionSubtitleBoth.classList.add(buttonSubtitleActiveClass);
    mainDescriptionSubtitleBoth.style.height =
      mainDescriptionSubtitleBoth.scrollHeight + "px";
  }
});
let k = setTimeout(() => {
  sliderImgTree.classList.add("activateTranform");
}, 100);

// x = {
//   aInternal: 0,
//   aListener(val) { console.log("Someone changed the value of x.a to " + val) },
//   set a(val) {
//     this.aInternal = val;
//     this.aListener(val);
//   },
//   get a() {

//     return this.aInternal;
//   }
// }

// test2 = (k = 1) => interval1 = () => {
//   sliderImgTree[k].style.opacity = 1;
//   switch (k) {
//     case 0:
//       x.a = 0;
//       break;
//     case 1:
//       x.a = 1;
//       break;
//     case 2:
//       x.a = 2;
//       break;
//   }
//   if (k == 0) {
//     sliderImgTree[2].style.opacity = 0;
//   } else {
//     sliderImgTree[k - 1].style.opacity = 0;
//   }
//   sliderImgTree[k].classList.add('activateTranform');
//   }
// funcInterval = () => {
//   sumInteval();
//   setInterval(sumInteval, 21000);
// }
// sumInteval = () => {
//   for (let i = 1; i <= 2; i++) {
//     setTimeout(test2(x.a = i), i * 7000);
//   }
//   switch (x.a) {
//     case 0:

//     case 1:
//     case 2:
//   }
//   setTimeout(test2(x.a = 0), 21000);
// }
// funcInterval()

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 1.5; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    "click",
    function (e) {
      //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      var w = window.pageYOffset - 70, // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, "$1"); // к id элемента, к которому нужно перейти
      (t = document.querySelector(hash).getBoundingClientRect().top), // отступ от окна браузера до id
        (start = null);
      requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r =
            t < 0
              ? Math.max(w - progress / V, w + t)
              : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL с хэшем
        }
      }
    },
    false
  );
}
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 5) {
    headerText.lastElementChild.classList.add("header-text-bottom-Bcolor");
    headerText.firstElementChild.classList.add("header-text-up-Bcolor");
    headerText.firstElementChild.classList.add("header-active");
  } else {
    headerText.firstElementChild.classList.remove("header-active");
    headerText.lastElementChild.classList.remove("header-text-bottom-Bcolor");
    headerText.firstElementChild.classList.remove("header-text-up-Bcolor");
  }
  if (window.pageYOffset > 150) {
    mainDescription.classList.add("active-desc-opacity");
    mainDescription.childNodes[1].classList.add("active-desc-opacity");
    mainDescription.childNodes[3].classList.add("active-desc-opacity");
    mainDescription.childNodes[5].classList.add("active-desc-opacity");
    mainDescription.childNodes[7].classList.add("active-desc-opacity");
  } else {
    mainDescription.classList.remove("active-desc-opacity");
    mainDescription.childNodes[1].classList.remove("active-desc-opacity");
    mainDescription.childNodes[3].classList.remove("active-desc-opacity");
    mainDescription.childNodes[5].classList.remove("active-desc-opacity");
    mainDescription.childNodes[7].classList.remove("active-desc-opacity");
    priv.firstElementChild.classList.remove("active-desc-opacity");
    priv.childNodes[3].classList.remove("active-desc-opacity");
  }
});

// функция определяет нахождение элемента в области видимости
// если элемент видно - возвращает true
// если элемент невидно - возвращает false
function isOnVisibleSpace(element) {
  var bodyHeight = window.innerHeight;
  var elemRect = element.getBoundingClientRect();
  var offset = elemRect.top; // - bodyRect.top;
  if (offset < 0) return false;
  if (offset > bodyHeight) return false;
  return true;
}

// глобальный объект с элементами, для которых отслеживаем их положение в зоне видимости
var listenedElements = [];
// обработчик события прокрутки экрана. Проверяет все элементы добавленные в listenedElements
// на предмет попадания(выпадения) в зону видимости
window.onscroll = function () {
  listenedElements.forEach((item) => {
    // проверяем находится ли элемент в зоне видимости
    var result = isOnVisibleSpace(item.el);

    // если элемент находился в зоне видимости и вышел из нее
    // вызываем обработчик выпадения из зоны видимости
    if (item.el.isOnVisibleSpace && !result) {
      item.el.isOnVisibleSpace = false;
      item.outVisibleSpace(item.el);
      return;
    }
    // если элемент находился вне зоны видимости и вошел в нее
    // вызываем обработчик попадания в зону видимости
    if (!item.el.isOnVisibleSpace && result) {
      item.el.isOnVisibleSpace = true;
      item.inVisibleSpace(item.el);
      return;
    }
  });
};

// функция устанавливает обработчики событий
// появления элемента в зоне видимости и
// выхода из нее
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("active-desc-opacity");
    }
  });
}
let options = { threshold: [0.5] };
let ere = 5;
let observer = new IntersectionObserver(onEntry, options);
let priv = document.querySelector(".priv-block");
let elements = [priv.firstElementChild, priv.childNodes[3]];
for (let elm of elements) {
  observer.observe(elm);
}
textSubtitleVideo.addEventListener('click',()=>{
  textSubtitleVideo.classList.toggle('route_active')
  textSubtitleVideo.firstElementChild.classList.toggle('a_disble')
  if(textSubtitleVideo.contains('route_active')){

  }
})