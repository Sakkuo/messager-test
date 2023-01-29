import React from "react";
import "./ModalWindow.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterSlice } from "../../store/reducers/FilterSlice";
import ButtonClose from "../../img/ButtonClose.png";
import Circle from "../../img/Circle.png";
import SelectedCircle from "../../img/SelectedCircle.png";

const ModalWindow: React.FC = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "20px",
    p: "28px 18px",
  };

  const { isModalOpen, filterModalValue } = useAppSelector(
    (state) => state.filterReducer
  );
  const { setModalState, changeFilterModalValue } = filterSlice.actions;

  const dispatch = useAppDispatch();

  return (
    <div className="Modal">
      <Modal open={isModalOpen} onClose={() => dispatch(setModalState(false))}>
        <Box sx={style}>
          <button
            className="Modal__Button"
            onClick={() => dispatch(setModalState(false))}
          >
            <img src={ButtonClose} alt="close" />
          </button>
          <div className="Modal__title">Сортировка</div>
          <div className="Modal__variants">
            <div className="variants__alphabet variant-solo">
              <button
                onClick={() => {
                  dispatch(changeFilterModalValue("alphabet"));
                  dispatch(setModalState(false));
                }}
                className="alphabet__circle circle-select"
              >
                <img
                  src={filterModalValue === "alphabet" ? SelectedCircle : Circle}
                  alt=""
                  className="button__circle"
                />
                <div className="text__variant">По алфавиту</div>
              </button>
            </div>
            <div className="variants__birthday variant-solo">
              <button
                onClick={() => {
                  dispatch(changeFilterModalValue("birthday"));
                  dispatch(setModalState(false));
                }}
                className="birthday__circle circle-select"
              >
                <img
                  src={filterModalValue === "birthday" ? SelectedCircle : Circle}
                  alt=""
                  className="button__circle"
                />
                <div className="text__variant">По дню рождения</div>
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalWindow;
