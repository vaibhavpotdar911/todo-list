# TodoList

This is a simple To-do list to make a list of some tasks/items which are supposed to be completed! This code is completely built on Angular v11 and Bootstrap v5.

## Production Server
[Working app](https://github.com/vaibhavpotdar911/todo-list/blob/master/working-app.png)
This application is hosted on **AWS S3**. To view the development build of this project head to [Todo List.](http://vaibhav-todolist.s3-website.ap-south-1.amazonaws.com)

## CI/CD Pipeline

This Todo-List has a *Continuous Integration/Continuous Delivery* `CI/CD Pipeline`. The pipeline is created using **Amazon CodePipeline**. Whenever I push a commit to **Github**, **Amazon CodePipeline** would automatically trigger the fetch command to build the code and deploy it. 

## Use of local storage

The app uses local storage to save the tasks data. Even if you refresh the page, the data is persisted. The tasks you create would not be available on other device.

## Long-term Scope

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).




#temp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.