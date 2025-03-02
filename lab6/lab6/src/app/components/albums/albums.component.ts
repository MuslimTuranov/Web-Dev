import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router'; 
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  standalone: true, 
  imports: [CommonModule, RouterModule, RouterLink], 
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  deleteAlbum(albumId: number): void {
    this.albumsService.deleteAlbum(albumId).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== albumId);
    });
  }
}

