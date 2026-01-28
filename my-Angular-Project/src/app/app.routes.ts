import { Routes } from '@angular/router';

import { Contact } from './Components/Routes/contact/contact';
import { ChildContact } from './Components/Routes/contact/child-contact/child-contact';
import { Home } from './Components/home/home';
import { ChildAboutTest } from './Components/Routes/about/child-about-test/child-about-test';
import { Child2About } from './Components/Routes/about/child-2-about/child-2-about';
import { ReactiveFormsTest } from './Components/reactive-forms-test/reactive-forms-test';

export const routes: Routes = [
    //{ path: '', component: About },
    { path: '', pathMatch:'full', redirectTo:'about'},
    { path: 'about', children:[
            { path:'child', component:ChildAboutTest},
            { path:'child2about', component:Child2About},
        ], loadComponent: () => import('./Components/Routes/about/about').then(x => x.About),
    },
    { path: 'contact', component:Contact, children:[
        {path: 'child', component:ChildContact}
    ]},
    {path: 'child', component:ChildContact},
    {path: 'reactive', component:ReactiveFormsTest}
];
