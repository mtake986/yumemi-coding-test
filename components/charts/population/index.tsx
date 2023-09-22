import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PopulationComposition = () => {
  return (
    <section>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          series: [
            {
              data: [1, 2, 3],
            },
          ],
        }}
      />
    </section>
  );
};

export default PopulationComposition;
