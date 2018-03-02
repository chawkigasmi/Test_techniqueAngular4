import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email:string;
  password:string;
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};
  user: any = null;
  constructor(private afAuth: AngularFireAuth, private router: Router, private authService : AuthService) {}

  ngOnInit() {
  }

//  onLogin() {
//   this.authService.loginWithEmail(this.email,this.password, function(ress,err){
//     console.log(ress)
////     if(!ress){
////console.log("error")
////     }else
//
//   });
//
//    this.router.navigate(['articles']);
//  }


  onLogin() {
    this.authService.loginWithEmail(this.email,this.password)
      .then(
        //used Arrow function here
        (success)=> {
          console.log(success);
          this.router.navigate(['articles']);
        }
      ).catch(
      //used Arrow function here
      (err)=> {
        this.error = err
        console.log(err);
      }
    )
  }

}
