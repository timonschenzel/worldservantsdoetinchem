module.exports = {'app-layout': `<div>
	<section class="hero is-primary is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">
					<slot name="title">{{ title }}</slot>
				</h1>
				<h2 class="subtitle">
					<slot name="slogan">{{ slogan }}</slot>
				</h2>
			</div>
		</div>
	</section>

	<div class="container">

		<slot name="nav">
			<n-nav :items="items"></n-nav>
		</slot>

		<slot></slot>

		<footer-layout></footer-layout>
	</div>
</div>`,'footer-layout': `<footer class="footer">
	<div class="container">
		<div class="content has-text-centered">
			<p>
				<strong>World Servants Doetinchem</strong>
			</p>
		</div>
	</div>
</footer>`,'homepage-layout': `<div>
	<section class="hero is-primary">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">
					<slot name="title">{{ title || 'Default title' }}</slot>
				</h1>
				<h2 class="subtitle">
					<slot name="slogan">{{ slogan || 'Default slogan' }}</slot>
				</h2>
			</div>
		</div>
	</section>

	<div class="container">

		<slot name="nav">
			<n-nav :items="items"></n-nav>
		</slot>

		<slot></slot>
		
		<footer-layout></footer-layout>
	</div>
</div>`};