<template>
	<div id="app-main" class="right_col" role="main">
		<transition name="fade-transform" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>

<script>
	export default {
		name: "appMain"
	}
</script>
