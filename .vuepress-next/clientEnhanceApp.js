//import Buefy from 'buefy';
//import 'buefy/dist/buefy.css';
import {defineClientAppEnhance} from '@vuepress/client';
import VueQriously from 'vue-qriously';

export default defineClientAppEnhance(({Vue, app, router, siteData}) => {
	if (typeof process === 'undefined') { // process is undefined in a browser
		Vue.use(VueQriously);
	}
});
