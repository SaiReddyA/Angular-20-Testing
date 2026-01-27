import { Routes } from '@angular/router';
import { About } from './Components/Routes/about/about';
import { Contact } from './Components/Routes/contact/contact';
import { ChildContact } from './Components/Routes/contact/child-contact/child-contact';

export const routes: Routes = [
    //{ path: '', component: About },
    { path: '', pathMatch:'full', redirectTo:'about'},
    { path: 'about', component:About},
    { path: 'contact', component:Contact, children:[
        {path: '', component:About},
        {path: 'child', component:ChildContact}
    ]},
    {path: 'child', component:ChildContact}
];
