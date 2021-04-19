import { createContext, useState } from 'react';
import Notification from "../components/ui/notification";

const NotificationContext = createContext({
  notification: null, // { title, message, status }
  showNotification: function() {},
  hideNotification: function () {},
});

 export function NotificationContextProvider(props) {
  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
