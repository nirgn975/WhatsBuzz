'use strict';

var STATIC_URL = '/static/';
var MEDIA_URL = 'uploads/';

/**
 * Handle login with facebook button.
 */
$('.loginBtn--facebook').click(function(){
  checkLoginState();

  // Check if the "share" button was clicked.
  if($(this).hasClass('fb-share')) {
    shareThisPost();
  }

  $('.loginBtn--facebook').text("Share with Facebook");
  $(this).addClass('fb-share');
});

/**
 * Share a post to facebook.
 */
function shareThisPost(){
  FB.ui({
    method: 'share',
    href: window.location.href,
  }, function(response){});
}

/**
 * Handle the quizzes button, when displayed.
 */
$('#quizzes-game').click(function(){
  $(this).hide();
  showSpinner();

  // Show the quiz and hide the play button
  setTimeout(function(){
    $('#quizzes').show();
  }, 5250);
});

/**
 * Handle "show more" button in the nav pages.
 * Get posts, by type, from server and display them on the page.
 */
$('.show-more').click(function(event){
  event.preventDefault();
  var type = $('.show-more').data('posts-type');
  var start = $('.posts').length;
  $.get("/get-more-posts/" + type + "/" + start, function(data){
    // Convert the data to array of js objects.
    var data = JSON.parse(data[0].posts);

    // Create a post for each of them.
    data.forEach(function(postObject){
      // The title.
      var postTitle = $('<h2>').text(postObject.fields.title);
      // The image banner.
      var postImage = $('<img>').addClass('banner-image').attr('src', STATIC_URL + MEDIA_URL + postObject.fields.image_banner).attr('alt', postObject.fields.image_banner);
      // The button link.
      var postSlog = $('<a>').attr('href', "/posts/" + postObject.fields.slug).append($('<div>').addClass('row link').append($('<p>').text("התחל משחק")));

      // The whole post card.
      var postObj = $('<div>').addClass('col-sm-6 posts').append($('<div>').addClass('post').append(postTitle).append(postImage).append(postSlog));

      $('#main-posts').append(postObj);
    });
  });
});