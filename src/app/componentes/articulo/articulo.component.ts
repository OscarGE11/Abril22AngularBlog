import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  @Input()
  id:any;

  articulos=[
    {
      id:1,
      nombre:"Hacking ético",
      imagen:"../../assets/imagenes/hackingEtico.jpg",
      textoDescriptivo:"El hacking ético es el uso autorizado de habilidades de piratería informática para identificar vulnerabilidades en sistemas de información. Los hackers éticos, también conocidos como hackers buenos o sombreros blancos, utilizan sus conocimientos para mejorar la seguridad de sistemas informáticos, redes y aplicaciones. Realizan pruebas de penetración, análisis de seguridad y evaluaciones de riesgos para identificar posibles puntos débiles y ayudar a las organizaciones a protegerse contra ciberataques. A diferencia de los hackers maliciosos, los hackers éticos operan dentro de los límites legales y éticos, obteniendo permiso previo para realizar sus actividades de hacking con el fin de fortalecer la seguridad de sistemas informáticos."},{
      id:2,
      nombre:"Legislación de Seguridad en Europa",
      imagen:"../../assets/imagenes/legislacionEuropea.webp",
      textoDescriptivo:"La legislación de seguridad en Europa es crucial para proteger a los ciudadanos y garantizar la estabilidad. Aborda áreas como la seguridad fronteriza, la lucha contra el terrorismo, la protección de datos y la ciberseguridad. Iniciativas clave incluyen el espacio Schengen, la Directiva sobre Retención de Datos, el Reglamento General de Protección de Datos (GDPR) y la Directiva sobre Ciberseguridad. Además, cada país europeo tiene sus propias leyes de seguridad nacional y combate al crimen organizado. En resumen, la legislación de seguridad en Europa es esencial para proteger a los ciudadanos y mantener la estabilidad, con medidas coordinadas a nivel nacional y europeo."
    },{
      id:3,
      nombre:"¿Cómo evitar que te hackeen?",
      imagen:"../../assets/imagenes/hacker.webp",
      textoDescriptivo:"Mantén tus programas actualizados, usa contraseñas fuertes y únicas para cada cuenta, activa la autenticación de dos factores, evita hacer clic en enlaces o archivos desconocidos y utiliza software antivirus y firewall actualizados."
    },{
      id:4,
      nombre:"¿Qué es phising?",
      imagen:"../../assets/imagenes/phising.webp",
      textoDescriptivo:"El phishing es una forma de ciberataque en la que los atacantes intentan engañar a las personas para que revelen información personal, como contraseñas, números de tarjetas de crédito u otra información confidencial. Usualmente, los hackers utilizan correos electrónicos, mensajes de texto o sitios web falsos que se asemejan a los legítimos de instituciones conocidas, como bancos, empresas o servicios en línea, con el objetivo de que las víctimas proporcionen sus datos sensibles. El phishing puede tener graves consecuencias, incluyendo el robo de identidad, fraude financiero y compromiso de la seguridad digital"
    }
  ]

}
