//! OLD markup
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))




//! PNotify
import { alert, notice, info, success, error, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/BrightTheme.css';
console.log("Hello Vite! --> main.js");

//todo Подключаем мобильный модуль (опционально)
defaultModules.set(PNotifyMobile, {});

//todo: 1.Просте повідомлення 
const btnAlert = document.getElementById('btn-alert');
btnAlert.addEventListener('click', () => {
  alert({
    text: 'Привет из PNotify + Vite!',
    width: '500px',
    // type: 'notice',
    // type: 'info',
    // type: 'success',
    // type: 'error',
    delay: 2000
  });
});

//todo: 2.Повідомлення з різним текстом та стилізацією
const btnNotice = document.getElementById('btn-notice');
btnNotice.addEventListener('click', () => {
  notice({
    text: "I'm a notice message.",
    delay: 1000
  });
});

const btnInfo = document.getElementById('btn-info');
btnInfo.addEventListener('click', () => {
  info({
    text: "I'm an info message.",
    delay: 1000
  });
});

const btnSuccess = document.getElementById('btn-success');
btnSuccess.addEventListener('click', () => {
  success({
    text: "I'm an success message.",
    delay: 1000
  });
});

const btnError = document.getElementById('btn-error');
btnError.addEventListener('click', () => {
  error({
    text: "I'm an error message.",
    delay: 1000
  });
});


// const myNotice = notice({
//   text: "I'm a notice.",
// });

// const myInfo = info({
//   text: "I'm an info message.",
// });

// const mySuccess = success({
//   text: "I'm a success message.",
// });

// const myError = error({
//   text: "I'm an error message.",
// });



//! Chart.js
import Chart from 'chart.js/auto'

(async function () {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();


//! Basiclightbox
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

// todo: Приклад-1
const image = '<img src="https://images.pexels.com/photos/16330147/pexels-photo-16330147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">';
const instance1 = basicLightbox.create(image);
// instance1.show();

const btnBasicLightBox = document.getElementById('btn-basic-light-box');
btnBasicLightBox.addEventListener('click', () => {
  instance1.show();
});


// todo: Приклад-2
const html = '<h1>Hello World!</h1>';

const instance2 = basicLightbox.create(html, {
  width: '500px',
  height: '300px',
  backgroundColor: 'aquamarine',
  className: 'my-class'
});

// instance2.show();