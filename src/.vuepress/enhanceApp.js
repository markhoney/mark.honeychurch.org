import VueQriously from 'vue-qriously';
//import VueHead from 'vue-head';
//import Meta from 'vue-meta';
import VueGoogleCharts from 'vue-google-charts';

export default ({
	Vue,
	options,
	router,
	siteData
}) => {
	//Vue.use(Meta);
	if (typeof process === 'undefined') { // process is undefined in a browser
		//Vue.use(VueHead);
		Vue.use(VueQriously);
		Vue.use(VueGoogleCharts);
	}
};
