import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react'

interface CoinProps {

  sparkline_in_7d: { price: number[] };
}

const CoinCharts: React.FC<{ coin: CoinProps }> = ({ coin }) => {


  // Prepare Data for Chart
  const chartData = coin && coin.sparkline_in_7d.price.map((price, index) => ({
    day: `Day ${index + 1}`,
    price: price.toFixed(4),
  }));
  
  // Determine Line Color
  const isIncreasing = coin.sparkline_in_7d.price.at(-1)! >= coin.sparkline_in_7d.price[0];

  return (
    <ResponsiveContainer width="80%" height={80}>
      <LineChart data={chartData}>
        <XAxis dataKey="day" hide />
        <YAxis domain={['auto', 'auto']} hide />
        <Tooltip contentStyle={{
          width: "100px",
          height: "40px",
          fontSize: "12px",
          display: "flex",
          borderRadius: "10px",
          backgroundColor: "black",
          alignItems: "center"
        }} />
        <Line
          type="monotone"
          dataKey="price"
          stroke={isIncreasing ? "#22c55e" : "#ef4444"} // Green if increasing, red if decreasing
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};





export default CoinCharts