<template>
	<div class="flex p-8 lg:px-16 flex-col gap-28">
		<div class="flex gap-8 flex-col md:flex-row items-center">
			<div class="flex-1 flex justify-center items-center">
				<img src="@/assets/images/features.svg" alt="" class="w-full">
			</div>
			<div class="flex-1 flex flex-col gap-8">
				<h3 class="text-3xl font-bold">Reasons to pick Finix AI!</h3>
				<div v-for="data in [
					{ label: 'Ease of use', text: 'We embed new technologies in our app that were carefully evaluated according to the criteria of cost and ease of use.' },
					{ label: 'Mining', text: 'With the mining feature users can earn more while they aren’t actively playing. This feature is similar to staking.' },
					{ label: 'AI Technology', text: 'With AI technology, you are never stuck at any point in the game be it that you’re actively playing or unable to play due to a tight schedule.' }
				]" :key="data.label" class="flex gap-4 flex-col">
					<h4 class="text-xl font-medium flex gap-2 items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="1em" height="1em"
							fill="currentColor">
							<path
								d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z" />
						</svg>
						<span>{{ data.label }}</span>
					</h4>
					<p class="text-gray">{{ data.text }}</p>
				</div>
			</div>
		</div>
		<div class="flex gap-8 flex-col md:flex-row-reverse items-center">
			<div class="flex-1 flex justify-center items-center">
				<img src="@/assets/images/features-2.svg" alt="" class="w-full">
			</div>
			<div class="flex-1 flex flex-col gap-4">
				<h3 class="text-3xl font-bold">Finix AI</h3>
				<p class="text-gray">
					Finix AI is a universe filled with fierce, cute and collectible creatures called Finixs.
					In Finix AI players have complete ownership of their digital assets and can buy, sell, and trade them
					just like physical trading cards and collectibles.
					Finix AI would also include a mining feature where you can get more rewards similar to staking<br><br>
					NFT would be integrated later where pets would have their own NFTs and players can trade them on the
					marketplace.
				</p>
			</div>
		</div>
		<div class="flex gap-8 flex-col md:flex-row items-center">
			<div class="flex-1 flex justify-center items-center">
				<img src="@/assets/images/features-3.svg" alt="" class="w-full md:w-[75%]">
			</div>
			<div class="flex-1 flex flex-col gap-8 items-start">
				<h3 class="text-3xl font-bold">Benefits for everyone</h3>
				<p class="text-gray">
					First off, Finix AI operates on the Binance blockchain and it’s been ensured that there is ease of use
					as well as BUSD rewards for holders of the coins in the early stages.
					With the integration of artificial intelligence users can have AI play games for them while they’re
					offline so they still progress.
					The mining feature helps users stake their coins to mine out diamonds that can be converted to BNB.
				</p>
				<a href="/FINIX_LITE_PAPER.pdf">
					<button>Whitepaper</button>
				</a>
			</div>
		</div>
		<img src="@/assets/images/features-4.png" class="w-full" alt="">
	</div>
</template>