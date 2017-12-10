import 'simplegrid/simple-grid.scss'
import './style.less'
import './index.html'

import scroll from 'scroll-to-element'

[].slice.call(document.querySelectorAll('a'))
  .map(link => [link, link.getAttribute('scroll-to')])
  .filter(([_, scrollTo]) => scrollTo)
  .map(([link, scrollTo]) => {
    link.addEventListener('click', () => scroll(scrollTo));
  });
