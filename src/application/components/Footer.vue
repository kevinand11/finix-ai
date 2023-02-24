<template>
	<div class="flex flex-col gap-4 p-8 md:p-16 items-center">
		<div class="flex justify-between items-center gap-4 w-full">
			<img src="@/assets/images/logo.svg" class="h-[35px] md:h-[50px]" alt="FINIX AI">
			<div class="flex flex-col gap-2">
				<span class="text-lg font-bold">Get in touch</span>
				<div class="flex gap-2 items-center">
					<a href="https://twitter.com/finnixai" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/images/twitter.svg" class="h-[20px] md:h-[30px]" alt="Twitter">
					</a>
					<a href=" https://t.me/finixai" target="_blank" rel="noopener noreferrer">
						<img src="@/assets/images/telegram.svg" class="h-[20px] md:h-[30px]" alt="Telegram">
					</a>
				</div>
			</div>
		</div>
		<span class="font-bold">&copy; Copyright, {{ new Date().getFullYear() }}.</span>
	</div>
</template>