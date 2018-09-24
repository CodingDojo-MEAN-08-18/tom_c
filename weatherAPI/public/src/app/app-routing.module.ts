import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtondcComponent } from './washingtondc/washingtondc.component';
import { ChicagoComponent } from './chicago/chicago.component';
//import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: 'seattle',component: SeattleComponent },
    { path: 'sanjose',component: SanjoseComponent },
    { path: 'burbank',component: BurbankComponent },
    { path: 'washingtondc',component: WashingtondcComponent },
    { path: 'dallas',component: DallasComponent },
    { path: 'chicago',component: ChicagoComponent },
//    { path: '**', component: PageNotFoundComponent },
//    children: []
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }