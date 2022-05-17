import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IUser } from "../../../shared/data/user.interface";

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {

    @Input()
    public user: IUser | null;

    @Output()
    public saveNewUser: EventEmitter<IUser> = new EventEmitter();

    @Output()
    public saveUser: EventEmitter<IUser> = new EventEmitter();

    userForm: FormGroup;

    ngOnInit() {
      this.userForm = new FormGroup({
        name: new FormControl(this.user ? this.user.name : ''),
        username: new FormControl(this.user ? this.user.username : ''),
        email: new FormControl(this.user ? this.user.email : ''),
        phone: new FormControl(this.user ? this.user.phone : '')
      });
    }

    onSave() {
        const newUser = this.userForm.value;
        if (!this.user) {
            this.saveNewUser.emit(newUser);
        }
        const updatedUser = {};
        Object.assign(updatedUser, this.user); // copy the values of the initial user
        Object.assign(updatedUser, this.userForm.value); // copy the updated fields
        this.saveUser.emit(updatedUser as IUser);
    }

}