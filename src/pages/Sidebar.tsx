import { IonHeader, IonMenu, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Sidebar = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonMenu>
  );
};
export default Sidebar;
