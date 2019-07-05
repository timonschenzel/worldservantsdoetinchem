module.exports = {
	template: `
		<div class="rounded overflow-hidden shadow-lg">
			<img class="w-full" :src="person.photo" :alt="person.name">
			<div class="px-6 py-4">
			<div class="font-bold text-xl mb-2">{{ person.name }}</div>
				<p class="text-gray-700 text-base">
					{{ person.name }}
				</p>
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
