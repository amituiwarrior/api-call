import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  post: any = {};
  comments: any = [];
  url: any = 'https://www.reddit.com/r/csgo/comments/drrxoo/counterstrike_global_offensive_update_for_11419/.json';

  commentPerPage: number = 1;
  commentsLoaded: any = [];
  commentOffset = 1;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url)
      .subscribe(postData => {
        this.post = postData[0].data.children[0].data;
        let commentsList = postData[1].data.children;
        for(let i=0;i<commentsList.length; i++){
          this.comments.push(commentsList[i].data)
        }
        this.loadMore();
      });
    
  }
  

  getCommentRepliesData(replies){
    let replys = [];
    if(replies && replies.data){
      let repliesList = replies.data.children;
      for(let i=0;i<repliesList.length; i++){
        replys.push(repliesList[i].data)
      }
    }
 
    return replys; 
  }

  loadMore(){
    this.commentsLoaded =[];
    let limit = (this.commentPerPage * this.commentOffset) - 1
    for(let i=0;i<this.comments.length;i++){
      if(i <= limit){
        this.commentsLoaded.push(this.comments[i])
      }
    }
    this.commentOffset++;
  }

}
