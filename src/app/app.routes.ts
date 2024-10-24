import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PricingPlanComponent } from './Components/pricing-plan/pricing-plan.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'pricing-plans',
        component: PricingPlanComponent
    },
    {
        path:'testimonial',
        component: TestimonialComponent
    },
    {
        path: 'signin',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }

];
