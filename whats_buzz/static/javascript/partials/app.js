'use strict';

$('.loginBtn--facebook').click(function(){
  var blaa = checkLoginState();
  console.log(blaa);
});

/**
 * Handle the quizzes button, when displayed.
 */
$('#quizzes-game').click(function(){
  $('#quizzes').show();
  $(this).hide();
});


