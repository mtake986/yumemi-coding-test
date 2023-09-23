import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useResas } from "@/contexts/ResasContext";
import { TypeSeries } from "@/contexts/type";

const PopulationComposition = () => {
  const { fetchPopulationData, populationData } = useResas();

  let series: Array<TypeSeries> = [];
  if (populationData) {
    console.log(populationData);
    series = populationData.map((data) => {
      const key = Object.keys(data)[0];
      console.log(data[key][0].data);
      return { name: key, data: data[key][3].data.map((data) => data.value) };
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
      },
    },

    series: series,
    // {
    //   name: populationData && populationData[0]["宮崎県"][0].label,
    //   data: populationData && populationData[0]["宮崎県"][0].data,
    // },

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
