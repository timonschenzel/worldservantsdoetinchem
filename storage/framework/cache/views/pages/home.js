module.exports = `<homepage-layout>
	<template v-slot:hero>
		<div class="mb-8 md:mb-0 pt-32">
		
			<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
				<!--Left Col-->
				<div class="w-full md:w-2/5 py-6 text-center flex justify-center">
					<img src="images/worldservants-logo-doetinchem.png">
				</div>

				<!--Right Col-->
				<div class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
					<h1 class="my-4 text-5xl font-bold leading-tight">World Servants Doetinchem</h1>
					<p class="w-full leading-normal text-2xl mb-8">Op werkvakantie naar Ecuador in 2020</p>
				</div>
			</div>
		
		</div>
	</template>

	<template v-slot:main-information>
		<section class="bg-white border-b py-8">
			<div class="container max-w-5xl mx-auto m-8">
				<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Ecuador 2020</h1>
				<div class="w-full mb-4">	
					<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
				</div>
			
				<div class="flex flex-wrap">
					<div class="w-full sm:w-1/2 p-6 mt-16">
						<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Bouwen aan verandering in Ecuador</h3>
						<p class="text-gray-600 mb-8">
							Onder het motto ‘Bouwen aan verandering’ gaat een groep uit Doetinchem in de zomer van 2020 op werkvakantie in Ecuador. De groep gaat bouwen voor en met een coöperatie van cacaoboeren.<br />
							De diaconie en gemeenteleden van de Protestantse Gemeente Doetinchem ondersteunt dit ontwikkelingsproject van de organisatie World Servants.
						</p>
						
					</div>
					<div class="w-full sm:w-1/2 p-6 flex justify-center">
						<img src="https://ak7.picdn.net/shutterstock/videos/10701047/thumb/1.jpg" class="m-auto md:m-0" style="height: 250px;">
					</div>
				</div>
				
				
				<div class="flex flex-wrap flex-col-reverse sm:flex-row">	
					<div class="w-full sm:w-1/2">
						<img src="/images/ecuador.jpg" class="m-auto md:m-0 md:pl-32" style="height: 250px;">
					</div>
					<div class="w-full sm:w-1/2 p-6 mt-16">
						<div class="align-middle">
							<h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">Donaties</h3>
							<p class="text-gray-600 mb-8">
								Donaties om het project te steunen zijn van harte welkom.
								Dit kan op rekeningnummer NL02 RABO 0337 3709 66 t.n.v. PGD World Servants.
								Giften aan PDG World Servants dragen het keurmerk van ANBI en CBF en zijn aftrekbaar voor de inkomstenbelasting.<br /><br />
							</p>
						</div>
					</div>
		
				</div>
			</div>
		</section>
	</template>

	<template v-slot:previous-projects>
		<section class="bg-white py-8">
			
			<div class="container mx-auto flex flex-wrap pt-4 pb-12">
			
				<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Voorgaande projecten</h1>
				<div class="w-full mb-4">	
					<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
				</div>
			
				<div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
					<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
						<a href="http://www.doemyanmar.nl" target="_blank" class="flex flex-wrap no-underline hover:no-underline">
							<div class="flex p-6 w-full">
								<img src="http://www.doemyanmar.nl/images/doemyanmar-logo.png" style="width: 50px;" />
								<h2 class="px-6 w-full my-2 text-3xl font-bold leading-tight text-gray-800">DoeMyanmar 2017</h2>
							</div>
							<div class="w-full font-bold text-xl text-gray-800 px-6">Gebouwd aan verandering in Pakokku</div>
							<p class="text-gray-800 text-base px-6 mb-5">
								Onder het motto ‘Bouwen aan verandering’ heeft een groep uit Doetinchem tijdens een werkvakantie gebouwd aan een gemeenschapshuis en enkele huisjes voor mensen met lepra. Een ontwikkelingsproject van World Servants. 
							</p>
						</a>
					</div>
					<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
						<div class="flex items-center justify-start">
							<a href="http://www.doemyanmar.nl" target="_blank" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg inline-block">Meer informatie</a>
						</div>
					</div>
				</div>
				
				<div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
					<div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
						<a href="http://www.doemalawi.nl" target="_blank" class="flex flex-wrap no-underline hover:no-underline">
							<div class="flex p-6 w-full">
								<img src="http://www.doemalawi.nl/images/logo.png" style="width: 50px;" />
								<h2 class="px-6 w-full my-2 text-3xl font-bold leading-tight text-gray-800">DoeMalawi 2013</h2>
							</div>
							<div class="w-full font-bold text-xl text-gray-800 px-6">Gebouwd aan verandering in Echikangeni</div>
							<p class="text-gray-800 text-base px-6 mb-5">
								Onder het motto ‘Bouwen aan jezelf door te bouwen voor een ander’ heeft een groep uit Doetinchem tijdens een werkvakantie klaslokalen, een lerarenwoning en een girls changingsroom gebouwd. Een ontwikkelingproject van World Servants. 
							</p>
						</a>
					</div>
					<div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
						<div class="flex items-center justify-start">
							<a href="http://www.doemalawi.nl" target="_blank" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg inline-block">Meer informatie</a>
						</div>
					</div>
				</div>
				
			</div>
		
		</section>
	</template>

	<template v-slot:actions>
		<section class="bg-gray-100 py-8">
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
	</template>
</homepage-layout>`;