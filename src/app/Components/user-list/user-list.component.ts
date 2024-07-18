import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule,],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any[] = [];
  filteredUsers: any[] = [];
  loading: boolean = true;
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data)
      this.filteredUsers = data;
      this.loading = false;
    });
  }

  search(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
}