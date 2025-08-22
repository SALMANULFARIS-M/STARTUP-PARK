import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
export interface Toast {
  type: 'success' | 'error';
  text: string;
}

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  toast$: Observable<Toast | null>;
  constructor(private toastService: ToastService) {
    this.toast$ = this.toastService.message$;
  }
}
