import React from "react";
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message/Message";
import s from './Dialogs.module.css';



const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Vasya' },
    { id: 3, name: 'Hren' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Maksim' }
  ]

  let messagges = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your IT camasutra' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' }
  ]

  let messagesElements = messagges.map(m => <Message message={m.message} id={m.id} />);
  let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        {dialogElements}

  
      </div>
      <div className={s.messages}>


        {messagesElements}


      </div>
    </div>
  )

}

export default Dialogs;