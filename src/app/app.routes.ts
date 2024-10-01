import { Routes } from '@angular/router';
import { EntradasComponent } from './screens/entradas/entradas.component';
import { IndexComponent } from './screens/index/index.component';
import { LoginComponent } from './screens/login/login.component';
import { ModalComponent } from './screens/modal/modal.component';
import { ModalEdicionComponent } from './screens/modal-edicion/modal-edicion.component';
import { ModalEntradasComponent } from './screens/modal-entradas/modal-entradas.component';
import { ModalSalidasComponent } from './screens/modal-salidas/modal-salidas.component';
import { ProductoComponent } from './screens/producto/producto.component';
import { SalidasComponent } from './screens/salidas/salidas.component';

export const routes: Routes = [
    {path: "entradas", component: EntradasComponent},
    {path: "index", component: IndexComponent},
    {path: "login", component: LoginComponent},
    {path: "modal", component: ModalComponent},
    {path: "modalEdicion", component: ModalEdicionComponent},
    {path: "modalEntradas", component: ModalEntradasComponent},
    {path: "modalSalidas", component: ModalSalidasComponent},
    {path: "producto", component: ProductoComponent},
    {path: "salidas", component: SalidasComponent}
];
