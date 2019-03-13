/**
 * @author fackin
 * Date: 19/03/13
 */
import Col from './src/col';

Col.install = function (Vue) {
  Vue.component(Col.name, Col);
};

export default Col;
