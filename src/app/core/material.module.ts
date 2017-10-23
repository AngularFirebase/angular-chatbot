import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
} from '@angular/material';

const modules = [
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
];

@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule { }
