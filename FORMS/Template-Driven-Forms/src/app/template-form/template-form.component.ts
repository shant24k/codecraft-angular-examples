import { Component, OnInit, ViewChild } from '@angular/core';
import { Signup } from './signup'
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  model: Signup = new Signup();
  @ViewChild("f") form: any;
  firstName: string = "";

  langs: string[] = ["English", "French", "German"];

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }

  ngOnInit() {
  }

}
