import { Box, Container } from '@mui/material';
import StatCard from 'components/Statistics/StatCard';
import React, { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import {
  getMostPopularPlaces,
  getProStat,
  getRegistrationStat,
  getTopRatedPlaces,
} from 'server/statistics';

function Statistics() {
  const [allStatistics, setAllStatistics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setAllStatistics([]);

    const proArr = await getProStat();
    const regArr = await getRegistrationStat();
    const placesMostViewedArr = await getMostPopularPlaces();
    const placesTopRatedArr = await getTopRatedPlaces();

    setAllStatistics((prev) => [
      {
        type: 'AreaChart',
        title: 'Pro Users',
        data: proArr,
        xAsis: 'dateOfGettingPro',
        yAsis: 'count',
      },
      {
        type: 'AreaChart',
        title: 'Registered Users',
        data: regArr,
        xAsis: 'dateOfRegister',
        yAsis: 'count',
      },
      {
        type: 'BarChart',
        title: 'Most viewed Places',
        data: placesMostViewedArr,
        xAsis: 'title',
        yAsis: 'views',
      },
      {
        type: 'BarChart',
        title: 'TOP Rated Places',
        data: placesTopRatedArr,
        xAsis: 'title',
        yAsis: 'ratingMark',
        maxHeight: 5,
      },
    ]);

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
              maxHeight={item.maxHeight ? item.maxHeight : undefined}
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
