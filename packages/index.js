/**
 * @author fackin
 * @description
 * @Date 2019-03-13 09:55:50
 * @LastEditTime: 2019-03-13 10:33:32
 */
import VqCol from './col/index';
import VqRow from './row/index';

const components = [
  VqCol,
  VqRow
];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default{
  install,
  VqCol,
  VqRow
}
