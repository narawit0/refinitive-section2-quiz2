import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'refin-sec2-2';
  categories: any;
  filteredCategories: any;
  categoryTitle: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://api.publicapis.org/categories").subscribe((data: any) => {
      this.categories = data.categories
      this.filteredCategories = data.categories
    })
  }

  handleChange() {
    if (this.categoryTitle) {
      this.filteredCategories = this.categories.filter((cat: any) => {
        return cat.includes(this.categoryTitle)
      })
    } else {
      this.filteredCategories = this.categories;
    }
  }
}
