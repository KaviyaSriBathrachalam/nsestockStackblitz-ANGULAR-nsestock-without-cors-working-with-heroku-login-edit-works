
import { OnInit, Component } from "@angular/core";
import { User } from '../models/user.model';
import { MatCardModule, MatInputModule } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();

  constructor( private myroute:Router) {
  }

  ngOnInit() {
  }

  register(user: User): void{
    console.log(user);
    this.myroute.navigate(["login"]);
  }
}

