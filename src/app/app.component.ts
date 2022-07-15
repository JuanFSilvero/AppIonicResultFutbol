import {Component, OnInit} from '@angular/core';
import {AngularFireMessaging} from "@angular/fire/compat/messaging";
import {mergeMapTo} from "rxjs/operators";
import {getMessaging, getToken, onMessage} from "@angular/fire/messaging";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'af-notification';
  message: any = null;

  constructor() {
  }

  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
    const messaging = getMessaging();
    getToken(messaging, {vapidKey: 'BDam2maTKSj1c08oW_a2O_qMIeRNgURQKGw8XCC4Zs-G-lnuSSrI6mukyvpURGcrKAfRXpBvGRTKutwSdO57cN8'}).then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log(currentToken)
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message = payload;
    });
  }
}
