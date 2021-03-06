module.exports = `<app-layout>

	<template v-slot:hero>
		<div class="pt-48">
		
			<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
				<!--Right Col-->
				<div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
					<h1 class="my-4 text-5xl font-bold leading-tight">World Servants Doetinchem</h1>
					<p class="w-full leading-normal text-2xl mb-8">Op werkvakantie naar Ecuador in 2021</p>
				</div>
			</div>
		
		</div>
	</template>

	<n-heading>{{caseItem.title}}</n-heading>

	<div class="page-content" v-html="caseItem.content"></div>
	
	<div class="w-full mb-8"><div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div></div>
	<div class="flex flex-wrap">
		<img
			v-for="image in caseItem.case.images"
			:src="'http://www.worldservantsdoetinchem.nl/images/cases/' + image.filename"
			style="width: 300px;"
			class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white p-2"
		/>
	</div>
</app-layout>`;