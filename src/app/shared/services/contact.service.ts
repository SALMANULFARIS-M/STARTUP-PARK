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
    // Use your proxy endpoint instead of direct Google Apps Script URL
    return this.http.post('/api/contact', data);
  }
}
