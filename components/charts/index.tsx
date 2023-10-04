"use client";
import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useResas } from "@/contexts/ResasContext";
import { TypePopulationDataSeries } from "@/contexts/type";
import { tabValues } from "@/public/constants";
import WhenPplDataFetching from "./whenDataFetching";
import MultipleSelectModeOn from "./multipleSelectModeOn";
import NoData from "./noData/NoData";

const PopulationChart = () => {
  const {
    populationData,
    isPopulationDataLoading,
    isMultipleSelectMode,
    currentTab,
  } = useResas();

  if (isMultipleSelectMode) {
    return <MultipleSelectModeOn />;
  }

  if (isPopulationDataLoading) {
    return <WhenPplDataFetching />;
  }

  if (populationData.length === 0 && !isPopulationDataLoading) {
    return <NoData />;
  }

  let series: Array<TypePopulationDataSeries> = [];
  if (populationData) {
    series = populationData.map((eachPref) => {
      const key = Object.keys(eachPref)[0];
      return {
        name: key,
        data: eachPref[key][currentTab.id].data.map(
          (eachYear) => eachYear.value,
        ),
        comparison: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      };
    });
  }

  const options = {
    chart: {
      type: "spline",
      height: 500,
    },
    title: {
      text: currentTab.jp,
      align: "left",
    },

    subtitle: {
      text: tabValues[currentTab.id].subtitle,
      align: "left",
    },

    yAxis: {
      title: {
        text: `${currentTab.jp} (人)`,
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 1960 to 2020",
      },
      title: {
        text: "年度",
      },

      categories: [
        1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015,
        2020, 2025, 2030, 2035, 2040, 2045,
      ],
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    tooltip: {
      formatter: function (
        this: Highcharts.TooltipFormatterContextObject,
      ): string {
        if (this.y === null || this.y === undefined) {
          return "";
        }
        return (
          "<b>" +
          this.series.name +
          "</b>  <b>" +
          this.x +
          "</b>年<br/><b>" +
          this.y.toString().slice(0, -4) +
          "</b>万" +
          this.y.toString().slice(-4) +
          "人"
        );
      },
    },

    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },

    series: series,

    accessibility: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 768,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <section>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
};

export default PopulationChart;
