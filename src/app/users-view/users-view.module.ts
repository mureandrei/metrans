import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "../core/core.module";
import { UserEditComponent } from "./components/user-edit/user-edit.component";
import { UsersContainerComponent } from "./components/users-container.component";
import { UsersTableFilterComponent } from "./components/users-table-filter/users-table-filter.component";
import { UsersTableComponent } from "./components/users-table/users-table.component";

@NgModule({
    declarations: [UsersContainerComponent, UsersTableComponent, UsersTableFilterComponent, UserEditComponent],
    imports: [CoreModule, BrowserModule, FormsModule, ReactiveFormsModule, FormsModule],
    providers: [],
    exports: [UsersContainerComponent]
})
export class UsersViewModule { }
