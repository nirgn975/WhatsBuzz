"use strict";function checkLoginState(){FB.getLoginStatus(function(e){statusChangeCallback(e)})}function statusChangeCallback(e){"connected"===e.status?(getPermissions(),setFbButtonToShare()):("not_authorized"===e.status,loginFBpopup())}function setFbButtonToShare(){$(".loginBtn--facebook").text("שתף בפייסבוק")}function loginFBpopup(){FB.login(function(e){"connected"===e.status&&(getPermissions(),setFbButtonToShare())},{scope:"user_posts, user_about_me, user_tagged_places, user_relationships, user_birthday, user_status, user_likes",return_scopes:!0})}function getPermissions(){if(!$(".loginBtn--facebook").hasClass("loading")){var e=$(".loginBtn--facebook").data();$(".loginBtn--facebook").addClass("loading"),showSpinner(),setTimeout(function(){$("#FB-image-game").show(),$(".loginBtn--facebook").addClass("fb-share").removeClass("loading"),$.map(e,function(e,t){"full_user_name"===t&&getUserFullName(),"first_user_name"===t&&getUserFirstName(),"last_user_name"===t&&getUserLastName(),"profile_image"===t&&getUserProfileImage()})},5250)}}function showSpinner(){$(".loader").append($("<img>").attr("src","/static/images/spinner.svg").css("animation","spin 5.250s infinite ease").css("margin","25px").css("width","30%")),$(".loader").delay(5e3).fadeOut(250)}function makeAnImageWithText(e,t,a,s,o){$.ajax({url:"/create-fb-image-with-text/",success:function(e){$("#FB-image-game").attr("src","/users_photos/"+e[0].image_name+".jpg")},error:function(e){console.log("error2")},data:{base_image:$("#FB-image-game").attr("src"),text:e,color:t,font_size:a,x:s,y:o}})}function getUserFullName(){var e=$("#facebooklogin").data("post");$.get("/posts/get_data/user_name/"+e,function(e){FB.api("/me",{fields:"name"},function(t){t&&!t.error&&makeAnImageWithText(t.name,e[0].color,e[0].size,e[0].x,e[0].y)})})}function getUserFirstName(){var e=$("#facebooklogin").data("post");$.get("/posts/get_data/user_name/"+e,function(e){FB.api("/me",{fields:"first_name"},function(t){t&&!t.error&&makeAnImageWithText(t.first_name,e[0].color,e[0].size,e[0].x,e[0].y)})})}function getUserLastName(){var e=$("#facebooklogin").data("post");$.get("/posts/get_data/user_name/"+e,function(e){FB.api("/me",{fields:"last_name"},function(t){t&&!t.error&&makeAnImageWithText(t.last_name,e[0].color,e[0].size,e[0].x,e[0].y)})})}function getUserProfileImage(){var e=$("#facebooklogin").data("post");$.get("/posts/get_data/profile_image/"+e,function(e){FB.api("me/picture?type=large",function(t){t&&!t.error&&$.ajax({url:"/create-fb-image-with-image/",success:function(e){console.log(e),$("#FB-image-game").attr("src","/users_photos/"+e[0].new_image_name+".jpg")},error:function(e){console.log("error2")},data:{base_image:$("#FB-image-game").attr("src"),image:"/static/images/404.png",width:e[0].profile_width,hight:e[0].profile_height,x:e[0].profile_image_x,y:e[0].profile_image_y}})})})}function shareThisPost(){var e=$("#description").text(),t=$(location).attr("href");t=t.split("/")[0]+"//"+t.split("/")[2];var a=t+$("#FB-image-game").attr("src");console.log(a),FB.ui({method:"share",name:"Something",picture:a,href:t,link:t,description:e,caption:"http://www.whatsbuzz.co.il"},function(e){})}window.fbAsyncInit=function(){FB.init({appId:"1063610257017045",cookie:!0,xfbml:!0,version:"v2.5"})},function(e,t,a){var s,o=e.getElementsByTagName(t)[0];e.getElementById(a)||(s=e.createElement(t),s.id=a,s.src="//connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(s,o))}(document,"script","facebook-jssdk"),"undefined"!=typeof FB&&null!=FB;var MEDIA_URL="/staticuploads/";$(".loginBtn--facebook").click(function(){checkLoginState(),$(this).hasClass("fb-share")&&shareThisPost()}),$("#quizzes-game").click(function(){$("#facebooklogin").hide(),showSpinner(),setTimeout(function(){$("#quizzes").show()},5250)}),$("#show-more-in-page").click(function(e){e.preventDefault();var t=$(".show-more").data("posts-type"),a=$(".posts").length;$.get("/get-more-posts/"+t+"/"+a,function(e){var e=JSON.parse(e[0].posts);e.forEach(function(e){var t=$("<h2>").text(e.fields.title),a=$("<img>").addClass("banner-image").attr("src",MEDIA_URL+e.fields.image_banner).attr("alt",e.fields.image_banner),s=$("<a>").attr("href","/posts/"+e.fields.slug).append($("<div>").addClass("row link").append($("<p>").text("התחל משחק"))),o=$("<div>").addClass("col-sm-6 posts").append($("<div>").addClass("post").append(t).append(a).append(s));$("#main-posts").append(o)})})});