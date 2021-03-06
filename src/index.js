import { COMPONENTS } from './components';

const install = function (Vue, options = {}) {
  COMPONENTS.forEach(c => {
    Vue.component(c.name, c);
  });
};

// Auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(Vue);
}

const lvUI = {
  version: require('./../package.json').version
};

export default Object.assign(lvUI, { install });
