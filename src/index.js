import './style.css';

import { postMethod, getMethod } from './api/api.js';

const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/HvAzJsiK5mUsgDCjT2Ro/scores';
const dataForm = document.querySelector('#data-form');
dataForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameField = dataForm.children[0];
  const scoreField = dataForm.children[1];
  if (nameField.value !== '' && scoreField.value !== '') {
    postMethod(apiUrl, { user: nameField.value, score: scoreField.value });
    dataForm.reset();
  }
});

const generator = async () => {
  const data = await getMethod(apiUrl);
  const scoresList = document.querySelector('.scores-list');
  scoresList.innerHTML = '';
  data.result.forEach((da) => {
    scoresList.innerHTML += `
        <li>
          <span>${da.user}:</span>
          <span>${da.score}</span>
        </li>
      `;
  });
};

const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', generator);
