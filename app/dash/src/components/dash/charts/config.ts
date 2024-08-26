// import {
//   blue,
//   indigo,
// } from '@material-ui/core/colors'

import { renderUICurrencyFromJSON } from '@/utils/currency'
import numeral from 'numeral'

// export const data = {
//   labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug'],
//   datasets: [
//     {
//       label: 'This year',
//       backgroundColor: blue[500],
//       data: [18, 5, 19, 27, 29, 19, 20],
//     },
//     {
//       label: 'Last year',
//       backgroundColor: indigo[500],
//       data: [11, 20, 12, 29, 30, 25, 13],
//     },
//   ],
// }

export default (currency: any) => ({
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    legend: { display: false },
    cornerRadius: 20,
    tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
        borderWidth: 1,
        borderColor: '#DDD',
        backgroundColor: '#FFF',
        titleFontColor: '#333',
        bodyFontColor: '#333',
        footerFontColor: '#333',
        callbacks: {
            label: (tooltipItem: any, data: any) => {
                const label = data.datasets[tooltipItem.datasetIndex].label || ''

                return `${label}: ${numeral(renderUICurrencyFromJSON(currency, tooltipItem.yLabel)).format('$0,0.00')}`
            },
        },
    },
    layout: { padding: 0 },
    scales: {
        dataset: {
            barPercentage: 0.5,
            barThickness: 24,
            categoryPercentage: 0.5,
            maxBarThickness: 36,
        },
        xAxes: [
            {
                ticks: {
                    fontColor: '#DDD',
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
            },
        ],
        yAxes: [
            {
                ticks: {
                    fontColor: '#DDD',
                    beginAtZero: true,
                    min: 0,
                    userCallback: (value: any) => numeral(renderUICurrencyFromJSON(currency, value)).format('$0,0.00'),
                },
                gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: '#DDD',
                    drawBorder: false,
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                    zeroLineColor: '#DDD',
                },
            },
        ],
    },
})
