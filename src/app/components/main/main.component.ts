import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  unEstudiante: Estudiante = {
    nombre: "Leonardo",
    apellido: "Lanzieri",
    sexo: "M",
    nota1: 10,
    nota2: 9,
    promedio: 10,
    cantidadMateriasAprobadas: 10,
    esRegular: true
  }

  listaEstudiantes: Array<Estudiante> = [
    {
      nombre: "Gabriela",
      apellido: "Acuña",
      sexo: "F",
      nota1: 10,
      nota2: 4,
      promedio: 7,
      cantidadMateriasAprobadas: 4,
      esRegular: true
    },
    {
      nombre: "Viviana",
      apellido: "Siniscalchi",
      sexo: "F",
      nota1: 5,
      nota2: 5,
      promedio: 5,
      cantidadMateriasAprobadas: 1,
      esRegular: false
    },
    {
      nombre: "Alicia",
      apellido: "Vazquez",
      sexo: "F",
      nota1: 9,
      nota2: 8,
      promedio: 8,
      cantidadMateriasAprobadas: 6,
      esRegular: true
    },
    {
      nombre: "Leandro",
      apellido: "Paredes",
      sexo: "M",
      nota1: 2,
      nota2: 4,
      promedio: 3,
      cantidadMateriasAprobadas: 3,
      esRegular: false
    },
    {
      nombre: "Lionel",
      apellido: "Messi",
      sexo: "M",
      nota1: 10,
      nota2: 10,
      promedio: 10,
      cantidadMateriasAprobadas: 10,
      esRegular: true
    },
    {
      nombre: "Liliana",
      apellido: "Silva",
      sexo: "F",
      nota1: 9,
      nota2: 8,
      promedio: 8,
      cantidadMateriasAprobadas: 5,
      esRegular: true
    },
    {
      nombre: "Julian LA ARAÑA QUE PICA",
      apellido: "Alvarez",
      sexo: "M",
      nota1: 3,
      nota2: 4,
      promedio: 4,
      cantidadMateriasAprobadas: 1,
      esRegular: false
    },
    {
      nombre: "Sergio",
      apellido: "Aguero",
      sexo: "M",
      nota1: 7,
      nota2: 6,
      promedio: 7,
      cantidadMateriasAprobadas: 1,
      esRegular: false
    },
  ]

  cambiarEstado() {
    this.unEstudiante.esRegular = !this.unEstudiante.esRegular
  }
}
