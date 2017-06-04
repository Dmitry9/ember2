import Ember from 'ember';

export default Ember.Controller.extend({
	name: "Dmitry",
	showName: false,
	numClicks: 0,
	actions: {
		toggleName() {
			this.toggleProperty('showName');
		},
		increment() {
			this.set('numClicks', this.get('numClicks') + 1);
		}
	}
});
