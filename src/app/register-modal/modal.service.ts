import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({ providedIn: 'root' })
export class ModalService {
  openRegisterModalService() {
    $('#registerModal').modal('show');
  }

  constructor() { }
}
