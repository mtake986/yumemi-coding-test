import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useResas } from "@/contexts/ResasContext";
import { TypeSeries } from "@/contexts/type";

const PopulationComposition = () => {
  const { fetchPopulationData, populationData } = useResas();

  let series: Array<TypeSeries> = [];
  if (populationData) {
    series = populationData.map((eachPref) => {
      const key = Object.keys(eachPref)[0];
      return {
        name: key,
        data: eachPref[key][3].data.map((eachYear) => eachYear.value),
      };
    });
  }

  // series = [{
  //   name: "Installation & Developers",
  //   data: [1,2,3,4,5],
  // }, {
  //   name: "Population",
  //   data: [1,2,3,4,6],
  // }]
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "U.S Solar Employment Growth",
      align: "left",
    },

    subtitle: {
      text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
      align: "left",
    },

    yAxis: {
      title: {
        text: "Number of Employees",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2020",
      },
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
        pointStart: 1960,
        // pointEnd: 2020
      },
    },

    series: series,

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
  if (populationData.length === 0) {
    return <div>データがありません</div>;
  }
  return (
    <section>
      {/* {populationData.map((data, i) => {
        console.log(series);
        console.log(Object.keys(populationData)[i]);
        return <div key={i}>{123}</div>;
      })} */}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
};

export default PopulationComposition;
