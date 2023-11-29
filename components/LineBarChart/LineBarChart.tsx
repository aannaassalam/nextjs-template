/* eslint-disable import/no-extraneous-dependencies */

import { Box, styled } from "@mui/system";
// eslint-disable-next-line import/no-cycle
import { IOrgScores } from "pages/sector/[slug]";
import Chart from "react-apexcharts";

const WrapperLineBarchart = styled(Box)`
  .chart {
    height: 100%;
  }
`;
interface ChartProps {
  // seriesList?: any[];
  maxOverallValue?: number | string;
  graph_data: Omit<IOrgScores, "regulatory_TCFD_score" | "discretionary_TCFD_score">[]
}
export default function LineBarChart({

  maxOverallValue = 60,
  graph_data
}: ChartProps) {

  const avg_score = graph_data.reduce((total, item) => total + item.overall_TCFD_score, 0) / graph_data.length

  const data = {
    series: [{
      name: 'Total Disclosure Criteria Covered',
      type: 'column',
      data: graph_data.map(_data => _data.overall_TCFD_score)
    }, {
      name: 'Average',
      type: 'line',
      data: Array.from({ length: graph_data.length }).fill(avg_score)
    }],

    options: {
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false,

        }
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: undefined,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false,

      },
      colors: ["#362A52", "#F56B40"],
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "bottom",
        horizontalAlign: "center",
        floating: false,
        fontSize: "11px",
        fontFamily: "Poppins",
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: "5px",
        tooltipHoverFormatter: undefined,
        customLegendItems: [],
        offsetX: 2,
        offsetY: 0,
        labels: {
          colors: "#848484"
          // useSeriesColors: false
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "transparent",
          fillColors: undefined,
          radius: 100,
          customHTML: undefined,
          onClick: undefined,
          offsetX: -5,
          offsetY: 0
        },
        itemMargin: {
          horizontal: 20,
          vertical: 10
        },
        onItemClick: {
          toggleDataSeries: true
        },
        onItemHover: {
          highlightDataSeries: true
        }
      },
      xaxis: {
        categories: graph_data.map(_data => _data.org_name)
      },

      yaxis: [{
        title: {
          text: 'Total Disclosure Criteria Covered',
        },
        min: 0,
        max: Number(maxOverallValue),
        // tickAmount: 12,
        logBase: 10,
        labels: {
          formatter: (val: number) => { return `${val}%` },
        }

      }, {
        opposite: true,
        title: {
          text: 'Average'
        },
        min: 0,
        max: Number(maxOverallValue),
        // tickAmount: 12,
        logBase: 10,
        labels: {
          formatter: (val: number) => { return `${val}%` },
        }
      }]
    }

  };

  return (
    <WrapperLineBarchart>
      <Chart
        options={data.options as any}
        series={data.series as ApexAxisChartSeries}
        type="bar"
        height={500}
        className="chart"
      />
    </WrapperLineBarchart>
  );
}
