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
