//import React from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    dateline: "Week 1",
    softwareEngineering: 30,
    systemFundamentals: 73,
    databaseStructure: 84,
    systemArchitecture: 25,
  },
  {
    dateline: "Week 2",
    softwareEngineering: 57,
    systemFundamentals: 48,
    databaseStructure: 66,
    systemArchitecture: 89,
  },
  {
    dateline: "Week 3",
    softwareEngineering: 66,
    systemFundamentals: 30,
    databaseStructure: 88,
    systemArchitecture: 50,
  },
  {
    dateline: "Week 4",
    softwareEngineering: 66,
    systemFundamentals: 42,
    databaseStructure: 80,
    systemArchitecture: 58,
  },
];

const weeklyAnalysis = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorSe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorSf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorDs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffc658" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorSa" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#bbe1ef" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#bbe1ef" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="dateline" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="softwareEngineering"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorSe)"
        />
        <Area
          type="monotone"
          dataKey="systemFundamentals"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorSf)"
        />
        <Area
          type="monotone"
          dataKey="databaseStructure"
          stroke="#ffc658"
          fillOpacity={1}
          fill="url(#colorDs)"
        />
        <Area
          type="monotone"
          dataKey="systemArchitecture"
          stroke="#bbe1ef"
          fillOpacity={1}
          fill="url(#colorSa)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default weeklyAnalysis;
