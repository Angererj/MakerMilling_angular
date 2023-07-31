import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
    <div class="popup">
      <p>{{ errorMessage }}</p>
    </div>
  `,
  styles: [`
    .popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      border: 1px solid #ccc;
      padding: 20px;
    }
  `],
})
export class PopupComponent {
  @Input() errorMessage: string = '';
}
