(function () {
  'use strict';

  initializeReveal();
  // handleMouseClick();

  function initializeReveal() {
    Reveal.initialize({
      controls: false,
      progress: true,
      history: true,
      center: true,
      mouseWheel: true,

      theme: Reveal.getQueryHash().theme || 'beige',
      transition: Reveal.getQueryHash().transition || 'none',

      dependencies: [
        {
          src: 'lib/js/classList.js',
          condition: function () {
            return !document.body.classList;
          }
        },
        {
          src: 'reveal.js/plugin/highlight/highlight.js',
          async: true,
          callback: function () {
            hljs.initHighlightingOnLoad();
          }
        }
      ]
    });
  }

  function handleMouseClick() {
    window.addEventListener("mousedown", handleClick, false);
    window.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    }, false);

    function handleClick(e) {
      e.preventDefault();
      if (e.button === 0) Reveal.next();
      if (e.button === 2) Reveal.prev();
    }
  }
})();
