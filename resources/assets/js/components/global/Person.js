module.exports = {
	template: `
		<div>
			<div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden">
				<div class="p-8 text-3xl lg:text-base xl:text-xl font-bold text-center pb-0">{{ person.name }}</div>
				<ul class="w-full text-center">
					<li><img class="w-full rounded-full px-6 py-6" :src="person.photo"></li>
				</ul>
			</div>
			<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden p-6 pt-0">
				<div class="flex items-center justify-center">
					<a :href="person.sponsorUrl" target="_blank" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">{{ person.sponsorText }}</a>
				</div>
			</div>
		</div>
	`,
	
	props: ['person'],

	computed: {
		backgroundCss()
		{
			return `background-image: url('${this.person.photo}')`;
		}
	}
};
