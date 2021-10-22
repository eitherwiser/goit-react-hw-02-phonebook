import React from "react";
import PropTypes from "prop-types";
import s from "./ContactsList.module.css";

export default function ContacstList({ contacts, onDelete }) {
  return (
    <ul className={s.list}>
      <h6>Contacts list</h6>
        {contacts.map(({id, name, number}) => (
          <li key={id} id={id} className={s.list_item}>
            <span>{name}&nbsp;:</span>
            <span>{number}</span>
        <button type="button" className={s.btn}
          onClick={(e) => onDelete(e.currentTarget.parentNode.id)}
          >
          <span className="material-icons">
delete
</span>
        </button>
      </li>
        ))}
      </ul>
  );
}

ContacstList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};


//onDelete(e.currentTarget.parentNode.key