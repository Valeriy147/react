import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let addMessage = React.createRef();
  let messagesElements = props.messages.map((m) => <Message message={m.message} key={m.id} />);

  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} ava={d.ava} />
  ));
  let onAddMess = () => {
    props.addMess();
  };

  let onMessChange = () => {
    let text = addMessage.current.value;
    props.onMessChange(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            ref={addMessage}
            onChange={onMessChange}
            value={props.newMessText}
            className={s.textarea}></textarea>
          <button onClick={onAddMess} className={s.button}>
            Добасить сообщение
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
