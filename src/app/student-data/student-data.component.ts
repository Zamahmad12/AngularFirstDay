import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.css'
})
export class StudentDataComponent implements OnInit{
public student: any = [
      {
        "id": "001",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "major": "Computer Science",
        "year": 2023
      },
      {
        "id": "002",
        "firstName": "Jane",
        "lastName": "Smith",
        "email": "jane.smith@example.com",
        "major": "Mathematics",
        "year": 2022
      },
      {
        "id": "003",
        "firstName": "Alice",
        "lastName": "Johnson",
        "email": "alice.johnson@example.com",
        "major": "Physics",
        "year": 2023
      },
      {
        "id": "004",
        "firstName": "Bob",
        "lastName": "Brown",
        "email": "bob.brown@example.com",
        "major": "Engineering",
        "year": 2021
      },
      {
        "id": "005",
        "firstName": "Eve",
        "lastName": "Davis",
        "email": "eve.davis@example.com",
        "major": "Biology",
        "year": 2024
      },
      {
        "id": "006",
        "firstName": "Charlie",
        "lastName": "Wilson",
        "email": "charlie.wilson@example.com",
        "major": "History",
        "year": 2022
      },
      {
        "id": "007",
        "firstName": "Diana",
        "lastName": "Miller",
        "email": "diana.miller@example.com",
        "major": "Art",
        "year": 2023
      },
      {
        "id": "008",
        "firstName": "Frank",
        "lastName": "Anderson",
        "email": "frank.anderson@example.com",
        "major": "Economics",
        "year": 2021
      },
      {
        "id": "009",
        "firstName": "Grace",
        "lastName": "Taylor",
        "email": "grace.taylor@example.com",
        "major": "Chemistry",
        "year": 2023
      },
      {
        "id": "010",
        "firstName": "Henry",
        "lastName": "Moore",
        "email": "henry.moore@example.com",
        "major": "Philosophy",
        "year": 2020
      }
  
]
ngOnInit(): void {
  this.student.forEach((item:any) => {
    console.log(item.name)
  })
}
addValue() {
  this.student.push(studentData);
    const data = {
    id: this.addValue,
    firstName: this.addValue,
    lastName: this.addValue,
    email: this.addValue,
    major: this.addValue,
    year: this.addValue
  }
}
}
export class studentData{
  public id: number | undefined
  public firstname: string | undefined
  public lastname: string | undefined
  public email: any | undefined
  public Major: string | undefined
  public year: number | undefined
}