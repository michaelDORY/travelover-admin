import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Box, Card, CardContent, CardHeader } from '@mui/material';
import getStatistics from '../../server/getStatistics';

function Statistics(props) {
  // const data = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000,
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780,
  //   },
  //   {
  //     name: 'Page E',
  //     uv: 1890,
  //   },
  //   {
  //     name: 'Page F',
  //     uv: 2390,
  //   },
  //   {
  //     name: 'Page G',
  //     uv: 3490,
  //   },
  // ];

  const [proStatistics, setProStatistics] = useState([]);

  useEffect(() => {
    const { proStatistics: proArr } = getStatistics();
    setProStatistics(proArr);
  }, []);

  return (
    <Box>
      <Card sx={{ width: '400px', minHeight: '300px' }}>
        <CardHeader title="PRO accounts" />
        <CardContent sx={{ width: '100%', height: '100%', padding: '25px' }}>
          <ResponsiveContainer style={{ display: 'block' }}>
            <AreaChart
              width={500}
              height={400}
              data={proStatistics}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dateOfGettingPro" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                fill="yellow"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Statistics;
