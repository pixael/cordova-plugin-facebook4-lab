import {Component} from '@angular/core';

import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private fb: Facebook) {
    }


    test() {
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then((res: FacebookLoginResponse) => {
                console.log('Logged into Facebook!', JSON.stringify(res));
                alert('Login OK');
            })
            .catch(e => {
                console.log('Error logging into Facebook', e);
                alert('Login ERROR');
            });
    }

}
