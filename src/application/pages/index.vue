<template>
    <div>
        <div class="h-[95vh] flex flex-col">
            <Navbar />
            <CTA class="flex-grow" />
        </div>
        <client-only>
            <PieChart />
        </client-only>
    </div>
</template>
