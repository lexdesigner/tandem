<template>
	<div class="timer-box">
		<div class="timer">
			<ul class="timer-values">
				<li>
					<span class="timer-value">{{ days }}</span>
					<span class="timer-bottom"> дней</span>
				</li>
				<li>
					<span class="timer-value">{{ hours }}</span>
					<span class="timer-bottom">часов</span>
				</li>
				<li>
					<span class="timer-value">{{ minutes }}</span>
					<span class="timer-bottom">минут</span>
				</li>
				<li>
					<span class="timer-value">{{ seconds }}</span>
					<span class="timer-bottom">секунд</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			deadline: "end-month",
			total: 0
		};
	},
	methods: {
		getTimeRemaining() {
			this.total = Date.parse(new Date(this.deadline)) - Date.parse(new Date());
			this.seconds = this.addZero(Math.floor((this.total / 1000) % 60));
			this.minutes = this.addZero(Math.floor((this.total / 1000 / 60) % 60));
			this.hours = this.addZero(
				Math.floor((this.total / (1000 * 60 * 60)) % 24)
			);
			this.days = this.addZero(Math.floor(this.total / (1000 * 60 * 60 * 24)));
		},
		addZero(num) {
			return String(num).length > 1 ? num : `0${num}`;
		},
		initClock() {
			let timeinterval = setInterval(() => {
				this.getTimeRemaining();
				if (this.total <= 0) {
					clearInterval(timeinterval);
				}
			}, 1000);
		}
	},
	created() {
		if (this.deadline === "end-month") {
			const date = new Date();
			const endMonth = date.getMonth() + 2;
			this.deadline = `2021/${endMonth}/01`;
		}

		this.initClock();
	}
};
</script>

<style lang="sass">
.timer-values
	display: flex
	list-style-type: none
	justify-content: center
	li
		text-align: center
		margin: 0 10px
		position: relative
		&:not(:last-child)::after
			content: ':'
			position: absolute
			right: -15px
			top: 0
			font-size: 40px
			line-height: 1.2
			font-weight: bold
.timer-value
	font-weight: bold
	font-size: 48px
	display: block
	line-height: 1
</style>
