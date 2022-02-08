import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { VincularMateriaComponent } from '../vincular-materia/vincular-materia.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [AuthService]
})
export class InicioComponent {

  constructor(private authSvc: AuthService, private router: Router, public dialog: MatDialog) {
    this.materias = "Mecanica";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VincularMateriaComponent, {
      data: { name: this.codigo }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.codigo = result;
    });
  }

  public user$: Observable<any> = this.authSvc.afAuth.user;
  materias: string;
  codigo: number;
  ngOnInit(): void {
  }
  async verCalendario() {
    try {
      await this.router.navigate(['/calendario']);
    } catch (error) { console.log(error) }

  }
} 