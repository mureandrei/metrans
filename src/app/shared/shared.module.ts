import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
    declarations: [NavbarComponent],
    imports: [CoreModule, BrowserModule, RouterModule],
    providers: [],
    exports: [NavbarComponent]
})
export class SharedModule { }