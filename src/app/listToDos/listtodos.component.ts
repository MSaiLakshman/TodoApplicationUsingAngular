import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(
    public id: number,
    public description: string,
    public completed: boolean,
    public targetDate: Date
  ){ }
}


@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrl: './listtodos.component.css',
  
})

export class ListtodosComponent implements OnInit{

  todos=[
    new Todo(1, 'Buy milk', true, new Date()),
    new Todo(2, 'Buy sugar', true, new Date()),
    new Todo(3, 'Learn Angular', false, new Date()),
    new Todo(4, 'Get job', false, new Date())

  ]

  constructor() { }

  ngOnInit() { }
}
