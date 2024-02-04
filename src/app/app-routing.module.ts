import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangszerekComponent } from './hangszerek/hangszerek.component';
import { ErrorComponent } from './error/error.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { KerdesekComponent } from './kerdesek/kerdesek.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { Guitar1Component } from './guitar1/guitar1.component';
import { Guitar2Component } from './guitar2/guitar2.component';
import { Guitar3Component } from './guitar3/guitar3.component';
import { Guitar4Component } from './guitar4/guitar4.component';

const routes: Routes = [
  {path: "fooldal", component:FooldalComponent},
  {path: "hangszerek", component:HangszerekComponent},
  {path: "rolunk", component:RolunkComponent},
  {path: "kerdesek", component:KerdesekComponent},
  {path: "kapcsolat", component:KapcsolatComponent},
  {path: "guitar1", component:Guitar1Component},
  {path: "guitar2", component:Guitar2Component},
  {path: "guitar3", component:Guitar3Component},
  {path: "guitar4", component:Guitar4Component},

  {path:"", redirectTo: "/fooldal", pathMatch:"full"},

  {path: "**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
