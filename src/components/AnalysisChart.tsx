'use client'

import { FC } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

interface ChartData {
  scenario: string
  roi: number
  cashFlow: number
  totalExpenses: number
  netProfit: number
}

interface AnalysisChartProps {
  data: ChartData[]
}

const AnalysisChart: FC<AnalysisChartProps> = ({ data }) => {
  // Transform data for better display in chart
  const chartData = data.map(item => ({
    scenario: item.scenario.replace(/-/g, ' '),
    ROI: item.roi,
    'Monthly Cash Flow': item.cashFlow,
    'Annual Profit': item.netProfit / 1000, // Convert to thousands for better display
  }))

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="scenario" />
        <YAxis />
        <Tooltip 
          formatter={(value, name) => {
            if (name === 'ROI') return [`${value}%`, 'ROI']
            if (name === 'Monthly Cash Flow') return [`$${value}`, name]
            if (name === 'Annual Profit') return [`$${value}k`, name]
            return [value, name]
          }}
        />
        <Legend />
        <Bar dataKey="ROI" fill="#8884d8" name="ROI (%)" />
        <Bar dataKey="Monthly Cash Flow" fill="#82ca9d" name="Monthly Cash Flow ($)" />
        <Bar dataKey="Annual Profit" fill="#ffc658" name="Annual Profit ($k)" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default AnalysisChart 