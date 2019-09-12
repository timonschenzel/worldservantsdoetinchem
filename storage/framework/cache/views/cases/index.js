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

    <section>
        <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">

            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Acties</h1>
            <div class="w-full mb-4">	
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            
            <div class="flex flex-wrap flex-col sm:flex-row pt-12 my-12 sm:my-4">
                
                <div v-for="item in cases" class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-1">
                    <n-case :item="item"></n-case>
                </div>
                
            </div>
            
        </div>

    </section>
</app-layout>`;