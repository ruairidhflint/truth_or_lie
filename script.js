const type = document.getElementById('type');
const condition = document.getElementById('condition');
const button = document.getElementById('refresh');

button.onclick = refresh;

const choices = [
  'Starting with "The best day of my life..."',
  'About meeting somebody famous',
  'Starting with "When I was younger I embarrassed myself by..."',
  'Starting with "One time I broke the law by..."',
  "About the worst job interview you've ever had",
  "Starting with 'My first word was...'",
  'About how many bones you have broken',
  'Starting with "I once saw a ghost..."',
  'Starting with "On Mastermind my specialist subject would be..."',
  'Starting with "The worst date I have ever been on...',
  'About the most exotic place you have visited',
  'Starting "My favourite film is..."',
  'Starting "My celebrity crush is..."',
  'Starting with "The most embarassing thing to ever happen to me was..."',
  "Starting with 'My guilty pleasure is...'",
  'About the time you were most drunk',
  'About an instrument you can/cannot play',
  'About the worst like you have ever told',
];

function truthOrLie() {
  if (Math.round(Math.random())) {
    type.textContent = 'Truth';
  } else {
    type.textContent = 'Lie';
  }
}

function assignCondition() {
  const number = Math.floor(Math.random() * choices.length);
  condition.textContent = choices[number];
}

function refresh() {
  truthOrLie();
  assignCondition();
  button.blur();
}

truthOrLie();
assignCondition();
