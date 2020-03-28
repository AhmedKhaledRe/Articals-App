import { Component, OnInit, NgModule } from '@angular/core';
import { ArticalsApiService } from '../shared/articals-api.service';
import { Artical } from '../shared/artical.model';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-artical-list',
  templateUrl: './artical-list.component.html',
  styleUrls: ['./artical-list.component.sass'],
})

export class ArticalListComponent implements OnInit {

  searchIcon = faSearch;
  articals: Artical[] = [];

  constructor(private articalService: ArticalsApiService) {}

  ngOnInit() {
    const articalObseravble = this.articalService.getArticals();

    articalObseravble.subscribe( (articals: Artical[]) => {
        this.articals = articals.filter(art => art.id < 16);
      });
  }

}

