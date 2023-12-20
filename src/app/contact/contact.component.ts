import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private snackBar: MatSnackBar) {}

  showMessage() {
    this.snackBar.open('Your message has been sent!', 'Close')
  }

}
