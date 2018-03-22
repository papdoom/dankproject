import { Component, OnInit } from '@angular/core';
import { DankserviceService } from './../dankservice.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-new-cmp-one',
  templateUrl: './new-cmp-one.component.html',
  styleUrls: ['./new-cmp-one.component.css']
})
export class NewCmpOneComponent implements OnInit {
  //fields
  newText1 = 'Braaaaaaah';
  months = ["January", "Feburary", "March", "April",
 "May", "June", "July", "August", "September",
 "October", "November", "December"];
  isAvailable = true;
  isOccupied = false;
  isReadyString = "maybe";
  dateToday = new Date();
  jsonVal = {name:'Json', age:'25', address:{a1:'address 1', a2:'address 2'}};
  magicOne;
  newcomponentproperty;
  memeJson;
  results = [];

  constructor(private dankservice : DankserviceService, private http: Http) {
    
  }

  ngOnInit() {
    this.newcomponentproperty = this.dankservice.serviceproperty;
    console.dir(this.newcomponentproperty);
    this.http.get('https://api.imgflip.com/get_memes').map(
      (response) => response.json()
    ).subscribe(
      (data) => this.displaydata(data)
    )
  }

  //functions
  ultimateMagicClickFunction(event) {
    let magicElement = document.getElementById("magic-image");
    magicElement.style.display == "none" ? magicElement.style.display = "block" : magicElement.style.display = "none";
  }

  changeSeason(event) {
    let s = (document.getElementById("four-seasons-select")) as HTMLSelectElement;
    let sv = s.selectedIndex;
    let so = s.options[sv];
    /*console.dir((<HTMLSelectElement>so).value); //ignore red underline
    console.dir((<HTMLSelectElement>so).text);*/
    let container = document.getElementById("select-magic");
    
    for (let i = 0; i< container.getElementsByTagName("img").length; i++) {
      container.getElementsByTagName("img")[i].style.display = "none";
    }

    if (sv > 9 || sv == 0) {
      document.getElementById("season-winter").style.display = "block";
    } else if (sv > 0 && sv < 4 ) {
      document.getElementById("season-spring").style.display = "block";
    } else if (sv > 3 && sv < 7 ) {
      document.getElementById("season-summer").style.display = "block";
    } else {
      document.getElementById("season-fall").style.display = "block";
    }
  }

  reactionClickFunction(event) {
    let impossiburuElement = document.getElementById("impossiburu-image");
    impossiburuElement.style.display == "none" ? impossiburuElement.style.display = "block" : impossiburuElement.style.display = "none";
    this.magicOne = this.dankservice.getMagicOne();
  }

  displaydata(data) {
    this.memeJson = data.data.memes;
    //test -- console.dir(this.memeJson);
  }

  searchMemeByNameFunction(event) {
    let searchParam = (<HTMLInputElement>document.getElementById("param")).value;
    this.results = [];
    
    for (let i=0;i<this.memeJson.length;i++) {
      if ((this.memeJson[i].name).includes(searchParam.charAt(0).toUpperCase() + searchParam.slice(1))) { // had to convert the first char of the searchParam for this particular scenario
        this.results.push(this.memeJson[i]);
      }
    }
  }

}
