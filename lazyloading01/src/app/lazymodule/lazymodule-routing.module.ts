import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { LazyComponent } from './lazy.component';
const routes: Routes = [
  
{
    path: "",
    component:LazyComponent,
    children:[
      {
        path:'',
        redirectTo:'component1',
        pathMatch:'full'
      },
      {
        path: 'component1',
        component: Component1Component
    },
    {
      path: 'component2',
      component: Component2Component
    },
    {
      path: 'component3',
      component: Component3Component
    },
    
    ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazymoduleRoutingModule { }
