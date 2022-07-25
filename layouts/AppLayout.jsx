import { Box } from "@mui/material";

export default function AppLayout({children}){

    return (
        <Box>
            {/* navbar  */}
                navbar

            {/* main  */}
                {children}

            {/* footer  */}
            footer
        </Box>
    )
}