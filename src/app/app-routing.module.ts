import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'templatedrivenforms',
    loadChildren: () => import('./template-driven/template-driven-forms.module').then(m => m.TemplateDrivenFormsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
