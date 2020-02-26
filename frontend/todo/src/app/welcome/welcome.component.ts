import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  nameDisplay = '';
  messageFrom = '';
  constructor(private route : ActivatedRoute,
    private welcomedataService: WelcomeDataService) { 
  }

  ngOnInit() {
    this.nameDisplay = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    console.log(this.welcomedataService.executeHelloWorldBeanServiceWithPathVariable(this.nameDisplay).subscribe(
      response => this.handleSuccessfulResponse(response)
    ));
  }

  handleSuccessfulResponse(response) {
    this.messageFrom = response.message;
  }

}
