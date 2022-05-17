import { Component } from "@angular/core";
import { IPost } from "../../shared/data/post.interface";

@Component({
    selector: 'posts-container',
    templateUrl: './posts-container.component.html',
    styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent {
    public posts: IPost[] = [
        {
            author: 'James',
            message: 'Tefwfweestfwfweing testifw fwef wef wef wng messages',
            title: 'Post 1'
        },
        {
            author: 'Bob the cool guy',
            message: 'This is a cool content',
            title: 'Post 2'
        },
        {
            author: 'John Johnny',
            message: 'Testing testing messages',
            title: 'Post 3'
        }
    ];
}
