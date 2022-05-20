import { Box, Container } from '@mui/material';
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
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <StatCard
          title="Pro users"
          data={proStatistics}
          xAsis="dateOfGettingPro"
          yAsis="count"
        />
        <StatCard
          title="Pro users"
          data={proStatistics}
          xAsis="dateOfGettingPro"
          yAsis="count"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingY: '50px',
        }}
      >
        <StatCard
          title="Pro users"
          data={proStatistics}
          xAsis="dateOfGettingPro"
          yAsis="count"
        />
      </Box>
    </Container>
  );
}

export default Statistics;
