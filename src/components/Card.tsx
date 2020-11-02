import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle
} from '@ionic/react';
import React from 'react';

const Card = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>Card Sub-title</IonCardSubtitle>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <h2>Hello world</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iusto
          numquam ducimus. Dolorum ipsam rerum nulla molestiae aut sint,
          ducimus, laborum alias quasi cum consectetur consequatur, nobis
          architecto obcaecati? Dolorem?
        </p>
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
