import {  NgFor, NgIf, NgStyle } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


const modules = [ReactiveFormsModule];
const materialModules = [MatFormFieldModule,MatSelectModule,MatInputModule];
const common = [NgFor, NgIf, NgStyle];

const randomNumberComponentsRxjsImports = [...modules, ...materialModules, common];
export default randomNumberComponentsRxjsImports;
