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
  var post_id = $('#facebooklogin').data('post');
  $.get("/posts/get_data/user_name/" + post_id, function (data) {
    FB.api('/me', {fields: 'name'}, function (response) {
      if (response && !response.error) {
        var title = $('<p>').attr('id', 'FB-text-game').css('left', data[0].x).css('top', data[0].y).text(response.name);
        $('#description').append(title);
      }
    });
  });
}

/**
 * Get the user first name from FB.
 */
function getUserFirstName() {
  var post_id = $('#facebooklogin').data('post');
  $.get("/posts/get_data/user_name/" + post_id, function (data) {
    FB.api('/me', {fields: 'first_name'}, function(response) {
      if (response && !response.error) {
        var title = $('<p>').attr('id', 'FB-text-game').css('left', data[0].x).css('top', data[0].y).text(response.first_name);
        $('#description').append(title);
      }
    });
  });
}

/**
 * Get the user last name from FB.
 */
function getUserLastName() {
  var post_id = $('#facebooklogin').data('post');
  $.get("/posts/get_data/user_name/" + post_id, function (data) {
    FB.api('/me', {fields: 'last_name'}, function(response) {
      if (response && !response.error) {
        var title = $('<p>').attr('id', 'FB-text-game').css('left', data[0].x).css('top', data[0].y).text(response.last_name);
        $('#description').append(title);
      }
    });
  });
}

/**
 * Get the user profile image from FB.
 */
function getUserProfileImage() {
  var post_id = $('#facebooklogin').data('post');
  $.get("/posts/get_data/profile_image/" + post_id, function (data) {
    console.log(data);
    FB.api('me/picture?type=large', function (response) {
      console.log(response.data.url);
      if (response && !response.error) {
        var img = $('<img>').attr('id', 'FB-image-game2').attr('src', response.data.url).css('width', data[0].profile_width).css('height', data[0].profile_height).css('left', data[0].profile_image_x).css('top', data[0].profile_image_y).css('position', 'absolute').css('z-index', 100);
        $('#description').append(img);
      }
    });
  });
}