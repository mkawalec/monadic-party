import 'simplegrid/simple-grid.scss'
import './style.less'

import scroll from 'scroll-to-element'

[].slice.call(document.querySelectorAll('a'))
  .map(link => [link, link.getAttribute('scroll-to')])
  .filter(([_, scrollTo]) => scrollTo)
  .map(([link, scrollTo]) => {
    link.addEventListener('click', () => scroll(scrollTo, {offset: -70}));
  });

var countdownField = document.querySelector('.timer .countdown');
var announcementTime = 1553706043;

function pad(text) {
  text = text.toString();

  if (text.length < 2) {
    return pad('0' + text);
  } else {
    return text;
  }
}

function countDownString(time) {
  var timeD = announcementTime - time;

  var seconds = timeD % 60;
  var minutes = Math.floor(timeD / 60) % 60;
  var hours   = Math.floor(timeD / 3600) % 24;
  var days    = Math.floor(timeD / (3600 * 24));

  return days + ' days, ' + pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function countDown() {
  var time = Math.floor((new Date()).getTime() / 1000);

  if (announcementTime - time > 0) {
    countdownField.innerHTML = countDownString(time);
  } else {
    document.querySelector('.timer').remove();
  }
}

countDown();
setInterval(countDown, 1000);

function initOpenable(menuNode, toggleNode) {
  let opened = false;

  function toggleOpened() {
    if (opened === false) {
      menuNode.style['animation-name'] = ''
      menuNode.classList.remove('closed')
      menuNode.classList.add('opened')
    } else {
      menuNode.style['animation-name'] = 'close'
      menuNode.classList.add('closed')
      menuNode.classList.remove('opened')
    }

    opened = !opened;
  }

  toggleNode.addEventListener('click', toggleOpened)

  menuNode.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggleOpened()
    }
  })
}

const menuBar = document.querySelector('.menu-bar');
initOpenable(menuBar, menuBar.querySelector('.hamburger'));


// The talks open/close
const talks = document.querySelectorAll('#talk-titles .talk');
talks.forEach(talk => {
  initOpenable(talk.querySelector('.details'), talk.querySelector('.header'));
});
