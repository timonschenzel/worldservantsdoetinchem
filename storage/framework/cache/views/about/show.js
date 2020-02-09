module.exports = `<app-layout>

	<template v-slot:hero>
		<div class="pt-48">
		
			<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
				<!--Right Col-->
				<div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
					<h1 class="my-4 text-5xl font-bold leading-tight">World Servants Doetinchem</h1>
					<p class="w-full leading-normal text-2xl mb-8">Op werkvakantie naar Ecuador in 2020</p>
				</div>
			</div>
		
		</div>
	</template>

	<n-heading>{{page.title}}</n-heading>

	<div class="flex flex-wrap mb-4">
		<div v-for="person in persons" class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-1 p-1">
			<n-person :person="person"></n-person>
		</div>
	</div>
</app-layout>`;