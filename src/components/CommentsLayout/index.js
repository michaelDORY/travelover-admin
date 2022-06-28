import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { UIContext } from 'components/UIContext';
import React, { useContext, useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import { getComments, updateComment } from 'server/comments';
import uniqid from 'uniqid';

const CommentsLayout = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const status = {
    approved: 'approved',
    pending: 'pending',
    rejected: 'rejected',
  };

  const tableHeadingCells = [
    'Date',
    'Place name',
    "User's email",
    'Comment',
    'Status',
  ];

  useEffect(async () => {
    const comments = await getComments();
    setComments(comments);
    setIsLoading(false);
  }, []);

  const alertContent = {
    show: true,
    severity: 'error',
    message: '',
  };
  const { setAlert } = useContext(UIContext);

  const approveComment = async (commentId) => {
    const res = updateComment(commentId, status.approved);
    if (res) {
      const comments = await getComments();
      setComments(comments);
      setAlert({
        ...alertContent,
        severity: 'success',
        message: 'Successfully approved!',
      });
    } else {
      setAlert(alertContent);
    }
  };

  const rejectComment = async (commentId) => {
    const res = updateComment(commentId, status.rejected);
    if (res) {
      const comments = await getComments();
      setComments(comments);
      setAlert({
        ...alertContent,
        severity: 'success',
        message: 'Successfully rejected!',
      });
    } else {
      setAlert(alertContent);
    }
  };

  if (isLoading) {
    return (
      <PacmanLoader
        loading={isLoading}
        size={60}
        css={{ margin: '50px auto 0', display: 'block' }}
        color="#C1C77A"
      />
    );
  }

  return (
    <Box sx={{ paddingY: '50px', paddingX: '50px' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeadingCells.map((item) => (
                <TableCell key={uniqid()}>{item}</TableCell>
              ))}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.map((item) => (
              <TableRow key={uniqid()}>
                <TableCell>{item.timeStamp}</TableCell>
                <TableCell>{item.place_name}</TableCell>
                <TableCell>{item.user_email}</TableCell>
                <TableCell>{item.comment}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <Fab
                    size="small"
                    onClick={() => approveComment(item.id)}
                    color={
                      item.status === status.pending ? 'primary' : 'default'
                    }
                    aria-label="approve"
                    sx={{ mr: '15px' }}
                  >
                    <CheckIcon />
                  </Fab>
                  <Fab
                    color={
                      item.status === status.pending ? 'secondary' : 'default'
                    }
                    onClick={() => rejectComment(item.id)}
                    aria-label="reject"
                    size="small"
                  >
                    <CloseIcon />
                  </Fab>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CommentsLayout;
