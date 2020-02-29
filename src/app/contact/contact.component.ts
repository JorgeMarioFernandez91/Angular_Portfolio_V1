import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// import { MatFormFieldModule } from '@angular/material/form-field'; 
// import { MatButtonModule } from '@angular/material/form-field'; 
// import { MatInputModule } from '@angular/material/form-field'; 

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    messageForm: FormGroup;
    submitted = false;
    success = false;

    /// adding items to arguments is called 'dependency injection'
    constructor(private formBuilder: FormBuilder) {
        this.messageForm = this.formBuilder.group({
            name: ['', Validators.required],
            message: ['', Validators.required]
        })
    }

    onSubmit() {
        this.submitted = true;

        if(this.messageForm.invalid){
            return;
        }

        this.success = true;
    }

    ngOnInit(): void {
    }

}
