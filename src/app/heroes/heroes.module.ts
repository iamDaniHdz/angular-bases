import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListComponent } from "./listado/list.component";

@NgModule({
    declarations: [
        HeroeComponent,
        ListComponent,
    ],
    exports: [
        HeroeComponent,
        ListComponent,
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule {}