import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

export default bootstrap;
