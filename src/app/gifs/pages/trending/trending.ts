import { Component, inject } from '@angular/core';
import { GifsList } from "../../components/gifs-list/gifs-list";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending',
  imports: [GifsList],
  templateUrl: './trending.html',
})
export default class Trending {
  gifService = inject(GifService)
}
