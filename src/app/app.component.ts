import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc-escola';

  constructor(){}

  display : boolean;


//   confirm() {
//     this.confirmationService.confirm({
//         message: 'Are you sure that you want to perform this action?',
//         accept: () => {
//             //Actual logic to perform a confirmation
//         }
//     });
// }

}
