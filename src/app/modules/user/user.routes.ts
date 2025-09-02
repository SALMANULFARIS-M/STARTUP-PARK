import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";



export const USER_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  // { path: 'services', component: ServicesComponent, data: { animation: 'ServicesPage' } },
  // { path: 'who-we-serve', component: WhoWeServeComponent, data: { animation: 'WhoWeServePage' } },
  // { path: 'success-stories', component: SuccessStoriesComponent, data: { animation: 'SuccessStoriesPage' } },
  // { path: 'events', component: EventsComponent, data: { animation: 'EventsPage' } },
  // { path: 'blog', component: BlogComponent, data: { animation: 'BlogPage' } },
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '' } // fallback to home
];
