import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent {
  albumId!: number;
  isSaving: boolean = false; 
  album: any = { title: '' };

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(data => {
      this.album = data;
      console.log("Loaded album:", this.album); 
    });
  }
  

  saveAlbum(): void {
    console.log("Before save:", this.album); 
    this.isSaving = true;
    this.albumsService.updateAlbum(this.album.id, this.album).subscribe(updatedAlbum => {
      console.log("Updated album:", updatedAlbum); 
      this.album = updatedAlbum;
      this.isSaving = false;
      alert('Album updated!');
    });
  }
  

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
