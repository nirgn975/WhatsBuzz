if (typeof(FB) != 'undefined' && FB != null ) {

  /**
   * Called when the user press on the "Continue with Facebook" button.
   */
  function checkLoginState() {
    FB.getLoginStatus(function (response) {
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
    FB.login(function (response) {
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
    var permissions = $('.loginBtn--facebook').data();
    var textToPaste = '';
    // Check if the user already load the game.
    if ($('.loginBtn--facebook').hasClass('loading')) {
      return;
    }

    $('.loginBtn--facebook').addClass('loading');
    showSpinner();

    var promise = new Promise(function(resolve, reject) {
      var post_id = $('#facebooklogin').data('post');

      if (JSON.stringify(permissions)==JSON.stringify({profile_image: true, full_user_name: true})) {
        $.get("/posts/get_data/user_name/" + post_id, function (data) {
          FB.api('/me', {fields: 'name'}, function (response) {
            if (response && !response.error) {
              resolve({'text': response.name, 'image': "http://graph.facebook.com/" + response.id + "/picture?type=large"});
            }
          });
        });
      } else if (JSON.stringify(permissions)==JSON.stringify({profile_image: true, first_user_name: true})) {
        $.get("/posts/get_data/user_name/" + post_id, function (data) {
          FB.api('/me', {fields: 'first_name'}, function (response) {
            if (response && !response.error) {
              resolve({'text': response.first_name, 'image': "http://graph.facebook.com/" + response.id + "/picture?type=large"});
            }
          });
        });
      } else if (JSON.stringify(permissions)==JSON.stringify({profile_image: true, last_user_name: true})) {
        $.get("/posts/get_data/user_name/" + post_id, function (data) {
          FB.api('/me', {fields: 'last_name'}, function (response) {
            if (response && !response.error) {
              resolve({'text': response.last_name, 'image': "http://graph.facebook.com/" + response.id + "/picture?type=large"});
            }
          });
        });
      } else if (JSON.stringify(permissions)==JSON.stringify({profile_image: true})) {
        $.get("/posts/get_data/profile_image/" + post_id, function (data) {
          FB.api('me/picture?type=large', function (response) {
            if (response && !response.error) {
              resolve({'image': response.data.url});
            }
          });
        });
      } else if (JSON.stringify(permissions)==JSON.stringify({full_user_name: true})) {
        $.get("/posts/get_data/user_name/" + post_id, function (data) {
          FB.api('/me', {fields: 'name'}, function (response) {
            if (response && !response.error) {
              resolve({'text': response.name});
            }
          });
        });
      } else if (JSON.stringify(permissions)==JSON.stringify({first_user_name: true})) {
        $.get("/posts/get_data/user_name/" + post_id, function (data) {
          FB.api('/me', {fields: 'first_name'}, function (response) {
            if (response && !response.error) {
              resolve({'text': response.first_name});
            }
          });
        });
      } else if (JSON.stringify(permissions)==JSON.stringify({last_user_name: true})) {
        $.get("/posts/get_data/user_name/" + post_id, function (data) {
          FB.api('/me', {fields: 'last_name'}, function (response) {
            if (response && !response.error) {
              resolve({'text': response.last_name});
            }
          });
        });
      }
    });

    promise.then(function(result) {
      // "Stuff worked!"
      getImageGame(result.text, result.image);
    }, function(err) {
      // Error
      console.log(err);
    });

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
 *
 * @param textToPaste
 */
function getImageGame(textToPaste, imageToPaste) {
  $.ajax({
    url: '/create-image/',
    type: 'GET',
    dataType: 'jsonp',
    success: function (response) {
      $('.loader').hide();
      $('.loginBtn--facebook').addClass('fb-share').removeClass('loading');
      $('#FB-image-game').attr('src', '/users_photos/' + response[0].image_name + '.jpg').show();
    },
    error: function (response) {
      console.log('error2');
    },
    data: {
      'slug': window.location.href.split('/')[window.location.href.split('/').length - 2],
      'name': textToPaste,
      'image': imageToPaste
    }
  });
}
