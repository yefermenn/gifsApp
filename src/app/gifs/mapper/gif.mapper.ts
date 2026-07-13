import { gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class gifMapper{
  static mapGiphyItemToGif(item: GiphyItem):gif{
    return {
      id:item.id,
      title: item.title,
      url: item.images.original.url
    }
  }
  static mapGiphyItemsToGifs(items: GiphyItem[]):gif[]{
    return items.map(this.mapGiphyItemToGif)
  }
}
