'use strict';

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1063610257017045',
    xfbml      : true,
    version    : 'v2.5'
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));







if (typeof(FB) != 'undefined' && FB != null ) {
  /**
   * Facebook login
   */
  FB.login(function(response) {
    if (response.authResponse) {
     var bla = getUsername(response);
     console.log(bla);
     console.log(response.name);
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
  });

  /**
   *  Get facebook username
   */
  function getUsername(response) {
    FB.api('/me', function(response) {
     return response.name;
    });
  }
}

'use strict';

console.log("this is app");

$('#loginToFacebookButton').click(function(){
  var blaa = FB.login();
  console.log(blaa);
});


