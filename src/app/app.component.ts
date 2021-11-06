import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

projectForm: FormGroup
projectStatuses = ['Stable', 'Critical','Finished']

constructor(formBuilder:FormBuilder){}


ngOnInit(){

  this.projectForm = new FormGroup({ 
    'projectName': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'status': new FormControl('Stable')
  })

}

onSubmit(){

}

}
