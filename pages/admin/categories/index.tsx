import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminLayout from "../../../layouts/AdminLayout";
import {
  Avatar,
  AvatarGroup,
  Box,
  Fab,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import prisma from "../../../lib/prisma";
import useCategories from "../../../hooks/dashboard/useCategories";

export default function Categories({ categories }) {
  const { handleDeleteCategory } = useCategories();
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="categories table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Images</TableCell>
              <TableCell align="center">Created Date</TableCell>
              <TableCell align="center">Updated Date</TableCell>
              <TableCell align="center">Total Plants</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell align="center">{category.name}</TableCell>
                <TableCell align="center">
                  {category.images.length ? (
                    <AvatarGroup max={3}>
                      {category.images.map((image) => (
                        <Avatar
                          id={image.public_id}
                          sx={{ width: 60, height: 60 }}
                          alt={image.public_id}
                          src={image.url}
                        />
                      ))}
                    </AvatarGroup>
                  ) : (
                    <Typography variant="body2" textAlign={"center"}>
                      No Images
                    </Typography>
                  )}
                </TableCell>
                <TableCell align="center">
                  {new Date(category.createdAt).toDateString()}
                </TableCell>
                <TableCell align="center">
                  {new Date(category.updatedAt).toDateString()}
                </TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <IconButton aria-label="edit" color="primary">
                      <BorderColorOutlinedIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => handleDeleteCategory(category.id)}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link href="/admin/categories/create" passHref>
        <Tooltip title="Add Category">
          <Fab
            sx={{ position: "fixed", bottom: 16, right: 8 }}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </Link>
    </Box>
  );
}

Categories.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export async function getServerSideProps() {
  try {
    const categories = await prisma.category.findMany({});
    return {
      props: {
        categories: JSON.parse(JSON.stringify(categories)),
      },
    };
  } catch (error) {
    console.log(error);
  }
}
