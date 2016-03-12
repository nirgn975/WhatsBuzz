if (typeof(FB) != 'undefined' && FB != null ) {

  /**
   * Called when the user press on the "Continue with Facebook" button.
   */
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  /**
   * Called with the results from from FB.getLoginStatus().
   *
   * @param response
   */
  function statusChangeCallback(response) {
    console.log('Check if the user already login');
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      testAPI();  // Logged into your app and Facebook.
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not the app.
      document.getElementById('status').innerHTML = 'Please log into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log into Facebook.';
    }
  }

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

}
