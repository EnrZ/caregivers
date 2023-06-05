import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ServicesService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      EmailerName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
    });
  }
  onSubmit(FormData) {
    if(this.FormData.valid){
      console.log(FormData)
      this.contact.PostMessage(FormData)
        .subscribe(response => {
          location.href = 'https://mailthis.to/confirm'
          console.log(response)
        }, error => {
          console.warn(error.responseText)
          console.log({ error })
        })
      
   } else {
    //throw error if the required fields aren't valid 
    this.validateAllFormFields(this.FormData);
   }

  }

  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
        const control = formGroup.get(field);
        if(control instanceof FormControl){
          control.markAsDirty({onlySelf:true});
        } else if(control instanceof FormGroup) {
          this.validateAllFormFields(control)
        }
    })
  }
}