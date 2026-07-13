import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from 'src/app/gifs/services/gifs.service';

interface menuOption {
  icon: string,
  label: string,
  route: string,
  subLabel: string,
}

@Component({
  selector: 'app-gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.html',
})
export class GifsSideMenuOptions {
  service = inject(GifService);
  history = this.service.searchHistoryKeys();
  menuOptions:menuOption[] =[
    {
        icon:'fa-solid fa-chart-line',
        label: 'Trending',
        subLabel: 'Gifs populares',
        route: '/dashboard/trending'
    },
    {
        icon:'fa-solid fa-magnifying-glass',
        label: 'Buscador',
        subLabel: 'Buscar Gifs',
        route: '/dashboard/search'
    }
  ]
key: any|string;
}
