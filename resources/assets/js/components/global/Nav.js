module.exports = {

	props: ['items'],

	template: `
		<div class="tabs">
			<ul>
				<nav-item href="/" text="Homepage"></nav-item>
				<nav-item href="/foo" text="Foo"></nav-item>
				<nav-item href="/bar" text="Bar"></nav-item>
		    	<nav-item v-for="item in items" :href="item.uri" :text="item.menu_name" :key="item.uri"></nav-item>
		    </ul>
		</div>
	`,
};
