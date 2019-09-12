module.exports = {
	template: `
		<div>
			<div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
				<div class="p-8 text-3xl font-bold text-center border-b-4">{{ sponsor.title }}</div>
				<ul class="w-full text-center text-sm">
					<li class="border-b py-4"><img class="m-auto" :src="'http://www.worldservantsdoetinchem.nl/images/sponsors/' + sponsor.images[0].filename" style="height: 200px;"></li>
				</ul>
			</div>
			<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
				<div class="flex items-center justify-center">
					<a :href="sponsor.website" target="_blank" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Website</a>
				</div>
			</div>
		</div>
	`,
	
	props: ['sponsor'],
	
	ready()
	{
		
	},
};
