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
    showSpinner();

    setTimeout(function(){
      $('#FB-image-game').show();

      // Loop through the data attributes.
      $.map(permissions, function(value, index) {
        // For each attributes.
        if (index === 'full_user_name') {
          getUserName('full-name');
        }
        if (index === 'first_user_name') {
          getUserName('first-name');
        }
        if (index === 'last_user_name') {
          getUserName('last-name');
        }
        if (index === 'profile_image') {
          getUserProfileImage();
        }
      });
     }, 5250);
  }
}

/**
 * Show a spinner when loading anything on the website.
 */
function showSpinner() {
  // Add spinner
  $('.loader').append($('<img>').attr('src', '/static/images/spinner.svg').css('animation', 'spin 5.250s infinite ease').css('margin', '25px').css('width', '30%'));
  $('.loader').delay(5000).fadeOut(250);
}

/**
 * Get the user name from FB.
 *
 * @param namePart
 *  Take the part of the name to retrieve:
 *  'full-name' / 'first-name' / 'last-name'
 */
function getUserName(namePart) {
  var post_id = $('#facebooklogin').data('post');
  $.get("/posts/get_data/user_name/" + post_id, function (data) {
    var facebookNameField = '';

    // Check what part of the user name to get.
    if (namePart === 'full-name') {
      facebookNameField = 'name';
    } else if (namePart === 'first-name') {
      facebookNameField = 'first_name';
    } else if (namePart === 'last-name') {
      facebookNameField = 'last_name';
    }

    // Get the name and append it to the image.
    FB.api('/me', {fields: facebookNameField}, function (response) {
      if (response && !response.error) {
        var title = $('<p>').attr('id', 'FB-text-game').css('color', data[0].color).css('font-size', data[0].size + 'px').css('left', data[0].x).css('top', data[0].y).text(response.name);
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
    FB.api('me/picture?type=large', function (response) {
      if (response && !response.error) {
        var img = $('<img>').attr('id', 'FB-image-game2').attr('src', response.data.url).css('width', data[0].profile_width).css('height', data[0].profile_height).css('left', data[0].profile_image_x).css('top', data[0].profile_image_y).css('position', 'absolute').css('z-index', 100);
        $('#description').append(img);
      }
    });
  });
}
