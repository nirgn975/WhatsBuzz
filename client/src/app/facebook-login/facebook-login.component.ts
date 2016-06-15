import { Component, OnInit } from '@angular/core';


declare const FB:any;

@Component({
  selector: 'wb-facebook-login',
  templateUrl: 'app/facebook-login/facebook-login.component.html'
})

export class FacebookLoginComponent implements OnInit {

  constructor() {
    FB.init({
      appId      : '1063610257017045',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.5'
    });
  }

  ngOnInit() {
    FB.getLoginStatus(response => {
      this.statusChangeCallback(response);
    });
  }

  onFacebookLoginClick() {
    FB.login();
  }

  statusChangeCallback(resp) {
    if (resp.status === 'connected') {
      // connect here with your server for facebook login by passing access token given by facebook
      console.log(resp.authResponse.accessToken);
    }else if (resp.status === 'not_authorized') {
      console.log(resp);
    }else {
      console.log("I'm sorry");
    }
  }
}