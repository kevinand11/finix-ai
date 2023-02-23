<template>
	<div class="flex flex-col gap-4 p-8 md:p-16 items-center">
		<div class="flex justify-between items-center gap-4 w-full">
			<img src="@/assets/images/logo.svg" class="h-[35px] md:h-[50px]" alt="FINIX AI">
			<div class="flex flex-col gap-2">
				<span class="text-lg font-bold">Get in touch</span>
				<div class="flex gap-2 items-center">
					<a href="https://twitter.com/finixai" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/images/twitter.svg" class="h-[20px] md:h-[30px]" alt="Twitter">
					</a>
					<a href="https://www.instagram.com/finixai" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/images/instagram.svg" class="h-[20px] md:h-[30px]" alt="Instagram">
					</a>
					<a href="https://www.linkedin.com/company/finixai/" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/images/linkedin.svg" class="h-[20px] md:h-[30px]" alt="LinkedIn">
					</a>
				</div>
			</div>
		</div>
		<span class="font-bold">&copy; Copyright, {{ new Date().getFullYear() }}.</span>
	</div>
</template>