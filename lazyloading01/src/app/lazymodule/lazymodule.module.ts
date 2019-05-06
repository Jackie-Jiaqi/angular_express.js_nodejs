import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazymoduleRoutingModule } from './lazymodule-routing.module';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [Component1Component, Component2Component, Component3Component, LazyComponent],
  imports: [
    CommonModule,
    LazymoduleRoutingModule
  ]
})
export class LazymoduleModule { }
