import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
    <div class="overlay">
      <div class="popup">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  `,
  styles: [`
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent gray background */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .popup {
      position: relative;
      background-color: white;
      border: 1px solid #ccc;
      padding: 20px;
    }
  `],
})
export class PopupComponent {
  //component placed on top of dashboard only loaded when globalmachineactive is false
  @Input() errorMessage: string = '';
}
