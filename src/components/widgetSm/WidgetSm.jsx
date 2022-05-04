import { Visibility } from '@material-ui/icons';
import './widgetSm.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/user/?new=true');
        setUsers(res.data);
        console.log(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.img || '/assets/3.jpg'}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle"></span>
            </div>
            <button className="widgetSmButton">
              <Visibility />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
