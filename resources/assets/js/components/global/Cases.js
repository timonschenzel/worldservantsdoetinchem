module.exports = {
	template: `
		<div>
			<heading v-if="activeCases.length">Lopende acties</heading>
			<div class="flex flex-wrap flex-col sm:flex-row my-12 sm:my-4">
				<case v-for="item in activeCases" :item="item" :completed="false"></case>
			</div>
			
			<heading v-if="passedCases.length" class="pt-8">Afgeronde acties</heading>
			<div class="flex flex-wrap flex-col sm:flex-row my-12 sm:my-4">
				<case v-for="item in passedCases" :item="item" :completed="true"></case>
			</div>
		</div>
	`,
	
	props: ['cases'],
	
	mounted()
	{
		const moment = require('moment');

		this.activeCases = this.cases.filter(item => {
			let date = new Date(item.date).toISOString();
			return moment(date).isAfter() || moment(date).isSame();
		});
		
		this.passedCases = this.cases.filter(item => {
			let date = new Date(item.date).toISOString();
			return moment(date).isBefore();
		});
	},
	
	data()
	{
		return {
			activeCases: [],
			passedCases: [],
		}
	}
};
