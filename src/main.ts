import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';
import { Components } from "./component-list";


Aurelia
  // .register(RouterConfiguration)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  .register(RouterConfiguration.customize({
    useUrlFragmentHash: false,
    hooks: [
      {
        hook: (url, navigation) => { 
          // Quite a bit hacky, but something like this
          console.log('url', url);
          let components = url.split('@');
          if (url.startsWith('-@') || components < 2) {
            return url; 
          }
          if (navigation.useFullStateInstruction) {
            components = url.split('+');
            components.shift();
            Components.add(...components.map(comp => comp.split('@')[1]));
            return url;
          }
          url = components.shift();
          components = components.map(component => component.replace('@', '').replace('+', ''));
          Components.add(...components);
          console.log('components', Components.list);
          return url;
        },
        options: { type: 'transformFromUrl' },
      }
    ]
  }))
  .app(MyApp)
  .start();
