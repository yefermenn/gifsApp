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
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);

  trendingGifGroup = computed<gif[][]>(() =>{
    const groups = [];
    for(let i = 0 ; i < this.trendingGifs().length ; i+=3){
      groups.push(this.trendingGifs().slice(i,i+3));
    }
    return groups;
  })

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

    if( this.trendingGifsLoading() ) return;
    this.trendingGifsLoading.set(false);
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
      params: {
        api_key: environment.apyKey,
        limit:20,
        offset:this.trendingPage() * 20
      }
    }).subscribe((res)=>{
      const gifs = gifMapper.mapGiphyItemsToGifs(res.data)
      this.trendingGifsLoading.set(false)
      this.trendingGifs.update( currentGifs => [
        ... currentGifs,
        ... gifs
      ] )
    })
    this.trendingPage.update(current => current + 1)
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
