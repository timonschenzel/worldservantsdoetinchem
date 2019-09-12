module.exports = `<app-layout>

	<template v-slot:hero>
		<div class="pt-32">
		
			<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
				<!--Right Col-->
				<div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
					<h1 class="my-4 text-5xl font-bold leading-tight">World Servants Doetinchem</h1>
					<p class="w-full leading-normal text-2xl mb-8">Op werkvakantie naar Ecuador in 2020</p>
				</div>
			</div>
		
		</div>
	</template>

	<n-heading>{{newsItem.title}}</n-heading>

	<div class="page-content" v-html="newsItem.message"></div>
</app-layout>`;