import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private http: HttpClient) { }

  // contact.service.ts
  submitContactForm(data: any): Observable<any> {
    return this.http.post('/api/contact', data);
  }

  // contact.service.ts
  submitExpoContactForm(data: any): Observable<any> {
    return this.http.post('/api/expo', data);
  }
}
