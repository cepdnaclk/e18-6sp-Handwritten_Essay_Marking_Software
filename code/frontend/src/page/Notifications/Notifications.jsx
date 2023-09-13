import { Stack, Typography } from "@mui/material";
import NotificationTable from "./NotificationTable";
import NavBar from '../../components/NavBar/NavBar'

function UserNotifications() {
  return (
    <>
      <NavBar />
      <Stack marginTop={10} spacing={2} padding={2} direction={"column"}>
        <Typography
          padding={1}
          bgcolor={"#D9D9D9"}
          width={"100%"}
          variant='h6'
          color={"#131485"}
          borderRadius={2}
        >
          Received Notifications
        </Typography>
        <NotificationTable />
      </Stack>
    </>
  );
}

export default UserNotifications;
