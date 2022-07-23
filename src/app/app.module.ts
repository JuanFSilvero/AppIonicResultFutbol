import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {ServiceWorkerModule} from '@angular/service-worker';
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService} from "@angular/fire/analytics";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
    AngularFireModule,
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, ScreenTrackingService,
    UserTrackingService,
    /*{provide: LocationStrategy, useClass: HashLocationStrategy}*/
    ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
