import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./spinner.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SpinnerComponent { }
