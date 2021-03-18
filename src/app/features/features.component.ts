import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  iconURL: string = 'generated/images/marketing/features/feature-icon.svg';

  features: any[] = [
    {
      "title": "Cross Platform",
      "title1": "Progressive Web Apps",
      "body1": "Use modern web platform capabilities to deliver app-like experiences. High performance, offline, and zero-step installation.",
      "title2": "Native",
      "body2": "Build native mobile apps with strategies from Cordova, Ionic, or NativeScript.",
      "title3": "Desktop",
      "body3": "Create desktop-installed apps across Mac, Windows, and Linux using the same Angular methods you've learned for the web plus the ability to access native OS APIs."
    },
    {
      "title": "Speed and Performance",
      "title1": "Code Generation",
      "body1": "Angular turns your templates into code that's highly optimized for today's JavaScript virtual machines, giving you all the benefits of hand-written code with the productivity of a framework.",
      "title2": "Universal",
      "body2": "Serve the first view of your application on Node.js®, .NET, PHP, and other servers for near-instant rendering in just HTML and CSS. Also paves the way for sites that optimize for SEO.",
      "title3": "Code Splitting",
      "body3": "Angular apps load quickly with the new Component Router, which delivers automatic code-splitting so users only load code required to render the view they request."
    },
    {
      "title": "Productivity",
      "title1": "Templates",
      "body1": "Quickly create UI views with simple and powerful template syntax.",
      "title2": "Angular CLI",
      "body2": "Command line tools: start building fast, add components and tests, then instantly deploy.",
      "title3": "IDEs",
      "body3": "Get intelligent code completion, instant errors, and other feedback in popular editors and IDEs."
    },
    {
      "title": "Full Development Story",
      "title1": "Testing",
      "body1": "With Karma for unit tests, you can know if you've broken things every time you save. And Protractor makes your scenario tests run faster and in a stable manner.",
      "title2": "Animation",
      "body2": "Create high-performance, complex choreographies and animation timelines with very little code through Angular's intuitive API.",
      "title3": "Accessibility",
      "body3": "Create accessible applications with ARIA-enabled components, developer guides, and built-in a11y test infrastructure."
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
