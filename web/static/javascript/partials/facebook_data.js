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
      setFbButtonToShare();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not the app.
     loginFBpopup();
    } else {
      // The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
      loginFBpopup();
    }
  }

  /**
   * Set the 'login with facebook' button to share.
   */
  function setFbButtonToShare() {
    $('.loginBtn--facebook').text("שתף בפייסבוק");
  }

  /**
   * Ask for the user to login with facebook.
   * Handle permissions, and display share button only when connected.
   */
  function loginFBpopup() {
    FB.login(function(response) {
      if (response.status === "connected") {
        getPermissions();
        setFbButtonToShare();
      }
    }, {
      scope: 'user_posts, user_about_me, user_tagged_places, user_relationships, user_birthday, user_status, user_likes',
      return_scopes: true
    });
  }

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function getPermissions() {
    // Check if the user already load the game.
    if ($('.loginBtn--facebook').hasClass('loading')) {
      return;
    }

    var permissions = $('.loginBtn--facebook').data();
    $('.loginBtn--facebook').addClass('loading');
    showSpinner();

    setTimeout(function(){
      $('#FB-image-game').show();
      $('.loginBtn--facebook').addClass('fb-share').removeClass('loading');
      
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

function makeAnImageWithText(text, color, size, x, y) {
  $.ajax({
    url: '/create-fb-image-with-text/',
    success: function (response) {
      $('#FB-image-game').attr('src', '/users_photos/' + response[0].image_name + '.jpg');
    },
    error: function (response) {
      console.log('error2');
    },
    data: {
      'base_image': $('#FB-image-game').attr('src'),
      'text': text,
      'color': color,
      'font_size': size,
      'x': x,
      'y': y
    }
  });
}

/**
 * Get the user full name from FB.
 */
function getUserFullName() {
  var post_id = $('#facebooklogin').data('post');
  $.get("/posts/get_data/user_name/" + post_id, function (data) {
    FB.api('/me', {fields: 'name'}, function (response) {
      if (response && !response.error) {
        makeAnImageWithText(response.name, data[0].color, data[0].size, data[0].x, data[0].y);
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
        makeAnImageWithText(response.first_name, data[0].color, data[0].size, data[0].x, data[0].y);
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
        makeAnImageWithText(response.last_name, data[0].color, data[0].size, data[0].x, data[0].y);
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
        $.ajax({
          url: '/create-fb-image-with-image/',
          success: function (response) {
            console.log(response);
            $('#FB-image-game').attr('src', '/users_photos/' + response[0].new_image_name + '.jpg');
          },
          error: function (response) {
            console.log('error2');
          },
          data: {
            'base_image': $('#FB-image-game').attr('src'),
            'image': '/static/images/404.png',
            'width': data[0].profile_width,
            'hight': data[0].profile_height,
            'x': data[0].profile_image_x,
            'y': data[0].profile_image_y
          }
        });


      }
    });
  });
}
