module.exports = {'app-layout': `<div>
	<!--Nav-->
	<slot name="nav">
		<n-nav :items="items"></n-nav>
	</slot>
    
    <!--Hero-->
	<slot name="hero"></slot>
    
	<section class="bg-white py-8">
		<div class="container max-w-5xl mx-auto px-8 text-black">
			<slot></slot>
		</div>
	</section>
	

    <!-- Change the colour #f8fafc to match the previous section colour -->
    <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                <g class="wave" fill="#ffffff">
                    <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                </g>
                <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                    <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                        <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                        <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                        <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
    
    <section class="container mx-auto text-center py-6 mb-12">
    
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Doneren</h1>
        <div class="w-full mb-4">	
            <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
    
        <h3 class="my-4 text-3xl leading-tight">Bouw mee aan verandering voor cacaoboeren in Ecuador,<br />steun World Servants Doetinchem</h3>	
    
        <a class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg inline-block" href="/doneren">Steun ons</a>
            
    </section>

	<footer-layout></footer-layout>
</div>`,'footer-layout': `<footer class="bg-white">
	<div class="container mx-auto px-8 lg:flex">

		<div class="flex-1 flex-col md:flex-row py-6">
			<div class="lg:flex lg:flex-1">
				<div class="flex-1 mb-6">
				
					<a class="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/"> 
						<img src="/images/worldservants-logo-doetinchem.png" class="-ml-8" style="height: 120px;" />
					</a>
				</div>
			
			
				<div class="flex-1">
					<p class="uppercase text-gray-500 md:mb-6">Project</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a href="/ecuador" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Ecuador</a>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a href="/cacao" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Cacao</a>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a href="/fairtrade" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Fairtrade</a>
						</li>
					</ul>
				</div>
				<div class="flex-1">
					<p class="uppercase text-gray-500 md:mb-6">World Servants</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a href="https://www.worldservants.nl" target="_blank" class="no-underline hover:underline text-gray-800 hover:text-orange-500">World Servants</a>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a href="https://www.worldservants.nl/doetinchem" target="_blank" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Actieplatform</a>
						</li>
					</ul>
				</div>
				<div class="flex-1">
					<p class="uppercase text-gray-500 md:mb-6">Social</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a href="https://www.facebook.com/WorldServantsDoetinchem/" target="_blank" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Facebook</a>
						</li>
					</ul>
				</div>
				<div class="flex-1">
					<p class="uppercase text-gray-500 md:mb-6">Over ons</p>
					<ul class="list-reset mb-6">
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a href="/wie-wij-zijn" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Wie wij zijn</a>
						</li>
						<li class="mt-2 inline-block mr-2 md:block md:mr-0">
							<a href="/contact" class="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="text-black mt-4 lg:mt-24 uppercase text-gray-500">
				&copy; World Sevants Doetinchem
			</div>
		</div>

		<div class="lg:flex py-6">
			<div>
				<ul class="list-reset mb-6">
					<li class="mt-2 inline-block mr-2 md:block md:mr-0">
						<a href="http://www.anbi.nl/" target="_blank" title="ANBI - Algemeen Nut Beogende Instelling" class="no-underline hover:underline text-gray-800 hover:text-orange-500"><img src="/images/anbi-logo.png" class="h-16 lg:h-12 -mb-2 lg:mb-0"></a>
					</li>
					<li class="mt-2 inline-block mr-2 md:block md:mr-0">
						<a href="http://www.cbf.nl/" target="_blank" title="CBF - Keur voor goede doelen" class="no-underline hover:underline text-gray-800 hover:text-orange-500"><img src="/images/cbf-logo.png" class="h-20 lg:h-20 -mb-4 lg:mb-0"></a>
					</li>
					<li class="mt-2 inline-block mr-2 md:block md:mr-0">
						<a href="http://www.worldservants.nl/" target="_blank" title="World Servants" class="no-underline hover:underline text-gray-800 hover:text-orange-500"><img src="/images/world-servants-logo.png" class="h-16 lg:h-16 -mb-2 lg:mb-0 lg:ml-2"></a>
					</li>
					<li class="mt-2 inline-block mr-2 md:block md:mr-0">
						<a href="http://www.pgdoetinchem.nl/" target="_blank" title="Protestantse Gemeente Doetinchem" class="no-underline hover:underline text-gray-800 hover:text-orange-500"><img src="/images/pgd-logo.png" class="h-16 lg:h-16 -mb-2 lg:mb-0 lg:mt-3"></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>`,'homepage-layout': `<div>
	<!--Nav-->
	<slot name="nav">
		<n-nav :items="items"></n-nav>
	</slot>
    
    <!--Hero-->
	<slot name="hero"></slot>
    
    <div class="relative -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
        <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
        <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
        <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
        </g>
        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
        <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
        </g>
        </g>
        </svg>
    </div>
    
	<slot name="main-information"></slot>

	<slot name="previous-projects"></slot>
    
	<slot name="actions"></slot>

    <!-- Change the colour #f8fafc to match the previous section colour -->
    <svg class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                <g class="wave" fill="#f8fafc">
                    <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                </g>
                <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                    <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                        <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                        <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                        <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
    
    <section class="container mx-auto text-center py-6 mb-12">
    
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Doneren</h1>
        <div class="w-full mb-4">	
            <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 class="my-4 text-3xl leading-tight">Bouw mee aan verandering voor cacaoboeren in Ecuador,<br />steun World Servants Doetinchem</h3>
    
        <a class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg inline-block" href="/doneren">Steun ons</a>
        
    </section>

	<footer-layout></footer-layout>
</div>`};