// DashboardStore.d.ts

declare module '@/stores/dashboard-store' {
    import { IObservableArray, IObservableValue, IComputedValue } from 'mobx';
    import moment from 'moment-timezone';

    interface Period {
        interval: string;
        amount: number;
    }

    export default class DashboardStore {
        orgStart: IObservableValue<moment.Moment | null>;
        revenueSelect: IObservableValue<string>;
        revenuePeriod: IObservableValue<Period>;
        revenueDate: IObservableValue<moment.Moment>;
        chartSelect: IObservableValue<string>;
        chartPeriod: IObservableValue<Period>;
        chartDate: IObservableValue<moment.Moment>;
        chartDates: IObservableArray<moment.Moment>;
        salesSelect: IObservableValue<string>;
        salesPeriod: IObservableValue<Period>;
        salesDate: IObservableValue<moment.Moment>;
        usersSelect: IObservableValue<string>;
        usersPeriod: IObservableValue<Period>;
        usersDate: IObservableValue<moment.Moment>;
        projectedRevenue: IObservableValue<number>;
        lastProjectedRevenue: IObservableValue<number>;
        projectedRevenueSelect: IObservableValue<string>;
        projectedRevenuePeriod: IObservableValue<Period>;
        projectedRevenueDate: IObservableValue<moment.Moment>;
        deposits: IObservableValue<number>;
        lastDeposits: IObservableValue<number>;
        depositsSelect: IObservableValue<string>;
        depositsPeriod: IObservableValue<Period>;
        depositsDate: IObservableValue<moment.Moment>;
        refunds: IObservableValue<number>;
        lastRefunds: IObservableValue<number>;
        refundsSelect: IObservableValue<string>;
        refundsPeriod: IObservableValue<Period>;
        refundsDate: IObservableValue<moment.Moment>;
        weeklyDates: IObservableArray<moment.Moment>;
        weeklySalesPoints: IObservableArray<number>;
        lastWeeklySalesPoints: IObservableArray<number>;
        weeklyRefundedPoints: IObservableArray<number>;
        lastWeeklyRefundedPoints: IObservableArray<number>;
        weeklyRevenuePoints: IObservableArray<number>;
        lastWeeklyRevenuePoints: IObservableArray<number>;
        weeklyRefundedAmountPoints: IObservableArray<number>;
        lastWeeklyRefundedAmountPoints: IObservableArray<number>;
        weeklySales: IObservableValue<number>;
        lastWeeklySales: IObservableValue<number>;
        weeklyRefunded: IObservableValue<number>;
        lastWeeklyRefunded: IObservableValue<number>;
        weeklyRevenue: IObservableValue<number>;
        lastWeeklyRevenue: IObservableValue<number>;
        weeklyRefundedAmount: IObservableValue<number>;
        lastWeeklyRefundedAmount: IObservableValue<number>;
        weeklyUsers: IObservableValue<number>;
        lastWeeklyUsers: IObservableValue<number>;
        totalSales: IObservableValue<number>;
        totalRefunded: IObservableValue<number>;
        totalRevenue: IObservableValue<number>;
        totalRefundedAmount: IObservableValue<number>;
        totalUsers: IObservableValue<number>;
        products: IObservableArray<any>;
        errors: IObservableValue<Record<string, any>>;
        isLoading: IObservableValue<boolean>;

        constructor(data: any, hanzoApi: any);

        setOrgDate(org: any): void;
        setDate(field: string, val: string, custom?: any): void;
        getProjectedRevenue(): Promise<void>;
        getDeposits(): Promise<void>;
        getRefunds(): Promise<void>;
        getWeeklySalesPoints(): Promise<{
            dates: IObservableArray<moment.Moment>;
            thisWeek: IObservableArray<number>;
            lastWeek: IObservableArray<number>;
            thisWeekRefunded: IObservableArray<number>;
            lastWeekRefunded: IObservableArray<number>;
        }>;
        getWeeklyRevenuePoints(): Promise<{
            dates: IObservableArray<moment.Moment>;
            thisWeek: IObservableArray<number>;
            lastWeek: IObservableArray<number>;
            thisWeekRefunded: IObservableArray<number>;
            lastWeekRefunded: IObservableArray<number>;
        }>;
        getWeeklySales(): Promise<{
            thisWeek: IObservableValue<number>;
            lastWeek: IObservableValue<number>;
            thisWeekRefunded: IObservableValue<number>;
            lastWeekRefunded: IObservableValue<number>;
        }>;
        getWeeklyRevenue(): Promise<{
            thisWeek: IObservableValue<number>;
            lastWeek: IObservableValue<number>;
            thisWeekRefunded: IObservableValue<number>;
            lastWeekRefunded: IObservableValue<number>;
        }>;
        getWeeklyUsers(): Promise<{
            thisWeek: IObservableValue<number>;
            lastWeek: IObservableValue<number>;
        }>;
        getTotalSales(): Promise<number>;
        getTotalRevenue(): Promise<number>;
        getTotalUsers(): Promise<number>;
        getProducts(): Promise<any[]>;
    }
}
