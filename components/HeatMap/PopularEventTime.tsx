/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { Box, styled } from "@mui/system";
// import { sectors } from "pages";

import Chart from "react-apexcharts";

const WrapperLineBarchart = styled(Box)`
  .apexcharts-legend-series {
    display: flex;
    flex-direction: column;
    .apexcharts-legend-marker {
      margin: 0 ;
    }
  }
  /* text {
    color: var(--white) !important;
    fill: var(--white) !important;
  } */
  .apexcharts-legend-text{
    display: none;
  }
  .chart {
    height: 100%;
  }
  .apexcharts-legend{
      padding-right: 20px !important;
    }
  .apexcharts-text {
    /* text {
      color: var(--white) !important;
      fill: var(--white) !important;
    }
    tspan {
      color: var(--white) !important;
      fill: var(--white) !important;
    } */
  
  }
`;

export interface OrgsDisclosing {
  "Board Oversight": number
  "Management's Role": number
  "Risks and Opportunities": number
  "Impact on Organization": number
  "Resilience of Strategy": number
  "Risk ID and Assessment Processes": number
  "Risk Management Processes": number
  "Integration into Overall Risk Management": number
  "Climate-Related Metrics": number
  "Scope 1,2,3 GHG Emissions": number
  "Climate-Related Targets": number
}
export interface Root {
  sector: string
  orgs_disclosing: OrgsDisclosing
  orgs_scores: any[]
}

export type seriesDtaType = {
  // dataSeries?: ApexAxisChartSeries;
  height: number;
  max: number;
  data: Root[];
  sectors: string[];
};

const PopularEventTime = ({ height, max, data, sectors }: seriesDtaType) => {
  const disclosing = [
    "Board Oversight",
    "Management's Role",
    "Risks and Opportunities",
    "Impact on Organization",
    "Resilience of Strategy",
    "Risk ID and Assessment Processes",
    "Risk Management Processes",
    "Integration into Overall Risk Management",
    "Climate-Related Metrics",
    "Scope 1,2,3 GHG Emissions",
    "Climate-Related Targets",
  ];

  interface IGeneratedData {
    x: string;
    y: number;
  }

  const generateRandomData = () => {
    const _data: { name: string; data: IGeneratedData[] }[] = [];
    disclosing.forEach(_disclosing => {
      const sector_array: IGeneratedData[] = []
      sectors.forEach(_sector => {
        const each_sector: Root | undefined = data?.find(dat => dat.sector === _sector)
        sector_array.push({
          x: _sector,
          y: each_sector ? each_sector.orgs_disclosing[_disclosing as keyof OrgsDisclosing] * 100 : 0
        })
      })
      _data.push({
        name: _disclosing,
        data: sector_array
      })
    })
    return _data
  };

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "heatmap",
      toolbar: {
        show: false,

      }
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff'], // Set the color of the data labels
        fontFamily: "Poppins",
        fontSize: '10px',
        fontWeight: 400
      },
      formatter: function (val: number) {
        return `${val}%`;
      },
    },
    xaxis: {
      floating: false,
      position: 'top',
      labels: {
        show: true,
        rotate: 90,
        rotateAlways: true,
        trim: false,
        maxHeight: 220,

        style: {
          colors: '#000',
          fontSize: '12px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
        offsetX: 0,
        offsetY: 150
      },
      categories: sectors
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "right",
      floating: true,
      //   fontSize: "16px",

      fontFamily: "Roboto",
      fontWeight: 400,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 10,
      labels: {
        colors: "transparent"
      },
      markers: {
        width: 26,
        radius: 0,
        height: 14,
        strokeWidth: 2,
        strokeColor: "transparent"
      },
      itemMargin: {
        horizontal: 0,
        vertical: 0
      }
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        shadeIntensity: 0.2,
        distributed: true,
        useFillColorAsStroke: false,
        colorScale: {
          ranges: [
            { from: 0, to: 19, name: "2", color: "#B2A7CD" },
            { from: 20, to: 39, name: "2", color: "#8D81A8" },
            { from: 40, to: 59, name: "1", color: "#7F7398" },
            { from: 60, to: 79, name: "2", color: "#443A5B" },
            { from: 80, to: max, name: "2", color: '#271E3C' }
          ],
          min: 0,
          max
        }
      }
    }
  };

  return (
    <WrapperLineBarchart sx={{ marginTop: 'auto' }}>
      <Chart
        options={options}
        series={generateRandomData()}
        type="heatmap"
        height={height}
        className="chart"
      />
    </WrapperLineBarchart>
  );
};

export default PopularEventTime;
