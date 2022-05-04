import { useEffect, useState } from 'react';
import './widgetLg.css';
import { format } from 'timeago.js';
import axios from 'axios';

export const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/order');
        setOrders(res.data);
        console.log(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {orders.map((order) => (
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                {/* <img src={order} alt="" className="widgetLgImg" /> */}
                <span className="widgetLgName">{order.userId}</span>
              </td>
              <td className="widgetLgDate">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">$ {order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </table>
      </h3>
    </div>
  );
};
