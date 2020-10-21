import React from 'react';
import { IonIcon, IonCard, IonCardContent, IonCardHeader } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';
const ReadCard: React.FC = ({ children }) => {
  return (
    <IonCard>
      <IonCardHeader
        style={{
          background: '#4ac',
          padding: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2em',
          textAlign: 'center'
        }}
      >
        <IonIcon icon={bookOutline}></IonIcon>
      </IonCardHeader>
      <IonCardContent>
        <div style={{ margin: '20px 0' }}>{children}</div>
      </IonCardContent>
    </IonCard>
  );
};

export default ReadCard;
