import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  data2: any[];
  data:FirebaseListObservable<any[]>;

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      Description: {
        title: 'Description'
      },
      Nom: {
        title: 'Nom'
      },
      statuts: {
        title: 'Statut'
      },
      type: {
        title: 'Type'
      }
    }
  };

  constructor(db2: AngularFireDatabase, private http: HttpClient) {
    this.data = db2.list('/articles/');

    this.data.forEach(item =>
      {    console.log(item);
        this.data2 =item;
      }
    )

  }

  ngOnInit() {
  }
  deleteRecord(event) {
    console.log(event.data.id)
    const customers =firebase.database().ref('/articles/');
    customers.child(event.data.id+1).remove();


  }

}
