import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { BenefitIconsComponent } from './benefit-icons/benefit-icons.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { PlanComponent } from './plan/plan.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    BenefitsComponent,
    BenefitIconsComponent,
    TestimonialsComponent,
    TestimonialCardComponent,
    PlanComponent,
    SignInComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
