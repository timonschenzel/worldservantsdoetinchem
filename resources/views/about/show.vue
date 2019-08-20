<app-layout>

	<template v-slot:hero>
		<div class="pt-32">
		
			<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
				<!--Right Col-->
				<div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
					<h1 class="my-4 text-5xl font-bold leading-tight">World Servants Doetinchem</h1>
					<p class="leading-normal text-2xl mb-8">Op werkvakantie naar Ecuador in 2020</p>
				</div>
			</div>
		
		</div>
	</template>

	<heading>{{page.title}}</heading>

	<div class="flex flex-wrap mb-4">
		<div class="person m-2" style="flex-grow: 1; min-width: 220px; max-width: 272px; background-color: #4bcfd2;" v-for="person in persons">
			<person :person="person"></person>
		</div>
	</div>
</app-layout>
