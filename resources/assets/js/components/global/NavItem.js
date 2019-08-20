module.exports = {
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
};
