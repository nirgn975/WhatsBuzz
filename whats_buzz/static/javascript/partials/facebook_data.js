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
   * Check if the user already login
   *
   * @param response
   */
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      getPermissions();
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
  function getPermissions() {
    var permissions = $('.loginBtn--facebook').data();

    // Loop through the data attributes.
    $.map(permissions, function(value, index) {
      // For each attributes.
      if (index === 'full_user_name') {
        getUserFullName();
      }
      if (index === 'first_user_name') {
        getUserFirstName();
      }
      if (index === 'last_user_name') {
        getUserLastName();
      }
      if (index === 'profile_image') {
          getUserProfileImage();
      }
    });
  }
}

/**
 * Get the user full name from FB.
 */
function getUserFullName() {
  FB.api('/me', {fields: 'name'}, function(response) {
    if (response && !response.error) {
      var post_id = $('#facebooklogin').data('post');
      $.get("/posts/get_data/user_name/" + post_id, function (data) {
        console.log(data[0]);
        var title = $('<p>').attr('id', 'FB-text-game').css("left", data[0].x).css("top", data[0].y).text(response.name);
        $('#description').append(title);
        });
    }
  });
}

/**
 * Get the user first name from FB.
 */
function getUserFirstName() {
    FB.api('/me', {fields: 'first_name'}, function(response) {
    if (response && !response.error) {
      console.log(response.first_name);
    }
  });
}

/**
 * Get the user last name from FB.
 */
function getUserLastName() {
  FB.api('/me', {fields: 'last_name'}, function(response) {
    if (response && !response.error) {
      console.log(response.last_name);
    }
  });
}

/**
 * Get the user profile image from FB.
 */
function getUserProfileImage() {
  FB.api('/me', {fields: 'picture'}, function(response) {
    if (response && !response.error) {
      console.log(response.picture.data.url);
    }
  });
}