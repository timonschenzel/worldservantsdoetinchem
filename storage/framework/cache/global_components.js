module.exports = {'n-case': {
	template: `
		<div>
			<div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
				<div class="p-8 text-3xl font-bold text-center border-b-4">{{ item.title }}</div>
				<ul class="w-full text-center text-sm">
					<li class="border-b py-4"><img class="m-auto" :src="'http://www.worldservantsdoetinchem.nl/images/cases/' + item.images[0].filename" style="height: 200px;"></li>
					<li class="border-b py-4"><i class="far fa-calendar"></i> {{ day }} <i class="far fa-clock"></i> {{ time }}</li>
					<li v-if="item.location != 'Locatie'" class="border-b py-4"><i class="fa fa-map-marker-alt"></i> {{ item.location }}</li>
				</ul>
			</div>
			<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
				<div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">&euro;{{ item.yield }} <span class="text-base">opbrengst {{ yieldText }}</span></div>
				<div class="flex items-center justify-center">
					<a :href="'/acties/' + item.uri" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Meer informatie</a>
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
		
		time()
		{
			const moment = require('moment');
			let date = new Date(this.item.date).toISOString();
			let day = moment(date).format('D-M-Y');
			let time = moment(date).format('H:mm');
			return time;
		},
		
		yieldText()
		{
			if (this.item.pass == 'false') {
				return '';
			}
			
			return 'tot nu toe';
		}
	}
},'n-heading': {
	template: `
		<div>
			<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"><slot></slot></h1>
			<div class="w-full mb-8"><div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div></div>
		</div>
	`,
},'n-nav': {

	props: ['items'],

	template: `
		<div ref="header" class="fixed w-full z-30 top-0 text-white" :class="headerStateClassList.join(' ')">
			<n-progress-bar></n-progress-bar>

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

						<n-nav-item href="/" text="Home"></n-nav-item>

						<n-nav-item v-for="item in items" :href="item.uri" :text="item.menu_name" :key="item.uri"></n-nav-item>

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
},'n-nav-item': {
	template: `
		<li>
			<a :class="[isActive ? 'is-active' : 'is-inactive']" class="hover:text-gray-800 hover:text-underline" :href="parsedHref">{{text}}</a>
		</li>
	`,
	
	props: ['text', 'href'],

	data()
	{
		let parsedHref = this.href;
		if (! parsedHref.startsWith('/')) {
			parsedHref = `/${parsedHref}`;
		}

		return {
			parsedHref,
		};
	},

	computed: {
		isActive()
		{
			return this.parsedHref == this.$root.activePageUri;
		}
	}
},'n-news-item': {
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
},'n-person': {
	template: `
		<div>
			<div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden">
				<div class="p-8 text-xl font-bold text-center">{{ person.name }}</div>
				<ul class="w-full text-center text-sm">
					<li><img class="w-full rounded-full py-2 px-4" :src="person.photo"></li>
				</ul>
			</div>
			<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden p-6">
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
},'n-progress-bar': {
	template: `
	<div id="thermometer" class="mb-4" style="background: none;">
		<div class="track bg-white">
			<div class="goal" style="display: none;">
				<div class="amount">{{currentAmountFormatted}}</div>
			</div>
			<div class="progress_container bg-white" style="width: 100%;">
				<div class="progress" :style="progressBarStyle">
					<div style="float: right;" class="amount">{{progressPercentage}}%</div>
				</div>
				<div class="amount amount_number text-right" :style="progressBarStyle">{{currentAmountFormatted}}</div>
			</div>
		</div>
	</div>
	`,

	data() {
		return {
			current: 4000,
			target: 80000,
		}
	},

	computed: {
		progressBarStyle()
		{
			return `width: ${this.progressPercentage}%;`;
		},

		progressPercentage()
		{
			return (this.current / this.target) * 100;
		},

		currentAmountFormatted()
		{
			const formatter = new Intl.NumberFormat('nl-NL', {
				style: 'currency',
				currency: 'EUR',
				minimumFractionDigits: 2
			});

			return formatter.format(this.current);
			  
		}
	}
},'n-sponsor': {
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
}};