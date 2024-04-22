import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ArticuloComponent } from '../articulo/articulo.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ArticuloComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  
  articulos=[
    {
      id:1,
      nombre:"Hacking ético",
      imagen:"../../assets/imagenes/hackingEtico.jpg",
      textoDescriptivo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni officiis quae, quos neque incidunt. Ex, suscipit totam doloremque aspernatur consequuntur iusto sit molestiae earum inventore explicabo, quaerat rerum rem?"
    },{
      id:2,
      nombre:"Legislación de Seguridad en Europa",
      imagen:"../../assets/imagenes/legislacionEuropea.webp",
      textoDescriptivo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni officiis quae, quos neque incidunt. Ex, suscipit totam doloremque aspernatur consequuntur iusto sit molestiae earum inventore explicabo, quaerat rerum rem?"
    },{
      id:3,
      nombre:"¿Cómo evitar que te hackeen?",
      imagen:"../../assets/imagenes/hacker.webp",
      textoDescriptivo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni officiis quae, quos neque incidunt. Ex, suscipit totam doloremque aspernatur consequuntur iusto sit molestiae earum inventore explicabo, quaerat rerum rem?"
    },{
      id:4,
      nombre:"¿Qué es phising?",
      imagen:"../../assets/imagenes/phising.webp",
      textoDescriptivo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni officiis quae, quos neque incidunt. Ex, suscipit totam doloremque aspernatur consequuntur iusto sit molestiae earum inventore explicabo, quaerat rerum rem?"
    }
  ]

}
