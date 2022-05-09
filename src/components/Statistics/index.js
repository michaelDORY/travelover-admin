import { Box } from '@mui/material';
import StatCard from 'components/Statistics/StatCard';
import React, { useEffect, useState } from 'react';
import getStatistics from '../../server/getStatistics';

function Statistics() {
  const [proStatistics, setProStatistics] = useState([]);

  useEffect(async () => {
    const proArr = await getStatistics();
    setProStatistics(proArr);
  }, []);

  return (
    <Box>
      <StatCard
        title="Pro users"
        data={proStatistics}
        xAsis="dateOfGettingPro"
        yAsis="count"
      />
    </Box>
  );
}

export default Statistics;
