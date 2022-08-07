import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import AppLayout from "../../layouts/AppLayout";
export default function Auth() {
  return (
    <Paper sx={{ maxWidth: 600, margin: "auto", padding: 4 }}>
      <Typography  variant="h4" textAlign={"center"}>Log in</Typography>
      <Stack spacing={2} component={"form"} method="post" onSubmit={() => {}} mt={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            value={""}
            onChange={() => {}}
            name="email"
            id="email"
            label="Email"
          />
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            value={""}
            onChange={() => {}}
            name="password"
            id="password"
            label="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {}}
                  onMouseDown={() => {}}
                  edge="end"
                >
                  {true ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button type="submit" size="large" variant="contained">
          Log In
        </Button>
      </Stack>
      <Stack justifyContent={"center"} mt={4}>
        <Link href="auth/signup" passHref>
          <Button variant="outlined" color="success">
            Create new account
          </Button>
        </Link>
      </Stack>
    </Paper>
  );
}

Auth.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
