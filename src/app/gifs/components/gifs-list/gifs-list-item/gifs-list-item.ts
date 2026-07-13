import { Component, input } from '@angular/core';
import { gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'app-gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
})

export class GifsListItem {
  image = input.required<string>()
}
