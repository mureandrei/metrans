import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'users-table-filter',
    templateUrl: './users-table-filter.component.html',
    styleUrls: ['./users-table-filter.component.scss']
})
export class UsersTableFilterComponent {

    @Input()
    public currentSortedColumn: string = 'name';

    @Output()
    public filteredName: EventEmitter<string> = new EventEmitter(); 

    @Output()
    public changedSorting: EventEmitter<string> = new EventEmitter();

    public columnFilters = ['name', 'username', 'email', 'phone']

    public filterValue = "";

    // emit on keyup event
    public filter() {
        this.filteredName.emit(this.filterValue);
    }

    public sortBy(column: string) {
        this.changedSorting.emit(column);
    }
}