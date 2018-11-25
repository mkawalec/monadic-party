import 'simplegrid/simple-grid.scss'
import './style.less'

import scroll from 'scroll-to-element'

[].slice.call(document.querySelectorAll('a'))
  .map(link => [link, link.getAttribute('scroll-to')])
  .filter(([_, scrollTo]) => scrollTo)
  .map(([link, scrollTo]) => {
    link.addEventListener('click', () => scroll(scrollTo));
  });

var countdownField = document.querySelector('.timer .countdown');
var announcementTime = 2519560000;

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

//countDown();
//setInterval(countDown, 1000);

function initBurger(menuNode) {
  let opened = false;
  const hamburger = menuNode.querySelector('.hamburger')

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


  hamburger.addEventListener('click', toggleOpened)

  menuNode.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggleOpened()
    }
  })
}

initBurger(document.querySelector('.menu-bar'));
