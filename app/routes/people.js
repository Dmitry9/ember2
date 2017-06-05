import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
			{
				id: 1,
				name: 'Edmon',
			},
			{
				id: 2,
				name: 'Zala',
			}
		];
	}
});
