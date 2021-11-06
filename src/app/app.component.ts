import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './cust-validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup
  projectStatuses = ['Stable', 'Critical', 'Finished']

  constructor(formBuilder: FormBuilder) { }


  ngOnInit() {

    this.projectForm = new FormGroup({

      'projectName': new FormControl(null, [Validators.required,CustomValidators.forbiddenProjectName], CustomValidators.forbiddenProjectName2),
      // 'projectName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    })

  }

  onSubmit() {
    console.log(this.projectForm.value)
  }

  // forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
  //   if (control.value === "Test") {
  //     return { 'projectNameIsForbidden': true }
  //   }
  //   else {
  //     return null
  //   }
  // }

  // forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === "Test") {
  //         resolve({ 'projectNameIsForbidden': true })
  //       }
  //       else {
  //         resolve(null)
  //       }
  //     }, 1000);
  //   })
  //   return promise;
  // }


}
