import React from "react";
import User from "../containers/User";
import _ from 'lodash'


const Sidebar = ({ contacts }) => {
    return (
        <aside className="Sidebar">
            {_.map(contacts, contact => <User user={contact} key={contact.user_id} />)}
        </aside>
    );
};

export default Sidebar;