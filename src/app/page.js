import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import ComposedChart from "./components/ComposedChart";
import RadarChart from "./components/RadarChart";
import RadialBarChart from "./components/RadialBarChart";
import FunnelChart from "./components/FunnelChart";
import Treemap from "./components/Treemap";
import ScatterChart from "./components/ScatterChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
      <h1 className="text-4xl font-bold text-white/60 mb-8">
        Chart.js Playground
      </h1>
      <h2 className="text-2xl font-semibold text-white/40 mb-8">
        A collection of charts built with Chart.js
      </h2>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        {/* <GridItem title="Scatter Chart">
          <ScatterChart />
        </GridItem>
        <GridItem title="Composed Chart">
          <ComposedChart />
        </GridItem>
        <GridItem title="Radar Chart">
          <RadarChart />
        </GridItem> */}
        <GridItem title="Area Chart">
          <AreaChart />
        </GridItem>
        {/* <GridItem title="Pie Chart">
          <PieChart />
        </GridItem>
        <GridItem title="Bar Chart">
          <BarChart />
        </GridItem>
        <GridItem title="Funnel Chart">
          <FunnelChart />
        </GridItem>
        <GridItem title="Line Chart">
          <LineChart />
        </GridItem>
        <GridItem title="Treemap">
          <Treemap />
        </GridItem>
        <GridItem title="Radial Bar Chart">
          <RadialBarChart />
        </GridItem> */}
      </div>
    </main>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
