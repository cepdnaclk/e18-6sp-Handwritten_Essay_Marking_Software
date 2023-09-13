import { Button, Stack } from "@mui/material";
import { MaterialReactTable } from "material-react-table";

import { useMemo, useState ,useEffect} from "react";
import React, { useContext } from "react";
import UserContext from "../../userContext";
import axios from "../../API/axios"

const dummyNotifications = [
  {
    userId: 1,
    userName: "alice123",
    senderAddress: "sender@example.com",
    message: "Hello, how are you?",
    requestStatus: "pending",
    replyStatus: "not replied",
    replyMessage: "",
    receivedDate: "2023-08-27",
  },
  {
    userId: 2,
    userName: "bob456",
    senderAddress: "sender2@example.com",
    message: "Hey there!",
    requestStatus: "approved",
    replyStatus: "replied",
    replyMessage: "I'm doing well, thank you!",
    receivedDate: "2023-08-26",
  },
  {
    userId: 3,
    userName: "charlie789",
    senderAddress: "sender3@example.com",
    message: "Need some help with the project.",
    requestStatus: "approved",
    replyStatus: "replied",
    replyMessage: "Sure, I'd be happy to help!",
    receivedDate: "2023-08-25",
  },
  {
    userId: 4,
    userName: "david101",
    senderAddress: "sender4@example.com",
    message: "Important update regarding the event.",
    requestStatus: "pending",
    replyStatus: "not replied",
    replyMessage: "",
    receivedDate: "2023-08-24",
  },
  {
    userId: 5,
    userName: "eve2023",
    senderAddress: "sender5@example.com",
    message: "Invitation for the conference.",
    requestStatus: "approved",
    replyStatus: "replied",
    replyMessage: "Thank you, I'll be attending!",
    receivedDate: "2023-08-23",
  },
];

function NotificationTable() {
  const {userData} = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [notifications, setNotifications] = useState([]);
  console.log(userData)
  
  // const userLocal = ()=>{
    // Retrieve the stored JSON object from localStorage  
    
  // }
  useEffect(() => {
      const userJSON = localStorage.getItem("user");
      
      if (userJSON) {
        console.log("User JSON:")
        try {
          // Parse the JSON string into a JavaScript object
          const userObject = JSON.parse(userJSON);
          
            // Access the username property
            const userUsername = userObject.username;  
            // Set the username in the state
            setUsername(userUsername);
          } catch (error) {
            console.error("Error parsing user JSON:", error);
          }
        } 
        console.log(username);
  }, []);

  useEffect(() => {
    if(username){
      fetchnotifications(username);
    }
    
  }, [username]);

  const fetchnotifications = async (user) => {

      try{
        const res = await axios.get(`api/notifications/find/${user}`);
        console.log(res.data);
        setNotifications(res.data);
      }
      catch(err){
        console.log(err);
      }
  };


  const columns = useMemo(
    () => [
      {
        accessorKey: "userName",
        header: "Username",
        size: 100,
      },
      {
        accessorKey: "senderAddress", //access nested data with dot notation
        header: "Sender Address",
        size: 100,
      },
      {
        accessorKey: "updatedAt", //normal accessorKey
        header: "Received Date",
        size: 100,
      },
      {
        accessorKey: "message", //normal accessorKey
        header: "Notification Message",
        size: 100,
      },
      {
        header: "Is there a letter?",
        size: 50,
        Cell: ({ cell, row }) => {
          return (
            <Stack spacing={2} direction={"row"}>
              {row.original.isReply ? 'Yes' : 'No'}
              {/* <Button variant='contained'>Accept Request</Button>
              <Button  color='warning' variant='outlined'>
                Reject Request
              </Button> */}
            </Stack>
          );
        },
      },

      // {
      //   header: "Reply",
      //   size: 50,
      //   Cell: ({ cell, row }) => {
      //     return (
      //       <Button  onClick={() => setOpen(true)} variant='contained'>
      //         Send
      //       </Button>
      //     );
      //   },
      // },

    ],
    []
  );

  return (
    <>
      {/* <ReplyRequest open={open} setOpen={setOpen} /> */}
      <MaterialReactTable  columns={columns} data={notifications} />

    </>
  );
}

export default NotificationTable;
