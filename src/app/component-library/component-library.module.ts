import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    ToggleButtonComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleButtonComponent,
    ButtonComponent
  ]
})
export class ComponentLibraryModule { }
