import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ExpoComponent } from "./expo/expo.component";



export const USER_ROUTES: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
  { path: 'expo', component: ExpoComponent, data: { animation: 'ExpoPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
  { path: '**', redirectTo: '' } // fallback to home
  // { path: 'services', component: ServicesComponent, data: { animation: 'ServicesPage' } },
  // { path: 'who-we-serve', component: WhoWeServeComponent, data: { animation: 'WhoWeServePage' } },
  // { path: 'success-stories', component: SuccessStoriesComponent, data: { animation: 'SuccessStoriesPage' } },
  // { path: 'events', component: EventsComponent, data: { animation: 'EventsPage' } },
  // { path: 'blog', component: BlogComponent, data: { animation: 'BlogPage' } },
];
