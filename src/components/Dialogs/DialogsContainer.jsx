import React from 'react';
import { connect } from 'react-redux';
import { addMess, onMessChange } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessText: state.dialogsPage.newMessText,
  };
};
const DialogsContainer = connect(mapStateToProps, { addMess, onMessChange })(Dialogs);

export default DialogsContainer;
