import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  title: string
  desc: string
  constructor() { }

  ngOnInit(): void {
  }
  taskIndex: number = 1;
  onSubmit() {
    const todo = {
      sno: this.taskIndex,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    this.taskIndex += 1;
  }
}
