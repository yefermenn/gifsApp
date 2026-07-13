import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { gif } from '../interfaces/gif.interface';
import { gifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

const loadFromLS = ():Record<string,gif[]> =>{
  const history = localStorage.getItem('history')
  return history ? JSON.parse(history): {};
}

@Injectable({providedIn: 'root'})
export class GifService {


  trendingGifs = signal<gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, gif[]>>(loadFromLS());
  searchHistoryKeys = computed(()=> Object.keys(this.searchHistory()));

  saveToLocalStorage = effect(()=>{
    localStorage.setItem('history',JSON.stringify(this.searchHistory()))
  })

  constructor(){
    this.loadTrendingGifs();
  }

  private http = inject(HttpClient);
  loadTrendingGifs(){
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
      params: {
        api_key: environment.apyKey,
        limit:20
      }
    }).subscribe((res)=>{
      const gifs = gifMapper.mapGiphyItemsToGifs(res.data)
      this.trendingGifsLoading.set(false)
      this.trendingGifs.set(gifs)
    })
  }
  searchGifs(query: string){
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
      params: {
        api_key: environment.apyKey,
        q:query,
        limit:20,
        lang:'es',
      }
    }).pipe(
      map(({data}) => data),
      map((items) => gifMapper.mapGiphyItemsToGifs(items)),
      //historial
      tap(items => {
        this.searchHistory.update(history => ({
          ...history,[query.toLowerCase()]: items,
        }))
        console.log(this.searchHistoryKeys())
      })
    )
    //.subscribe((res)=>{
      //const gifs = gifMapper.mapGiphyItemsToGifs(res.data)
      //console.log(gifs);
    //})
  }
  getHistoryGifs(query:string): gif[]{
    return this.searchHistory()[query] ?? [];
  }
}
