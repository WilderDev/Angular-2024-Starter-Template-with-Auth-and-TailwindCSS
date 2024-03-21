import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss"
})
export class LoginComponent {
	// CREATE LOGIN FORM
	loginForm = new FormGroup({
		email: new FormControl("", [Validators.required, Validators.email]), // make sure it is a valid email address
		password: new FormControl("", [Validators.required])
	});

	// On Submit Function
	onSubmit() {
		// TODO: Logic once form is submitted
		console.log(this.loginForm.value);
	}
}
