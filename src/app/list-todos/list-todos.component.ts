import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {

    }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];

  message: string 
  //= [
    //new Todo(1,'Learn to Dance', false, new Date()),
    //new Todo(2,'Become an Expert at Angular', false, new Date()),
    //new Todo(3,'Visit Serbia', false, new Date())
  //]
  /*todo = {
    id : 1,
    description: 'Learn to Dance'
  }*/

  constructor(private todoService: TodoDataService,private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('marko',id).subscribe(
      response=>{
        console.log(response);
        this.message= `Delete Successful ${id}`
        this.refreshTodos();
      }
    )
  }

  refreshTodos(){
    this.todoService.retriveAllTodos('marko').subscribe(
      response=>{
        console.log(response)
        this.todos = response
      }
    )
  }

  updateTodo(id){
    console.log(`update todo ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
