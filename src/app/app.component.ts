import { Component } from '@angular/core';
import { FiveStarsCardComponent } from "./components/five-stars-card/five-stars-card.component";
import { MultiplePlatformsCardComponent } from "./components/multiple-platforms-card/multiple-platforms-card.component";
import { ConsistentScheduleCardComponent } from "./components/consistent-schedule-card/consistent-schedule-card.component";
import { SchedulePostsCardComponent } from "./components/schedule-posts-card/schedule-posts-card.component";
import { GrowFollowersCardComponent } from "./components/grow-followers-card/grow-followers-card.component";
import { AudienceGrowthCardComponent } from "./components/audience-growth-card/audience-growth-card.component";
import { CreatePostCardComponent } from "./components/create-post-card/create-post-card.component";
import { AiContentCardComponent } from "./components/ai-content-card/ai-content-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FiveStarsCardComponent,
    MultiplePlatformsCardComponent,
    ConsistentScheduleCardComponent,
    SchedulePostsCardComponent,
    GrowFollowersCardComponent,
    AudienceGrowthCardComponent,
    CreatePostCardComponent,
    AiContentCardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bento-grid';
}
