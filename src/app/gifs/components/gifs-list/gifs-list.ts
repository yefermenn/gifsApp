import { Component, input } from '@angular/core';
import { GifsListItem } from "./gifs-list-item/gifs-list-item";
import { gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gifs-list',
  imports: [GifsListItem],
  templateUrl: './gifs-list.html',
})
export class GifsList {
  images = input.required<gif[]>()
}
