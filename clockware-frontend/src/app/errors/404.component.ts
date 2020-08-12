import { Component } from '@angular/core';

@Component({
  template: `
    <h1 class="error-message text-center">404'd</h1>
    <p class="text-center">Page not found</p>
  `,
  styles: [
    `
      .error-message {
        margin-top: 150px;
      }
    `,
  ],
})
export class Error404Component {
  constructor() {}
}
