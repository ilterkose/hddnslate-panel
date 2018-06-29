import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import  { DeletetwtComponent } from './delete-twt.component';


@Component({
  selector: 'app-tweetlist',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  displayedColumns = ['delete','link', 'date', 'tweet', 'positive','neutral','negative','bad'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  openDialog() {
    const dialogRef = this.dialog.open(DeletetwtComponent, {
      height: '10rem'
    });


  }

  positive_clickled() {
    console.log('Positive işaretlendi');

  }
  NeutralClicked () {
    alert('Neutral işaretlendi.');
  }
  NegativeClicked () {
    alert('Negative işaretlendi.');
  }
  BadClicked () {
    alert('Bad işaretlendi.');
  }

  ColorChanger() {
    const element = document.getElementById('posback');
    element.classList.toggle('positive-after');
  }
}


export interface PeriodicElement {
  delete: string;
  link: string;
  date: string;
  tweet: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {
    delete:" ", link: " ", date: " ", tweet:"Çalışma ve Sosyal Güvenlik Bakanlığı ile Enerji ve Tabii Kaynaklar Bakanlığı işbirliğinde başlattığımız #KadınGücü projemiz için Opet'in yöneticileri sahada! ",
  }
];
