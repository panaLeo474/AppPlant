import { RouterModule, Routes } from "@angular/router";
import { PanelComponent } from "./components/panel/panel.component";
import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ProductosListaComponent } from "./components/productos/productos-lista/productos-lista.component";
import { ProductoComponent } from "./components/productos/producto/producto.component";

const routes: Routes = [
  
    {
        path: 'lista-productos',
        component:ProductosListaComponent 
    },
    {
        path: 'toolbarproducto',
        component:ProductoComponent 
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }