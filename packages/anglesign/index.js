/*
 * @author: fackin
 * @Description: 
 * @Date: 2019-03-25 11:27:58
 * @LastEditTime: 2019-03-25 12:01:28
 */
import Anglesign from './src/anglesign';

Anglesign.install = function (Vue) {
  Vue.component(Anglesign.name, Anglesign);
};

export default Anglesign;
