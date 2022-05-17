import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "../core/core.module";
import { PostComponent } from "./components/post/post.component";
import { PostsContainerComponent } from "./components/posts-container.component";

@NgModule({
    declarations: [PostsContainerComponent, PostComponent],
    imports: [CoreModule, BrowserModule],
    providers: [],
    exports: [PostsContainerComponent]
})
export class PostsViewModule { }
