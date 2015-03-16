# ajax-utils

We often use ajax function. But it is a little bit of a pain.

```
$.ajax({

  type: 'POST',

  // some parameters

  success: function () {
    // when success
  },
  error: function () {
    // when error
  },
  complete: function () {
    // always
  }
});

```

AjaxUtils enables you to write simple code.


```
var params = {
  // some parameters for jQuery.ajax
  // You don't have to write "type", "sucess", "error" or "complete"
}
AjaxUtils.post(params, function (err, json) {
  // wait complete callback
});
```

