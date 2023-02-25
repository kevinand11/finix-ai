<template>
	<div>
		<div class="h-[95vh] flex flex-col">
			<Navbar />
			<CTA class="flex-grow" />
		</div>
		<client-only>
			<PieChart class="bg-darker" />
		</client-only>
		<Features />
		<NewsLetter class="bg-darker" />
		<div class="h-[80px]" />
		<Footer class="bg-darker" />
	</div>
</template>