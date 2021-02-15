import VueQriously from 'vue-qriously';
//import Buefy from 'buefy';
//import 'buefy/dist/buefy.css';
export default ({
	Vue,
	/*options,
	router,
	siteData*/
}) => {
	//Vue.use(Buefy);
	if (typeof process === 'undefined') { // process is undefined in a browser
		Vue.use(VueQriously);
	}
};
