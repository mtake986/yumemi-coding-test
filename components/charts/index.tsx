import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useResas } from "@/contexts/ResasContext";
import { TypeSeries } from "@/contexts/type";
import { tabValues } from "@/public/constants";
import styles from './index.module.css'

const PopulationComposition = () => {
  const { populationData, currentTab, selectedPrefs, isPopulationDataLoading } =
    useResas();

  if (selectedPrefs.length === 0 && populationData.length === 0) {
    return <div>都道府県を選択してください。</div>;
  }

  if (isPopulationDataLoading) {
    return <div className={styles.noData}>データを取得しています。</div>;
  }

  let series: Array<TypeSeries> = [];
  if (populationData) {
    series = populationData.map((eachPref) => {
      const key = Object.keys(eachPref)[0];
      return {
        name: key,
        data: eachPref[key][currentTab.id].data.map(
          (eachYear) => eachYear.value
        ),
      };
    });
  }
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: currentTab.jp,
      // text: 'currentTab.jp',
      align: "left",
    },

    subtitle: {
      text: tabValues[currentTab.id].subtitle,
      align: "left",
    },

    yAxis: {
      title: {
        text: currentTab.jp,
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 1960 to 2020",
      },
      title: {
        text: "Year",
      },
      min: 1960, 
      max: 2020,
      // categories: {
      //   categories: populationData[0][Object.keys(populationData[0])[0]][
      //     currentTab.id
      //   ].data.map((eachYear) => eachYear.year),
      // }
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 1980,
        pointEnd: 2020,
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
            maxWidth: 500,
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

export default PopulationComposition;
