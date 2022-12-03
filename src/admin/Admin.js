import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Admin(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [skill, setSkill] = useState("");
  const [link, setLink] = useState("");
  const [live, setLive] = useState("");
  const [projectUploadMessage, setprojectUploadMessage] = useState("");
  // axios.post("localhost:8000/api/project-list",{
  //     name,
  //     image,
  //     skill,
  //     live,
  //     link,
  // });
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };
  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://adnan-porfolio-backend.up.railway.app/api/project-list",
        {
          name,
          image,
          skill,
          link,
          live,
        }
      );
      if (data.success === true) {
        setprojectUploadMessage("uploaded succesfully");
        setTimeout(() => {
          setprojectUploadMessage("");
          setName("");
          setLink("");
          setSkill("");
          setLive("");
          setImage("");
        }, 1000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      {/* <form action="" encType="multipart/form-data" onSubmit={handleSubmit}> */}
      <Box component="form" style={{ marginTop: "10px" }}>
        <TextField
          id="outlined-basic"
          label="project name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <Button
          variant="contained"
          component="label"
          name="image"
          onChange={handleImage}
        >
          Upload image
          <input type="file" hidden />
        </Button>
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Skill, ...."
          variant="outlined"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Github link"
          variant="outlined"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="live link"
          variant="outlined"
          value={live}
          onChange={(e) => setLive(e.target.value)}
        />
        <br />
        <br />

        <Button
          type="submit"
          color="success"
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <p>{projectUploadMessage}</p>
      </Box>
      {/* <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}

      {/* <label htmlFor="">image</label>
        <input type="file" name="image" onChange={handleImage} />
        <label htmlFor="">Skill</label>
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <label htmlFor="">Link</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <label htmlFor="">Live</label>
        <input
          type="text"
          value={live}
          onChange={(e) => setLive(e.target.value)}
        />
        <button type="submit">submit</button>
      </form> */}
      {image && <img src={image} alt="chosen" style={{ height: "300px" }} />}
    </div>
  );
}

export default Admin;
