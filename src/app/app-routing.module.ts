import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {InputComponent} from "./input/input.component";
import {CardComponent} from "./card/card.component";

const routes: Routes = [
  {
    path:"header",
    component:HeaderComponent,
  },
  {
    path:"input",
    component:InputComponent,
  },
  {
    path:"card",
    component:CardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
