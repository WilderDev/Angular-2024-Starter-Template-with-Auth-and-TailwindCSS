import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrl: "./register.component.scss"
})
export class RegisterComponent {
	// CREATE LOGIN FORM
	registerForm = new FormGroup({
		username: new FormControl("", [Validators.required]),
		email: new FormControl("", [Validators.required, Validators.email]), // make sure it is a valid email address
		password: new FormControl("", [Validators.required])
	});

	// On Submit Function
	onSubmit() {
		// TODO: Logic once form is submitted
		console.log(this.registerForm.value);
	}
}
