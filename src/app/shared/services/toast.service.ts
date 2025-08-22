import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
 private messageSource = new BehaviorSubject<{ text: string; type: 'success' | 'error' } | null>(null);
  message$ = this.messageSource.asObservable();
  constructor() { }

  showSuccess(text: string) {
    this.messageSource.next({ text, type: 'success' });
    setTimeout(() => this.messageSource.next(null), 3000);
  }

  showError(text: string) {
    this.messageSource.next({ text, type: 'error' });
    setTimeout(() => this.messageSource.next(null), 3000);
  }
}
