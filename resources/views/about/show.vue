<app-layout>
	<h1>{{page.title}}</h1>

	<div class="flex flex-wrap mb-4">
		<div class="m-2 bg-gray-400" style="flex-grow: 1; min-width: 220px;" v-for="person in persons">
			<person :person="person"></person>
		</div>
	</div>

	<div v-html="page.content"></div>
</app-layout>
