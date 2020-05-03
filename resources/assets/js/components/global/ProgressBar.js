module.exports = {
	template: `
	<div>
		<div class="bg-indigo-900 text-center py-4 lg:px-4">
			<div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
				<span class="text-lg font-semibold mx-2 text-left flex-auto">Benefietconcert Boh Foi Toch en de Cry Me A River Band opnieuw uitgesteld. Tickets blijven geldig.</span>
			</div>
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
