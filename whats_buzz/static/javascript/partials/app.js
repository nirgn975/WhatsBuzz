'use strict';

console.log("this is app");

$('#loginToFacebookButton').click(function(){
  var blaa = FB.login();
  console.log(blaa);
});


