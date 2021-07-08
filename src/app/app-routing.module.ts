import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhysioPanelComponent } from './client/physio-panel/physio-panel.component';

const routes: Routes = [
  { path: '', component: PhysioPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
