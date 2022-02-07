import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { data } from './blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  data = new data();
  blogData: any;
  formData: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  })
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getData()
  }
  postData() {
    this.data.title = this.formData.value.title;
    this.data.date = this.formData.value.date;
    this.data.description = this.formData.value.description;
    this.data.status = this.formData.value.status;

    this.api.postBlog(this.data).subscribe({
      next: (res) => {
        alert("data is posted")
        this.formData.reset();
        this.getData();
      }
    })
  }

  getData() {
    this.api.getBlog().subscribe({
      next: (res) => {
        this.blogData = res
      }
    })
  }
  deleteData(row: any) {
    this.api.delBlog(row).subscribe({
      next: (res) => {
        alert("data deleted success fully");
      }
    })
  }
}
