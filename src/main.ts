import { bootstrapApplication } from '@angular/platform-browser';
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/roboto/wght.css';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig).catch(err => console.error(err));
