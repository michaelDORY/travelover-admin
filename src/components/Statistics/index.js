import { Box, Container } from '@mui/material';
import StatCard from 'components/Statistics/StatCard';
import React, { useEffect, useState } from 'react';
import { getProStat } from 'server/statistics';
import { getAllStat } from 'server/statistics';

function Statistics() {
  const [proStatistics, setProStatistics] = useState([]);
  const [allStatistics, setAllStatistics] = useState([]);

  useEffect(async () => {
    const proArr = await getProStat();
    setProStatistics(proArr);
    const allArr = await getAllStat();
    setAllStatistics(allArr);
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
          title="Registered users"
          data={allStatistics}
          xAsis="dateOfRegister"
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
