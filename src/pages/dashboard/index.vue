<script setup lang="ts">
import { mdiCurrencyUsd, mdiHelpCircleOutline, mdiLabelVariantOutline, mdiPoll } from '@mdi/js'
// demos
import StatisticsCardVertical from '../../components/statistics-card/StatisticsCardVertical.vue'
import DashboardCongratulationJohn from './DashboardCongratulationJohn.vue'
import DashboardStatisticsCard from './DashboardStatisticsCard.vue'
import DashboardCardTotalEarning from './DashboardCardTotalEarning.vue'
import DashboardCardDepositAndWithdraw from './DashboardCardDepositAndWithdraw.vue'
import DashboardCardSalesByCountries from './DashboardCardSalesByCountries.vue'
import DashboardWeeklyOverview from './DashboardWeeklyOverview.vue'
import DashboardDatatable from './DashboardDatatable.vue'
const totalProfit = {
  statTitle: 'Total Profit',
  icon: mdiPoll,
  color: 'success',
  subtitle: 'Weekly Project',
  statistics: '$25.6k',
  change: '+42%',
}

const totalSales = {
  statTitle: 'Refunds',
  icon: mdiCurrencyUsd,
  color: 'secondary',
  subtitle: 'Past Month',
  statistics: '$78',
  change: '-15%',
}

// vertical card options
const newProject = {
  statTitle: 'New Project',
  icon: mdiLabelVariantOutline,
  color: 'primary',
  subtitle: 'Yearly Project',
  statistics: '862',
  change: '-18%',
}

const salesQueries = {
  statTitle: 'Sales Quries',
  icon: mdiHelpCircleOutline,
  color: 'warning',
  subtitle: 'Last week',
  statistics: '15',
  change: '-18%',
}
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <DashboardCongratulationJohn />
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <DashboardStatisticsCard />
    </v-col>

    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <DashboardWeeklyOverview />
    </v-col>

    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <DashboardCardTotalEarning />
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-row class="match-height">
        <v-col
          cols="12"
          sm="6"
        >
          <StatisticsCardVertical
            :change="totalProfit.change"
            :color="totalProfit.color"
            :icon="totalProfit.icon"
            :statistics="totalProfit.statistics"
            :stat-title="totalProfit.statTitle"
            :subtitle="totalProfit.subtitle"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <StatisticsCardVertical
            :change="totalSales.change"
            :color="totalSales.color"
            :icon="totalSales.icon"
            :statistics="totalSales.statistics"
            :stat-title="totalSales.statTitle"
            :subtitle="totalSales.subtitle"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <StatisticsCardVertical
            :change="newProject.change"
            :color="newProject.color"
            :icon="newProject.icon"
            :statistics="newProject.statistics"
            :stat-title="newProject.statTitle"
            :subtitle="newProject.subtitle"
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <StatisticsCardVertical
            :change="salesQueries.change"
            :color="salesQueries.color"
            :icon="salesQueries.icon"
            :statistics="salesQueries.statistics"
            :stat-title="salesQueries.statTitle"
            :subtitle="salesQueries.subtitle"
          />
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <DashboardCardSalesByCountries />
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <DashboardCardDepositAndWithdraw />
    </v-col>
    <v-col cols="12">
      <DashboardDatatable />
    </v-col>
  </v-row>
</template>
