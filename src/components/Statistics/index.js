import { Box } from '@mui/material';
import StatCard from 'components/Statistics/StatCard';
import React, { useEffect, useState } from 'react';
import { getProStat } from 'server/statistics';

function Statistics() {
  const [proStatistics, setProStatistics] = useState([]);

  useEffect(async () => {
    const proArr = await getProStat();
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
