<template>
	<div class="flex items-center justify-center p-8">
		<ApexChart width="800" :options="chartOptions" :series="series" />
	</div>
</template>

<script setup lang="ts">
import { ApexOptions } from 'apexcharts'
import ApexChart from 'vue3-apexcharts'

const data = [
	{ label: 'Burn', size: 25, color: '#DE1500' },
	{ label: 'Presale', size: 20, color: '#FDC731' },
	{ label: 'Ecosystem', size: 30, color: '#DE1500' },
	{ label: 'Liquidity', size: 10, color: '#FDC731' },
	{ label: 'Marketing', size: 10, color: '#FDC731' },
	{ label: 'Team', size: 5, color: '#E06F19' }
]

const chartOptions: ApexOptions = {
	chart: {
		width: '100%',
		type: 'pie',
	},
	dataLabels: {
		enabled: false
	},
	legend: {
		fontSize: '24px',
		horizontalAlign: 'center',
		markers: {
			radius: 0,
			width: 24,
			height: 24,
		},
		formatter: (name, options) => name.padEnd(10, ' ')
			+ data[options.seriesIndex].size + '%',
		itemMargin: {
			horizontal: 8,
			vertical: 8
		},
	},
	colors: data.map((item) => item.color),
	labels: data.map((item) => item.label),
	responsive: [{
		breakpoint: 480,
		options: {
			chart: {
				width: '130%'
			},
			legend: {
				fontSize: '18px',
				position: 'bottom',
				markers: {
					width: 18,
					height: 18
				},
			}
		}
	}]
}
const series = data.map((item) => item.size)
</script>

<style>
@media (min-width: theme('screens.md')) {
	.apexcharts-legend-text {
		margin-left: unset !important;
	}
}
</style>