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
				<n-nav-item href="/foo" text="Foo"></n-nav-item>
				<n-nav-item href="/bar" text="Bar"></n-nav-item>
		    	<n-nav-item v-for="item in items" :href="item.uri" :text="item.menu_name" :key="item.uri"></n-nav-item>
		    </ul>
		</div>
	`,
},'n-nav-item': {
	template: `
		<li :class="{'is-active': isActive }"><a :href="href">{{text}}</a></li>
	`,
	
	props: ['text', 'href'],

	computed: {
		isActive() {
			return this.href == this.$root.activePageUri;
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