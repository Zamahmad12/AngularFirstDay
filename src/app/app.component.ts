import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { StudentDataComponent } from "./student-data/student-data.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent,  StudentDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstDay';
}
