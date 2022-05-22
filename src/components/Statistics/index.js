import { Box, Container } from '@mui/material';
import StatCard from 'components/Statistics/StatCard';
import React, { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import {
  getMostPopularPlaces,
  getProStat,
  getRegistrationStat,
} from 'server/statistics';

function Statistics() {
  const [allStatistics, setAllStatistics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setAllStatistics([]);

    const proArr = await getProStat();
    setAllStatistics((prev) => [
      ...prev,
      {
        type: 'AreaChart',
        title: 'Pro Users',
        data: proArr,
        xAsis: 'dateOfGettingPro',
        yAsis: 'count',
      },
    ]);

    const regArr = await getRegistrationStat();
    setAllStatistics((prev) => [
      ...prev,
      {
        type: 'AreaChart',
        title: 'Registered Users',
        data: regArr,
        xAsis: 'dateOfRegister',
        yAsis: 'count',
      },
    ]);

    const placesArr = await getMostPopularPlaces();
    setAllStatistics((prev) => [
      ...prev,
      {
        type: 'BarChart',
        title: 'Popular Places',
        data: placesArr,
        xAsis: 'title',
        yAsis: 'views',
      },
    ]);
    console.log(placesArr);

    setLoading(false);
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {loading ? (
          <PacmanLoader
            loading={loading}
            size={60}
            css={{ margin: '50px auto 0', display: 'block' }}
            color="#C1C77A"
          />
        ) : (
          allStatistics.map((item) => (
            <StatCard
              type={item.type}
              key={item.title}
              title={item.title}
              data={item.data}
              xAsis={item.xAsis}
              yAsis={item.yAsis}
            />
          ))
        )}
      </Box>
    </Container>
  );
}

export default Statistics;
