import { Component, inject, signal } from '@angular/core';
import { GifsList } from "../../components/gifs-list/gifs-list";
import { GifService } from '../../services/gifs.service';
import { gif } from '../../interfaces/gif.interface';
import { gifMapper } from '../../mapper/gif.mapper';

@Component({
  selector: 'app-search',
  imports: [GifsList],
  templateUrl: './search.html',
})
export default class Search {
  gService = inject(GifService);
  gifs = signal<gif[]>([]);

  onSearch(query:string){
    this.gService.searchGifs(query).subscribe((resp =>{
      this.gifs.set(resp)
    }));
  }
}
