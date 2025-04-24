import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { FindComponent } from './find/find.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:"",component:ViewComponent},
  {path:"view", component:ViewComponent},
  {path:"find", component:FindComponent},
  {path:"insert",component:InsertComponent},
  {path:"update",component:UpdateComponent},
  {path:"delete",component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
