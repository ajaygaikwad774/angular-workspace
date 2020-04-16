import { Component, Inject, HostListener } from "@angular/core";
import { MyserviceService } from "./myservice.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "modulePract";
  name = "Ajay Gaikwad";
  bdr:number= 3;
  student = [];

  country = [];

  constructor(@Inject(MyserviceService) myserviceService) {
    console.log(myserviceService);

    this.country = [
      {
        name: "India",
        person: [
          {
            name: "Ajay Gaikwad"
          },
          {
            name: "Monika Waghmare"
          },
          {
            name: "Sneha Desale"
          }
        ]
      },
      {
        name: "Pakisthan",
        person: [
          {
            name: "Atul Araskar"
          },
          {
            name: "Prasad Mohite"
          },
          {
            name: "Vijay Patil"
          }
        ]
      }
    ];
    this.student = [
      {
        id: 1,
        name: "ajay",
        age: 12,
        gender: "male",
        course: "BCA"
      },
      {
        id: 1,
        name: "ajay",
        age: 12,
        gender: "male",
        course: "BCA"
      },
      {
        id: 1,
        name: "ajay",
        age: 12,
        gender: "male",
        course: "BCA"
      },
      {
        id: 1,
        name: "ajay",
        age: 12,
        gender: "male",
        course: "BCA"
      }
    ];
  }

  //@HostListener('click',['$event'])
  //onhostClick(event:Event){
  // alert("hie");
  //}
  choose = "";

  onSelect(event: any) {
    this.choose = event.target.value;
  }

  getmoreStudents() {
    this.student = [
      {
        id: 1,
        name: "ajay",
        age: 12,
        gender: "male",
        course: "BCA"
      },
      {
        id: 1,
        name: "ajay",
        age: 12,
        gender: "male",
        course: "BCA"
      },
      {
        id: 1,
        name: "ajay",
        age: 12,
        gender: "male",
        course: "BCA"
      },
      {
        id: 2,
        name: "vijay",
        age: 13,
        gender: "male",
        course: "C++"
      }
    ];
  }

  trackbyid(index: number, student: any): string {
    return student.id;
  }

  getColor(name) {
    switch (name) {
      case "India":
        return "blue";
        break;
      case "Pakisthan":
        return "green";
        break;
      default:
        return "nothing";
        break;
    }
  }
}
