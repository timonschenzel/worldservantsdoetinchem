module.exports = {
	template: `
		<div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-1">
			<div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
				<div class="p-8 text-xl font-bold text-center border-b-4">{{ item.title }}</div>
				<ul class="w-full text-center text-sm">
					<li class="border-b py-4"><img class="m-auto" :src="'http://www.worldservantsdoetinchem.nl/images/cases/' + item.images[0].filename" style="height: 200px;"></li>
					<li class="border-b py-4">
						<i class="far fa-calendar"></i> {{ day }} <i class="far fa-clock"></i> {{ time }}
					</li>
					<li v-if="item.location != 'Locatie'" class="border-b py-4"><i class="fa fa-map-marker-alt"></i> {{ item.location }}</li>
					<li v-else-if="item.pass" class="border-b py-4"><i class="fa fa-repeat"></i> Doorlopende actie</li>
					<li v-else class="border-b py-4">&nbsp;</li>
				</ul>
			</div>
			<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
				<div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">&euro;{{ item.yield }} <span class="text-base">{{ yieldText }}</span></div>
				<div class="flex items-center justify-center">
					<a :href="'/acties/' + item.uri" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Meer informatie</a>
				</div>
			</div>
		</div>
	`,
	
	props: ['item', 'completed'],
	
	ready()
	{
		
	},

	computed: {
		day()
		{
			const moment = require('moment');
			let date = new Date(this.item.date).toISOString();
			let day = moment(date).format('D-M-Y');
			let time = moment(date).format('H:mm');
			return day;
		},
		
		time()
		{
			if (this.item.pass == 'true') {
				return '';
			}
			
			const moment = require('moment');
			let date = new Date(this.item.date).toISOString();
			let day = moment(date).format('D-M-Y');
			let time = moment(date).format('H:mm');
			return time;
		},
		
		yieldText()
		{
			if (this.completed) {
				return 'opbrengst';
			}
			
			return 'opbrengst tot nu toe';
		}
	}
};
