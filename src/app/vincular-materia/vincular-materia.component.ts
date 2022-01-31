import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-vincular-materia',
  templateUrl: './vincular-materia.component.html',
  styleUrls: ['./vincular-materia.component.scss']
})
export class VincularMateriaComponent implements OnInit{

  constructor(public dialogRef:MatDialogRef<VincularMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(){}
}
