import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];

  loading:boolean;

  error:boolean;
  errorMensaje:string;

  constructor(private spotify: SpotifyService) {
    this.error = false;
  }

  buscar(termino: string){

    this.loading = true;
    console.log(termino);
    
    this.spotify.getArtistas(termino).subscribe( (data:any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    }, (errorServicio)=>{
        this.error = true;
        this.loading = false;
        this.errorMensaje = errorServicio.error.error.message;
    });
  }

}
