import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IUser } from "../../../shared/data/user.interface";

@Component({
    selector: 'users-table',
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

    @Output()
    public deleteUser: EventEmitter<IUser> = new EventEmitter();

    @Output()
    public editUser: EventEmitter<IUser> = new EventEmitter();

    @Input()
    public users: IUser[] = [];

    public onDeleteUser(user: IUser) {
        this.deleteUser.emit(user);
    }

    public onEditUser(user: IUser) {
        this.editUser.emit(user);
    }
}