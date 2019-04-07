import { Component, OnInit } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  ActivatedRoute } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators, FormControlName} from '@angular/forms';
import { CommentService } from './comment.service';
import Comment from './Comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'commentupdown';
  angForm: FormGroup;

  comments: Comment[];
  comment: any = {};
  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router, private fb: FormBuilder, private cs: CommentService,private route: ActivatedRoute,private router: Router) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
    this.createForm();
    route.params.subscribe(console.log)
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }

  createForm() {
    this.angForm = this.fb.group({
      comment_text: ['', Validators.required ]
    });
  }

  addComment(comment_text) {
    this.route.params.subscribe(params => {
    this.cs.addComment(comment_text).subscribe((data: string) =>{
      this.ngOnInit();
    });})

  }

  upvoteComment(cid) {
    this.route.params.subscribe(params => {
       this.cs.upvoteComment(cid).subscribe((data: string) =>{
        console.log(data);
        this.ngOnInit();
        // this.router.navigateByUrl('/comment');
        });
       
 });}

 downvoteComment(cid) {
  this.route.params.subscribe(params => {
     this.cs.downvoteComment(cid).subscribe((data: string) =>{
      console.log(data);
      this.ngOnInit();
      });
});}

  ngOnInit() {
  

    this.cs
      .getComments()
      .subscribe((data: Comment[]) => {
        this.comments = data;
    });
    this.angForm.reset();
  }

}

 

  
