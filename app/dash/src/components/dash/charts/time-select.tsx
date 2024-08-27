import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@hanzo/ui/primitives'

import { useStore } from '@/stores'
import moment from 'moment-timezone'
import { useEffect, useState } from 'react'

export default (props: any) => {
    const { disabled, value, period, setPeriod } = props
    const { credentialStore, dashboardStore } = useStore()
    
    const queryFields = ['deposits', 'sales', 'refunds']
    
    useEffect(() => { setPeriod(value) }, [])
    useEffect(() => {
        timeSelectOnChange(period, queryFields)
    }, [period])

    const timeSelectOnChange = (period: any, queryFields: string[]) => {
        if (period === 'alltime') {
            dashboardStore.setDate(queryFields, period, {
                date: credentialStore.org.createdAt,
                period: {
                    interval: 'day',
                    amount: moment().diff(moment(credentialStore.org.createdAt), 'days'),
                },
            })
        } else {
            dashboardStore.setDate(queryFields, period)
        }
    }

    return (
        <Select
            value={period}
            onValueChange={setPeriod}
            disabled={disabled}
        >
            <SelectTrigger>
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='day'>Last Day</SelectItem>
                <SelectItem value='7days'>Last 7 Days</SelectItem>
                <SelectItem value='month'>This Month</SelectItem>
                <SelectItem value='30days'>Last 30 Days</SelectItem>
                <SelectItem value='alltime'>All Time</SelectItem>
            </SelectContent>
        </Select>
    )
}
