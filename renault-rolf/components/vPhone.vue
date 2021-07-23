<template>
  <span class="phone">
    <a :href="`tel:${phone}`">{{ phoneLocal(phone) }}</a>
  </span>
</template>

<script>
export default {
  methods: {
    phoneLocal(phone) {
      return phone.replace(
        /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
        "$1 ($2) $3-$4-$5"
      );
    }
  },
  computed: {
    phone() {
      return this.$store.getters["info/phone"];
    }
  }
};
</script>

<style lang="sass">
.phone a
	font-weight: bold
	font-size: 18px
	line-height: 1.2
	color: $black
	position: relative
	text-decoration: none
	&::after
		content: ''
		position: absolute
		width: 100%
		height: 1px
		bottom: -2px
		background-color: $accent
		left: 0
	&:hover
		color: $accent
</style>
