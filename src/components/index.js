import GridItem from './grid-item.vue';
import GridLayout from './grid-layout.vue';
// import ResponsiveGridLayout from './ResponsiveGridLayout.vue';

const VueGridLayout = {
  // ResponsiveGridLayout,
  GridLayout,
  GridItem,
};

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.keys(VueGridLayout).forEach(name => {
    Vue.component(name, VueGridLayout[name]);
  });
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default VueGridLayout;
export { GridLayout, GridItem };
