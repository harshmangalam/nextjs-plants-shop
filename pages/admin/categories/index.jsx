import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminLayout from "../../../layouts/AdminLayout";
import { Avatar, Box, IconButton, Stack } from "@mui/material";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export default function Categories() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="categories table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Created Date</TableCell>
            <TableCell align="center">Updated Date</TableCell>
            <TableCell align="center">Total Plants</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell align="center">{category.id}</TableCell>
              <TableCell align="center">{category.name}</TableCell>
              <TableCell align="center">
                <img src={category.image} sx={{ width: 100, height: 100 }} />
              </TableCell>
              <TableCell align="center">{category.createdAt}</TableCell>
              <TableCell align="center">{category.updatedAt}</TableCell>
              <TableCell align="center">{category.plantsCount}</TableCell>
              <TableCell align="center">
                <Stack direction="row" spacing={1} justifyContent="center">
                  <IconButton aria-label="edit" color="primary">
                    <BorderColorOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="delete" color="error">
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Categories.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

const categories = [
  {
    id: 1,
    name: "Category 1",
    image:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-gardening-menu_96x108.png?v=1652634796",
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    plantsCount: 23,
  },
  {
    id: 1,
    name: "Category 1",
    image:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-gardening-menu_96x108.png?v=1652634796",
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    plantsCount: 23,
  },
  {
    id: 1,
    name: "Category 1",
    image:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-gardening-menu_96x108.png?v=1652634796",
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    plantsCount: 23,
  },
  {
    id: 1,
    name: "Category 1",
    image:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-gardening-menu_96x108.png?v=1652634796",
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    plantsCount: 23,
  },
  {
    id: 1,
    name: "Category 1",
    image:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-gardening-menu_96x108.png?v=1652634796",
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    plantsCount: 23,
  },
];
