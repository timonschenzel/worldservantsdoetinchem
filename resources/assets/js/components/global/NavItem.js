module.exports = {
	template: `
		<li :class="{'is-active': isActive }"><a :href="href">{{text}}</a></li>
	`,
	
	props: ['text', 'href'],

	computed: {
		isActive() {
			return this.href == this.$root.activePageUri;
		}
	}
};
