import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { list } from 'ionicons/icons';
import React from 'react';

const Sidebar = () => {
  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={list} slot="start"></IonIcon>
            <a href="/dashboard">Dashboard</a>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
export default Sidebar;
