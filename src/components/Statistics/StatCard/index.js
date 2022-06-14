import { Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const StatCard = (props) => {
  return (
    <Card sx={{ width: '400px', minHeight: '300px', margin: '20px' }}>
      <CardHeader title={props.title} />
      <CardContent sx={{ width: '100%', height: '100%', padding: '25px' }}>
        <ResponsiveContainer width="100%" height={200}>
          {props.type === 'AreaChart' ? (
            <AreaChart
              width={500}
              height={400}
              data={props.data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={props.xAsis} />
              <YAxis dataKey={props.yAsis} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={props.yAsis}
                stroke="#8884d8"
                fill="#ffd93d"
              />
            </AreaChart>
          ) : (
            <BarChart width={500} height={400} data={props.data} barSize={50}>
              <XAxis dataKey={props.xAsis} />
              <YAxis dataKey={props.yAsis} />
              <Tooltip
                cursor={{ fill: 'rgba(56,56,56,0.32)' }}
                contentStyle={{ color: '#8884d8' }}
                itemStyle={{ color: '#8884d8' }}
              />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey={props.yAsis}
                fill="#ffd93d"
                background={false}
                stroke="#8884d8"
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default StatCard;
