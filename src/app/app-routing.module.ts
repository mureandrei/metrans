import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsContainerComponent } from './posts-view/components/posts-container.component';
import { UsersContainerComponent } from './users-view/components/users-container.component';

const routes: Routes = [
  {path: 'users', component: UsersContainerComponent},
  {path: 'posts', component: PostsContainerComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
