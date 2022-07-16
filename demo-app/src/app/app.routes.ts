import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { ErrorComponentComponent } from "./error-component/error-component.component"
import { NumeComponentaComponent } from "./nume-componenta/nume-componenta.component"

export const routes = [
  {
    path: 'error',
    component: ErrorComponentComponent
  },
  {
    path: '',
    component: NumeComponentaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

