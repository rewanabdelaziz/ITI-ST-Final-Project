import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  firstName: string="";
  lastName: string="";
  email: string="";
  message:string=""
  submitForm() {
    // Handle form submission logic here
    // console.log(this.firstName);
    // console.log(this.lastName);
    // console.log(this.email);
    
    // Reset form fields 
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.message=''
  }
}
