import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Avatar } from "@mui/material";
import "./Profile.css";
import Input from "../../components/Input/Input";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";

const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);

  const handleFileInputChange = (event) => {
    // Обработка выбора файла
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  return (
    <form>
      <Header />
      <div className="wrapperProfile">
        <div>
          <h3 style={{ marginLeft: "40px" }}>Профиль</h3>
          <Avatar sx={{ width: "10vw", height: "15vh" }} />
          <div>
            <label className="uploadInput">
              <CloudUploadIcon sx={{ mr: 2 }} /> Выберите файл
              <input type="file" onChange={handleFileInputChange} />
            </label>
          </div>
        </div>
        <div>
          <div>
            <Input type="text" labelFor="name" label="Ваше Имя" id="name" />
            <Input type="text" labelFor="country" label="Страна" id="country" />
          </div>
          <div>
            <Input
              type="text"
              labelFor="surname"
              label="Ваше Фамилия"
              id="surname"
            />
            <Input type="text" labelFor="town" label="Ваш город" id="town" />
          </div>

          <div>
            <Input
              type="text"
              labelFor="speciality"
              label="Cпециальность"
              id="speciality"
            />
          </div>
        </div>
      </div>

      <div className="aboutMeDiv">
        <h2 style={{ width: "100%" }}>Обо мне</h2>
        <div className="aboutMeInputs">
          <Input
            type="text"
            labelFor="abotMe"
            label="Напишите о себе"
            id="abotMe"
          />
          <Input
            type="text"
            labelFor="email"
            label="Ваша почта"
            id="email"
          />

          <Input type="text" labelFor="VK" label="Ссылка на ВК" id="VK" />
          <Input
            type="text"
            labelFor="Github"
            label="Ссылка на Github"
            id="Github"
          />
        </div>
        <div  className="btnsProfile" >
       
          <Button variant="contained" color="success">
            Сохранить
          </Button>
          <Button variant="contained" color="error">
            Отменить
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
