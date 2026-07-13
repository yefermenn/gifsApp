import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { GifsSideMenu } from "../../components/gifs-side-menu/gifs-side-menu";

@Component({
  selector: 'app-dasboard-page',
  imports: [RouterOutlet, GifsSideMenu],
  templateUrl: './dasboard-page.html',
})
export default class DasboardPage {}
