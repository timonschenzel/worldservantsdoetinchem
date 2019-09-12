module.exports = {

	props: ['items'],

	template: `
		<div ref="header" class="fixed w-full z-30 top-0 text-white" :class="headerStateClassList.join(' ')">
			<progress-bar></progress-bar>

			<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 pb-6">
					
				<div class="pl-4 flex items-center">
					<a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
						<img src="/images/worldservants-logo-doetinchem.png" style="height: 50px;" />
					</a>
				</div>
		
				<div class="lg:hidden pr-4">
					<button id="nav-toggle" class="flex items-center px-3 py-4 border rounded text-green-light border-green-light appearance-none focus:outline-none">
						<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>
		
				<div :class="navContentStateClassList.join(' ')" class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
					<ul class="list-reset lg:flex justify-end flex-1 items-center">

						<nav-item href="/" text="Home"></nav-item>

						<nav-item v-for="item in items" :href="item.uri" :text="item.menu_name" :key="item.uri"></nav-item>

					</ul>
					<a id="navAction" href="/doneren" :class="navActionStateClassList.join(' ')" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 inline-block">Doneren</a>
				</div>
			</div>
			
			<hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
		</div>
	`,

	data()
	{
		return {
			headerStateClassList: [],
			navActionStateClassList: [],
			navContentStateClassList: ['hidden'],
		}
	},

	created()
	{
		let scrollpos = window.scrollY;

		let vm = this;
		document.addEventListener('scroll', function() {
			vm.headerStateClassList = [];
			vm.navActionStateClassList = [];

			/*Apply classes for slide in bar*/
			scrollpos = window.scrollY;
			if(scrollpos > 10){
				vm.headerStateClassList.push('bg-white');
				vm.navActionStateClassList.push('gradient');
				vm.navActionStateClassList.push('text-white');

				vm.headerStateClassList.push('shadow');
				vm.navContentStateClassList.push('bg-white');
			}
			else {
				vm.navActionStateClassList.push('bg-white');
				vm.navActionStateClassList.push('text-gray-800');
				
				vm.navContentStateClassList.push('bg-gray-100');
			}
		});
		
		
		/*Toggle dropdown list*/
		var navMenuDiv = document.getElementById("nav-content");
		var navMenu = document.getElementById("nav-toggle");
		
		document.onclick = check;
		function check(e){
			var target = (e && e.target) || (event && event.srcElement);
			
			//Nav Menu
			if (!checkParent(target, navMenuDiv)) {
				// click NOT on the menu
				if (checkParent(target, navMenu)) {
					// click on the link
					if (vm.navContentStateClassList.includes('hidden')) {
						vm.navContentStateClassList = vm.navContentStateClassList.filter(item => item !== 'hidden');
					} else {
						vm.navContentStateClassList.push('hidden');
					}
				} else {
					// click both outside link and outside menu, hide menu
					if (vm.navContentStateClassList.includes('hidden')) {
						vm.navContentStateClassList = vm.navContentStateClassList.filter(item => item !== 'hidden');
					} else {
						vm.navContentStateClassList.push('hidden');
					}
				}
			}
			
		}
		function checkParent(t, elm) {
			while(t.parentNode) {
			if( t == elm ) {return true;}
			t = t.parentNode;
			}
			return false;
		}
	}
};
