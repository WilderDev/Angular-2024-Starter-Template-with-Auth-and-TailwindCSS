import { NgModule } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./features/auth/login/login.component";
import { RegisterComponent } from "./features/auth/register/register.component";

@NgModule({
	declarations: [AppComponent, LoginComponent, RegisterComponent],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
	providers: [provideClientHydration()],
	bootstrap: [AppComponent]
})
export class AppModule {}
