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
import useAuth from "../../hooks/useAuth";
import AppLayout from "../../layouts/AppLayout";
export default function Auth() {
  const {
    fields,
    handleChange,
    handleLogin,
    handlePasswordVisibility,
    visiblePassword,
  } = useAuth({ email: "", password: "" });
  return (
    <Paper sx={{ maxWidth: 600, margin: "auto", padding: 4 }}>
      <Typography variant="h4" textAlign={"center"}>
        Log in
      </Typography>
      <Stack
        spacing={2}
        component={"form"}
        method="post"
        onSubmit={handleLogin}
        mt={4}
      >
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            value={fields.email}
            onChange={handleChange}
            name="email"
            id="email"
            label="Email"
          />
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            value={fields.password}
            onChange={handleChange}
            name="password"
            id="password"
            label="Password"
            type={visiblePassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordVisibility}
                  edge="end"
                >
                  {visiblePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
