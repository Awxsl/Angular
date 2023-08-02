import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { UIService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask = new EventEmitter()

  text!: string
  day!: string
  reminder:boolean = false
  showAddTask!: boolean
  subscription: Subscription


  constructor(private uiService: UIService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => {this.showAddTask = value})
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text || !this.day) {
      alert('Enter text and day')
      return
    }

    const newTask = {
      text: this.text, 
      day: this.day, 
      reminder: this.reminder
    }

  
    this.onAddTask.emit(newTask)

    this.text = ''
    this.day = ''
    this.reminder = false
  }

}
