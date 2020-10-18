import React from 'react'
import {IonIcon, IonHeader, IonCard, IonCardContent} from '@ionic/react';
import { bookOutline } from 'ionicons/icons';
const ReadCard: React.FC = ({children}) => {
  return (
    <IonCard>
    <IonHeader style={{
      background:'#4ac', 
      padding:20,
      display:'flex', 
      alignItems:'center', 
      justifyContent:'center',
      color:'white',
      fontSize:'2em',
       textAlign:'center'}}>
    <IonIcon icon={bookOutline}></IonIcon>
    </IonHeader>
    <IonCardContent>{children}</IonCardContent>
    </IonCard>
    
  )
}

export default ReadCard;