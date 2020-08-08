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

    <section>
        <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
            <n-cases :cases="cases"></n-cases>
        </div>
    </section>
</app-layout>`;