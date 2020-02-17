module.exports = {
	template: `
	<div>
		<div class="bg-indigo-900 text-center py-4 lg:px-4">
			<a href="https://www.nowonlinetickets.nl/Shop/EventDetails/6B9FC83F0CCE4BD43E6980F258E1C872" target="_blank" title="Bestel hier je tickets">
				<div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
					<span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Nieuw</span>
					<span class="text-lg font-semibold mr-2 text-left flex-auto">Benefietconcert op 17 april met Boh Foi Toch en de Cry Me A River Band. Bestel hier je tickets</span>
					<svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
				</div>
			</a>
		</div>
		<div id="thermometer" class="mb-4" style="background: none;">
			<div class="track bg-white">
				<div class="goal" style="display: none;">
					<div class="amount">{{currentAmountFormatted}}</div>
				</div>
				<div class="progress_container bg-white" style="width: 100%;">
					<div class="progress" :style="progressBarStyle">
						<div style="float: right;" class="amount">{{progressPercentage}}%</div>
					</div>
					<div class="amount amount_number text-right" :style="progressBarStyle">{{currentAmountFormatted}}</div>
				</div>
			</div>
		</div>
	</div>
	`,

	data() {
		return {
			current: 49000,
			target: 80000,
		}
	},

	computed: {
		progressBarStyle()
		{
			return `width: ${this.progressPercentage}%;`;
		},

		progressPercentage()
		{
			return parseFloat(((this.current / this.target) * 100).toFixed(1));
		},

		currentAmountFormatted()
		{
			const formatter = new Intl.NumberFormat('nl-NL', {
				style: 'currency',
				currency: 'EUR',
				minimumFractionDigits: 2
			});

			return formatter.format(this.current);
			  
		}
	}
};
