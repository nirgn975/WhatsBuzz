'use strict';

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1063610257017045',
    cookie     : true,
    xfbml      : true,
    status     : true,
    version    : 'v2.5'
  });
};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
