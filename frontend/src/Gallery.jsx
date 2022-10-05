import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from 'axios'


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
const [post, setPost] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Your Image
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input type="file" id="myfile" name="myfile" /> <br /> 
            Image name:  <input type="text" id="name" name="name" /> <br /> 
            Image description:  <input type="text" id="desc" name="desc" />
            <Button onClick={() => {
                    setPost({
                        name: document.getElementById("desc").value,
                        desc: document.getElementById("name").value,
                        img:
                        {
                            data: document.getElementById("myfile").value,
                            contentType: "image/png"
                        }
                    });
                    const res = axios.post('http://localhost:3000/add' , post);
                    console.log(res);
            }}>Add</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default function Gallery() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Content Gallery
          <BasicModal />
        </Typography>
      </CardContent>
    </Card>
  );
}