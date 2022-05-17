import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { UsersService } from '../../core/services/users.service';
import { IUser } from '../../shared/data/user.interface';

@Component({
    selector: 'users-container',
    templateUrl: './users-container.component.html',
    styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {

    public users: IUser[] = [];
    public initialUsers: IUser[] = [];
    public currentNameFilter: string = '';
    public currentSortedColumn: string = 'name';
    public showEditUser = false;
    public selectedUser: IUser | null;

    constructor(public usersService: UsersService) {
    }

    ngOnInit() {
        this.usersService.getUsers().pipe(first()).subscribe((users: IUser[]) => {
            this.users = users;
            this.initialUsers = [...users];
        }, () => {
            alert('Error getting users');
        });
    }

    onFilterName(name: string) {
        this.currentNameFilter = name;
        if (!name) {
            this.users = [...this.initialUsers];
        }
        this.users = this.initialUsers.filter((user: IUser) => user.name.toLowerCase().includes(name));
        this.applySorting();
    }

    onSortColumn(column: string) {
        this.currentSortedColumn = column;
        this.applySorting();
    }

    onDeleteUser(user: IUser) {
        this.usersService.deleteUser(user?.id).pipe(first()).subscribe(() => {
            this.users = this.users.filter((u => u.id !== user.id));
            this.initialUsers = this.initialUsers.filter((u => u.id !== user.id));
        });
    }

    onNewUser(user: IUser) {
        this.showEditUser = false;
        this.usersService.addUser(user).pipe(first()).subscribe(() => {
            this.users.push(user);
            this.initialUsers.push(user);
        });
    }

    onEditUser(user: IUser) {
        this.showEditUser = false;
        this.usersService.updateUser(user.id, user).pipe(first()).subscribe(() => {
            Object.assign(this.initialUsers.find(u => u.id == user.id), user);
        });
    }

    showEdit(user: IUser) {
        this.showEditUser = true;
        this.selectedUser = user;
    }

    addUser() {
        this.showEditUser = true;
        this.selectedUser = null;
    }

    private applySorting() {
        this.users.sort((a: any, b: any) => a[this.currentSortedColumn].localeCompare(b[this.currentSortedColumn]));
    }
}
