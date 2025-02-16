import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserFormComponent implements OnInit {
  users: User[] = [];
  newUser: User = { nombre: '', correo: '', edad: 0 };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }

  createUser(): void {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { nombre: '', correo: '', edad: 0 };
    });
  }

  updateUser(user: User): void {
    if (user.id) {
      this.userService
        .updateUser(user.id, user)
        .subscribe(() => this.loadUsers());
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }
}
