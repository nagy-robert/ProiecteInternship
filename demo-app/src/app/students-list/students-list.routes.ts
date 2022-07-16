import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { StudentsListComponent } from "./students-list.component"

export const routes = [
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class StudentsListRoutingModule { }
