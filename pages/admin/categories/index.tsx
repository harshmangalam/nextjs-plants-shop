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
  Box,
  Fab,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import prisma from "../../../lib/prisma";
import useCategories from "../../../hooks/dashboard/useCategories";
import EditCategoryDialog from "../../../components/Category/EditCategoryDialog";

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
                    <Avatar
                      variant="rounded"
                      id={category.images[0].public_id}
                      sx={{ width: 80, height: 80, margin: "auto" }}
                      alt={category.images[0].public_id}
                      src={category.images[0].url}
                    />
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
                <TableCell align="center">{category._count?.plants}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <EditCategoryDialog {...category} />
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
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: {
            plants: true,
          },
        },
      },
    });
    return {
      props: {
        categories: JSON.parse(JSON.stringify(categories)),
      },
    };
  } catch (error) {
    console.log(error);
  }
}
