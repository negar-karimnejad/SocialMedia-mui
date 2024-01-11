import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Button,
  ButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Add() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        onClick={handleOpen}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          bgcolor={"background.default"}
          color={"color.primary"}
          p={3}
          width={400}
          height={280}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign={"center"}>
            Create post
          </Typography>
          <Box display={"flex"} alignItems={"center"} mb={"10px"} gap="10px">
            <Avatar
              sx={{ width: "30", height: "30" }}
              src="/static/images/avatar/4.jpg"
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </Box>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}
