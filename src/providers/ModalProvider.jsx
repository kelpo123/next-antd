'use client';

import { createContext, useContext, useReducer } from 'react';

const initialState = {
  modalType: [],
  isOpen: false,
  data: null,
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        modalType: [...state.modalType, action.modalType],
        data: {
          ...state.data,
          ...action.data,
        },
        isOpen: true,
      };
    case 'close':
      return {
        ...state,
        modalType: action.modalType ? state.modalType.filter((z) => z != action.modalType) : [],
        isOpen: false,
      };

    case 'set_data':
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data,
        },
      };

    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const ModalStateContext = createContext(initialState);
const ModalActionContext = createContext(undefined);

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalActionContext.Provider value={dispatch}>{children}</ModalActionContext.Provider>
    </ModalStateContext.Provider>
  );
};

export const useModalState = () => {
  const state = useContext(ModalStateContext);
  if (!state) throw new Error('Cannot find ModalProvider');
  return state;
};

export const useModalAction = () => {
  const dispatch = useContext(ModalActionContext);
  console.log(dispatch);
  if (!dispatch) throw new Error('Cannot find ModalProvider');

  return {
    openModal(modalType, data) {
      dispatch({ type: 'open', modalType, data });
    },
    closeModal(modalType = '') {
      dispatch({
        type: 'close',
        modalType,
      });
    },
    setModalData(data) {
      dispatch({ type: 'set_data', data });
    },

    resetModal() {
      dispatch({ type: 'reset' });
    },
  };
};
