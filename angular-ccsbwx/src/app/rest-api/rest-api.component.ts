import { HttpClient, HttpHeaders, HttpHeaderResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rest-api",
  templateUrl: "./rest-api.component.html",
  styleUrls: ["./rest-api.component.css"],
})
export class RestApiComponent implements OnInit {
  constructor(private http: HttpClient) {}
  posts: any;

  // call api dari json placeholder
  loadPostsJPH() {
    this.http.get("https://jsonplaceholder.typicode.com/posts/").subscribe((posts: any) => {
      console.log(posts);
      this.posts = posts;
    });
  }

  // call api dari dummyapi.io
  loadPostsDummy() {
    const headers = new HttpHeaders({ "app-id": "63033943889b3aab444829f0" });
    const requestOptions = { headers: headers };

    this.http.get("https://dummyapi.io/data/v1/user", requestOptions).subscribe((posts: any) => {
      console.log(posts);
      this.posts = posts = [];
    });
  }

  createPost() {
    this.http.post("https://jsonplaceholder.typicode.com/posts", { title: "Hellow Zz", body: "This is the body" }).subscribe(
      (response: any) => {
        window.alert(JSON.stringify(response));
      },
      (error) => {
        window.alert(JSON.stringify(error));
      }
    );
  }

  deletePost() {
    this.http.delete("https://jsonplaceholder.typicode.com/posts/1").subscribe(
      (response: any) => {
        window.alert(JSON.stringify(response));
      },
      (error) => {
        window.alert(JSON.stringify(error));
      }
    );
  }

  ngOnInit(): void {
    this.loadPostsJPH();
    // this.loadPostsDummy();
  }
}
