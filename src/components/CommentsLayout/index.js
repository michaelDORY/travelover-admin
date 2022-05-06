import React from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const CommentsLayout = () => {
  const status = {
    approved: 'approved',
    pending: 'pending',
    rejected: 'rejected',
  };

  const tableHeadingCells = [
    'id',
    'place_id',
    'user_id',
    'commentText',
    'status',
  ];

  const comments = [
    {
      id: 1,
      place_id: 1,
      user_id: 1,
      commentText: 'Nice',
      status: status.approved,
    },
    {
      id: 2,
      place_id: 2,
      user_id: 2,
      commentText: 'Nice',
      status: status.approved,
    },
    {
      id: 3,
      place_id: 3,
      user_id: 3,
      commentText: 'Nice',
      status: status.approved,
    },
    {
      id: 4,
      place_id: 4,
      user_id: 4,
      commentText: 'Nice',
      status: status.approved,
    },
  ];

  return (
    <Container sx={{ paddingY: '50px' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeadingCells.map((item) => {
                return <TableCell>{item}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.map((item) => {
              return (
                <TableRow>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.place_id}</TableCell>
                  <TableCell>{item.user_id}</TableCell>
                  <TableCell>{item.commentText}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              );
            })}
            {/*<TableRow>*/}
            {/*  <TableCell>fgfgfgf</TableCell>*/}
            {/*  <TableCell>fgfgfgf</TableCell>*/}
            {/*</TableRow>*/}
            {/*<TableRow>*/}
            {/*  <TableCell>fgfgfgf</TableCell>*/}
            {/*  <TableCell>fgfgfgf</TableCell>*/}
            {/*</TableRow>*/}
            {/*<TableRow>*/}
            {/*  <TableCell>fgfgfgf</TableCell>*/}
            {/*  <TableCell>fgfgfgf</TableCell>*/}
            {/*</TableRow>*/}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CommentsLayout;
