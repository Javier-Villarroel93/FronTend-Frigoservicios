import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  {path: "", component: DashboardComponent,
    children:[ 
      { path: "formulario", 
        component: FormularioComponent,
      },
      { path: "historial", 
        component: HistorialComponent,
      },
      
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
