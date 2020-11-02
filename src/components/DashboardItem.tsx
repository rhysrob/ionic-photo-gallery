import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonProgressBar,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { FC } from 'react';
import { readBuilderProgram } from 'typescript';

type Props = {
  pageTitle: string;
  progress: number;
  heroImage: string;
};

const DashboardItem: FC<Props> = ({ heroImage, pageTitle, progress }) => {
  return (
    <IonCard>
      <IonCardHeader
        style={{
          height: 100,
          background: `url(${heroImage}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <IonCardTitle
          style={{
            padding: '10px 20px',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            textAlign: 'center'
          }}
        >
          {pageTitle}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="ion-align-items-center">
        <p className="ion-float-left">You've almost completed this lesson.</p>
        <IonButton className="ion-float-end">Continue</IonButton>
      </IonCardContent>
      <IonProgressBar value={progress / 100} />
    </IonCard>
  );
};

export default DashboardItem;
