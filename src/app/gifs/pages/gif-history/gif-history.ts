import { computeMsgId } from '@angular/compiler';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { GifsList } from "../../components/gifs-list/gifs-list";

@Component({
  selector: 'app-gif-history',
  imports: [GifsList],
  templateUrl: './gif-history.html',
})
export default class GifHistory {
  service = inject(GifService);
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map(params => params['query']))
  );
  gifsByKey = computed(() =>{
    return this.service.getHistoryGifs(this.query())
  })
  //todo: entender lo de params['query']
  //todo: entender los map y tap de rxjs
}
