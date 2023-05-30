import { Routes } from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfilComponent } from "./user-profil/user-profil.component";

const ROUTES: Routes = [
    { path: '', component: UserProfilComponent},
    { path: 'signup', component: SignUpComponent },
    { path: 'user', component: UserProfilComponent }
];

export { ROUTES };