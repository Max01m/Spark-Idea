import React from "react";
import Header from "../../components/Header/Header";
import "./Main.css";
import Button from "@mui/material/Button";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import Footer from "../../components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state) => state.auth);
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <ul className="mainList">
          {isAuth ? (
            <li>
              <h1>{user.user.userName}</h1>
            </li>
          ) : (
            ""
          )}
          <li>Добро пожаловать в Spark Idea!</li>
          <li>Здесь вы сможете создать своё портфолио мечты</li>
          <li>Воплотите свои идеи в реальность вместе с нами!</li>
        </ul>
        <Button
          sx={{ mt: 7, ml: 50, borderRadius: 12 }}
          className="btnCreate"
          variant="contained"
          color="primary"
          endIcon={<NextWeekIcon />}
        >
          Создать Портфолио
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
