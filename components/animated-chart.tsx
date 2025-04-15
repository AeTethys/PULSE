"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export default function AnimatedChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Sample data for student performance over time
    const labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"]

    const data = {
      labels,
      datasets: [
        {
          label: "Class Average",
          data: [65, 68, 70, 72, 75, 78, 80, 82],
          borderColor: "rgba(0, 149, 200, 1)",
          backgroundColor: "rgba(0, 149, 200, 0.1)",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Top Performers",
          data: [80, 82, 85, 87, 88, 90, 92, 95],
          borderColor: "rgba(46, 204, 113, 1)",
          backgroundColor: "rgba(46, 204, 113, 0.1)",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Needs Support",
          data: [50, 52, 55, 58, 62, 65, 68, 70],
          borderColor: "rgba(231, 76, 60, 1)",
          backgroundColor: "rgba(231, 76, 60, 0.1)",
          fill: true,
          tension: 0.4,
        },
      ],
    }

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // Create new chart
    const ctx = chartRef.current.getContext("2d")
    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 2000,
            easing: "easeOutQuart",
          },
          scales: {
            y: {
              beginAtZero: false,
              min: 40,
              max: 100,
              title: {
                display: true,
                text: "Performance Score",
              },
            },
            x: {
              title: {
                display: true,
                text: "Time Period",
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          interaction: {
            mode: "nearest",
            axis: "x",
            intersect: false,
          },
        },
      })
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="h-[600px] w-full p-4">
      <canvas ref={chartRef} />
    </div>
  )
}
