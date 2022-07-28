import { Box } from "@mui/material";
import AdminLayout from "../../../layouts/AdminLayout";

export default function Create(){
    return (
        <Box>
            Create
        </Box>
    )
}

Create.getLayout = function getLayout(page){
    return <AdminLayout>{page}</AdminLayout>
}