<template>
	<div class="ui secondary  menu">
	<router-link class="item" :to="{ path: '/' }">
		Home
	</router-link>
	<router-link class="item" :to="{ path: '/aboutus' }">
		About Us
	</router-link>

	</div>
</template>

<script>
	export default {

		name: 'TopMenu',

		data () {
			return {

			};
		}
	};
</script>

<style lang="less" scoped>
	.menu{
		a{
			&.item{
				color: white;
			}
		}
	}
</style>