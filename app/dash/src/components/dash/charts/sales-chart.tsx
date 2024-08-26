import { Card, CardContent, CardHeader, CardTitle } from '@hanzo/ui/primitives'
import { observer } from 'mobx-react'
import { Bar } from 'react-chartjs-2'

import { useStore } from '@/stores'
import options from './config'

const TotalSales = observer((props: any) => {
    const { credentialStore, dashboardStore } = useStore()

    const currency = credentialStore.org ? credentialStore.org.currency : ''

    const {
        chartDates,
        weeklyRevenuePoints,
        chartPeriod,
    } = dashboardStore

    const data = {
        labels: chartDates.slice().map((d: any) => d.format('D MMM')),
        datasets: [
            {
                label: `This ${chartPeriod.interval}`,
                backgroundColor: 'rgba(255, 255, 255)',
                data: weeklyRevenuePoints.slice(),
            },
        ],
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className='font-medium text-xl leading-none text-primary'>Projected Revenue per Day</CardTitle>    
            </CardHeader>
            <CardContent>
                <div className='h-[400px] relative'>
                    <Bar data={data} options={options(currency)} />
                </div>
            </CardContent>
        </Card>
    )
})

export default TotalSales
