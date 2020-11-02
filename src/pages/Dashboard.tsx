import { IonCard, IonCardContent, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import DashboardItem from '../components/DashboardItem';

const Dashboard = () => {
  const [pages] = useState([
    {
      heroImage: 'https://source.unsplash.com/featured/?space',
      pageTitle: 'Page One',
      progress: 25
    },
    {
      heroImage: 'https://source.unsplash.com/featured/?food',
      pageTitle: 'Page One',
      progress: 50
    },
    {
      heroImage: 'https://source.unsplash.com/featured/?trees',
      pageTitle: 'Page One',
      progress: 75
    }
  ]);

  return (
    <IonPage>
      <IonCard>
        <IonCardContent>
          {pages.map((item: any, idx: number) => (
            <DashboardItem
              heroImage={item.heroImage}
              pageTitle={item.pageTitle}
              progress={item.progress}
              key={idx}
            />
          ))}
        </IonCardContent>
      </IonCard>
    </IonPage>
  );
};

export default Dashboard;
