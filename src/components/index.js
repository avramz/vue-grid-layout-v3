import GridItem from './grid-item.vue';
import GridLayout from './grid-layout.vue';

export default function install(app) {
  if (install.installed) return;
  install.installed = true;
  app.component('GridLayout', GridLayout);
  app.component('GridItem', GridItem);
}

export { GridLayout, GridItem };

try {
  let GlobalVue;
  if (window) {
    GlobalVue = window?.Vue;
  } else if (global) {
    GlobalVue = global?.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use({ install });
  }
} catch (e) {
  //
}
