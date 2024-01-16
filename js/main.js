const feedbackBtn = document.querySelector('.hero-btn');
const feedbackWindow = document.querySelector('.feedback-form-wrap');
const heroWindow = document.querySelector('.hero-header-wrap');
const blurWindow = document.querySelector('.blur-window');
const closeFeedbackWindow = document.querySelector('.close-btn');
const body = document.querySelector('.body');
const form = document.querySelector('.feedback-form');
const contactsForm = document.querySelector('.contacts-form');
const burgerButton = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-wrap');
const burgerCloseButton = document.querySelector('.burger-close-btn');
const loading = document.querySelector('.loading');

// Ajax response

// header-form

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let inputName = document.querySelector('.input-name').value;
  let inputMail = document.querySelector('.input-mail').value;
  let inputComment = document.querySelector('.input-comment').value;
  if (!inputName || !inputMail || !inputComment) {
    alert('Пожалуйста, заполните пустые поля');
  }
  if (inputName && inputMail && inputComment) {
    loading.style.display = 'block';
    const response = $.ajax({
      method: 'POST',
      url: 'https://httpbin.org/post',
      dataType: 'json',
      data: {
        name: inputName,
        email: inputMail,
        comment: inputComment,
      }
    }).done((data) => {
      if (data) {
        console.log(data.form);
        document.querySelector('.input-name').value = '';
        document.querySelector('.input-mail').value = '';
        document.querySelector('.input-comment').value = '';
        blurWindow.style.display = 'none';
        feedbackWindow.style.display = 'none';
        tl2.reverse();
        loading.style.display = 'none';
        setTimeout(() => {
          alert('Данные отправлены и получены, проверьте консоль');
        }, 500)
      }
    });
  }
});

// contacts-form

contactsForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let inputName = document.querySelector('.contacts-input--name').value;
  let inputMail = document.querySelector('.contacts-input--mail').value;
  let inputComment = document.querySelector('.contacts-textarea').value;
  if (!inputName || !inputMail || !inputComment) {
    alert('Пожалуйста, заполните пустые поля');
  }
  if (inputName && inputMail && inputComment) {
    loading.style.display = 'block';
    const response = $.ajax({
      method: 'POST',
      url: 'https://httpbin.org/post',
      dataType: 'json',
      data: {
        name: inputName,
        email: inputMail,
        comment: inputComment,
      }
    }).done((data) => {
      if (data) {
        console.log(data.form);
        document.querySelector('.contacts-input--name').value = '';
        document.querySelector('.contacts-input--mail').value = '';
        document.querySelector('.contacts-textarea').value = '';
        loading.style.display = 'none';
        setTimeout(() => {
          alert('Данные отправлены и получены, проверьте консоль');
        }, 500)
      }
    });
  }
});

// Maps

ymaps.ready(init);

function init() {
  // Координаты места, где нужно установить маркер (Deinze, Belgium)
  var placeCoordinates = [51.026534, 3.609657];

  // Создание карты
  var map = new ymaps.Map("map", {
    center: placeCoordinates,
    zoom: 11, // Уровень масштабирования карты (от 0 до 19)
    controls: []
  });

  // Установка маркера на карте
  var marker = new ymaps.Placemark(placeCoordinates, {
    hintContent: "Jl. Raya Surabaya 2787", // Подсказка при наведении на маркер
  });

  map.geoObjects.add(marker);
}

// GSAP

// burger-menu
let tl = gsap.timeline({ paused: true });

tl.to('.burger-line--top, .burger-line--bottom', { top: 12, duration: 0.25 })
  .fromTo('.burger-wrap', { display: 'none', opacity: 0, y: -100, }, { display: 'block', opacity: 1, y: 0, duration: 0.5, ease: "expo", })
  .fromTo('.burger-menu', { opacity: 0, y: 100, }, { opacity: 1, y: 0, duration: 0.5, ease: "power3", })
  .fromTo('.gsap-burger', { opacity: 0, y: 100, }, { opacity: 1, y: 0, duration: 0.1, ease: "power3", stagger: 0.1 });

burgerButton.onclick = function () {
  tl.play();
  blurWindow.style.display = 'inline-block';
  body.style.overflow = 'hidden';
}

burgerCloseButton.onclick = function () {
  tl.reverse();
  blurWindow.style.display = 'none';
  body.style.overflow = 'auto';
  body.style.overflowX = 'hidden';
}

// form
let tl2 = gsap.timeline({ paused: true });

tl2.fromTo('.feedback-form-wrap', { display: 'none', opacity: 0, }, { display: 'block', opacity: 1, duration: 0.5, ease: "expo", });

feedbackBtn.onclick = function () {
  tl2.play();
  blurWindow.style.display = 'inline-block';
  body.style.overflow = 'hidden';
}

closeFeedbackWindow.onclick = function () {
  tl2.reverse();
  blurWindow.style.display = 'none';
  body.style.overflow = 'auto';
  body.style.overflowX = 'hidden';
}

//

let tl3 = gsap.timeline({ paused: true });

tl3.fromTo('.gsap-header', { opacity: 0, }, { opacity: 1, duration: 1.5, ease: "power3", stagger: 0.1 });

tl3.play();

//

let tl4 = gsap.timeline({ paused: true});

tl4.fromTo('.gsap-hero', { opacity: 0, }, { opacity: 1, delay: 0.5, duration: 1.5, ease: "power3", stagger: 0.1 });

tl4.play();
// ANOTHER ANIMATION

// right
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show-right');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation-right');

for (let elm of elements) {
  observer.observe(elm);
}

// left
function onEntry2(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show-left');
    }
  });
}

let options2 = {
  threshold: [0.5]
};
let observer2 = new IntersectionObserver(onEntry2, options2);
let elements2 = document.querySelectorAll('.element-animation-left');

for (let elm2 of elements2) {
  observer2.observe(elm2);
}

// appearence-only
function onEntry3(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show-appearence-only');
    }
  });
}

let options3 = {
  threshold: [1]
};
let observer3 = new IntersectionObserver(onEntry3, options3);
let elements3 = document.querySelectorAll('.element-animation-appearence-only');

for (let elm3 of elements3) {
  observer3.observe(elm3);
}

// bottom
function onEntry4(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show-bottom');
    }
  });
}

let options4 = {
  threshold: [0.5]
};
let observer4 = new IntersectionObserver(onEntry4, options4);
let elements4 = document.querySelectorAll('.element-animation-bottom');

for (let elm4 of elements4) {
  observer4.observe(elm4);
}

// top
function onEntry5(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show-top');
    }
  });
}

let options5 = {
  threshold: [0.5]
};
let observer5 = new IntersectionObserver(onEntry5, options5);
let elements5 = document.querySelectorAll('.element-animation-top');

for (let elm5 of elements5) {
  observer5.observe(elm5);
}
