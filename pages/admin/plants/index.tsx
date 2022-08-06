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
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import prisma from "../../../lib/prisma";
import EditPlantDialog from "../../../components/Plant/EditPlantDialog";

export default function Plants({ plants,categories }) {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="categories table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Images</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Created Date</TableCell>
              <TableCell align="center">Updated Date</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plants.map((plant) => (
              <TableRow key={plant.id}>
                <TableCell align="center">{plant.name}</TableCell>
                <TableCell align="center">
                  {plant.images.length ? (
                    <AvatarGroup max={3}>
                      {plant.images.map((image) => (
                        <Avatar
                          key={image.public_id}
                          variant="rounded"
                          id={image.public_id}
                          sx={{ width: 80, height: 80, margin: "auto" }}
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
                <TableCell align="center">{plant.price}</TableCell>
                <TableCell align="center">{plant.quantity}</TableCell>
                <TableCell align="center">{plant.category.name}</TableCell>

                <TableCell align="center">
                  {new Date(plant.createdAt).toDateString()}
                </TableCell>
                <TableCell align="center">
                  {new Date(plant.updatedAt).toDateString()}
                </TableCell>

                <TableCell align="center">
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <EditPlantDialog categories={categories} defaultPlant={plant} />
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => {}}
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
      <Link href="/admin/plants/create" passHref>
        <Tooltip title="Add Plants">
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

Plants.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export async function getServerSideProps() {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        images: true,
      },
    });
    const plants = await prisma.plant.findMany({
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return {
      props: {
        plants: JSON.parse(JSON.stringify(plants)),
        categories
      },
    };
  } catch (error) {
    console.log(error);
  }
}
