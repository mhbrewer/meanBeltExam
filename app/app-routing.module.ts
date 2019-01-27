import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: PetsComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pets/new', component: NewComponent },
  { path: 'pets/:id', component: ViewComponent },
  { path: 'pets/:id/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
