import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ArticuloComponent } from './componentes/articulo/articulo.component';

export const routes: Routes = [

    {path:'articulo/:id',component:ArticuloComponent},
    {path:'inicio',title:'Articulos',component:InicioComponent},
    {path:'',redirectTo:'inicio',pathMatch:'full'}

];
