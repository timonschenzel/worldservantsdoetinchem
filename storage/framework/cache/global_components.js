module.exports = {'n-hello': {
	template: `
		<div style="color: green;">Hello</div>
	`,
},'n-nav': {

	props: ['items'],

	template: `
		<div class="tabs">
			<ul>
				<n-nav-item href="/" text="Homepage"></n-nav-item>
		    	<n-nav-item v-for="item in items" :href="item.uri" :text="item.menu_name" :key="item.uri"></n-nav-item>
		    </ul>
		</div>
	`,
},'n-nav-item': {
	template: `
		<li :class="{'is-active': isActive }"><a :href="parsedHref">{{text}}</a></li>
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
},'n-person': {
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
},'n-test': {
	template: `
		<div style="color: green;"><slot></slot></div>
	`,

	props: [
		'text',
	]
}};