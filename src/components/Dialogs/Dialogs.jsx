import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';


const DioalogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

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
  let dialogElements = dialogs.map(d => <DioalogItem name={d.name} id={d.id} />);
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