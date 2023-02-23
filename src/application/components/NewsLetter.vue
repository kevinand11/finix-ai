<template>
	<div class="flex flex-col gap-8 md:flex-row md:items-center p-8 md:p-16">
		<div class="flex flex-col gap-1 flex-1">
			<h4 class="">Subscribe</h4>
			<h3 class="text-lg font-bold">Be in the know about everything crypto</h3>
			<p class="text-gray">Subscribe to our newsletter to stay informed</p>
		</div>
		<form @submit.prevent="submit" class="flex flex-1">
			<input v-model="email" type="email" class="rounded-l-lg border border-gray-300 px-4 flex-1"
				placeholder="Enter your email address" />
			<button class="rounded-l-none rounded-r-lg bg-gradient-to-r from-darkGold to-gold" type="submit">
				Subscribe
			</button>
		</form>
	</div>
</template>

<script lang="ts" setup>
const email = ref('')
const submit = async () => {
	console.log(email.value)
	email.value = ''
}
</script>