import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'

export class CustomValidators {

    static forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
        if (control.value === "Test") {
            return { 'projectNameIsForbidden': true }
        }
        else {
            return null
        }
    }

    static forbiddenProjectName2(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "Test2") {
                    resolve({ 'projectNameIsForbidden': true })
                }
                else {
                    resolve(null)
                }
            }, 1000);
        })
        return promise;
    }


}