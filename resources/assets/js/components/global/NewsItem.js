module.exports = {
	template: `
		<div>
			<div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
				<div class="p-8 text-3xl font-bold text-center border-b-4">{{ item.title }}</div>
				<ul class="w-full text-center text-sm">
					<li class="border-b py-4"><img class="m-auto" :src="'http://www.worldservantsdoetinchem.nl/images/news/' + item.images[0].filename" style="height: 200px;"></li>
					<li class="border-b py-4"><i class="far fa-calendar"></i> {{ day }}</li>
				</ul>
			</div>
			<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
				<div class="flex items-center justify-center">
					<div v-html="shortText" class="w-full flex"></div>
				</div>
				<div class="flex items-center justify-center">
					<a :href="'/nieuws/' + item.uri" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Lees meer</a>
				</div>
			</div>
		</div>
	`,
	
	props: ['item'],
	
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
		
		shortText() {
			return this.item.message.substring(0, 190) + '...';
		}
	}
};
