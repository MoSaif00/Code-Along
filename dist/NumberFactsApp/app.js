'use strict';

const fact = document.getElementById('fact');
const factText = document.getElementById('factText');
const numberInput = document.getElementById('numberInput');

numberInput.addEventListener('input', getFactFetch);

function getFactFetch() {
  const number = numberInput.value;

  fetch('http://numbersapi.com/' + number)
    .then((response) => response.text())
    .then((data) => {
      if (number != '') {
        fact.style.display = 'block';
        factText.innerText = data;
      }
    })
    .catch((err) => console.log(err));
}
