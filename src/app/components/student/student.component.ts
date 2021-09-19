import { Component, OnInit } from '@angular/core';
import { APIClient, StudentViewModel } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: APIClient) { }
  students: StudentViewModel[] = [];
  ngOnInit(): void {

    this.studentService.search(1, 10)
      .subscribe(x => {
        this.students = x.students;
      });
  }

  onRowEditInit(product) {
    //this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product) {
    // if (product.price > 0) {
    //   delete this.clonedProducts[product.id];
    //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
    // }
    // else {
    //   this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
    // }
  }

  onRowEditCancel(product, index) {
    // this.products2[index] = this.clonedProducts[product.id];
    // delete this.products2[product.id];
  }
}
