import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'
import './style.less'

import scroll from 'scroll-to-element'

[].slice.call(document.querySelectorAll('a'))
  .map(link => [link, link.getAttribute('scroll-to')])
  .filter(([_, scrollTo]) => scrollTo)
  .map(([link, scrollTo]) => {
    link.addEventListener('click', () => scroll(scrollTo));
  });
