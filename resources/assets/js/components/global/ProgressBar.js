module.exports = {
	template: `
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
	`,

	data() {
		return {
			current: 4000,
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
			return (this.current / this.target) * 100;
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