import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonPopover,
  IonProgressBar,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Sidebar from './pages/Sidebar';

const App: React.FC = () => (
  <IonApp>
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>HEllo World</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonSplitPane contentId="main">
        {/*--  the side menu  --*/}
        <Sidebar />

        {/*-- the main content --*/}
        <IonPage id="main" style={{ paddingTop: '70px' }}>
          <div style={{ paddingTop: '70px' }}>
            <IonCard>
              <IonCardHeader>
                <IonTitle>Title of the page</IonTitle>
                <IonProgressBar value={0.5} />
                <IonProgressBar value={0.2} />
              </IonCardHeader>
              <IonCardContent>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Card</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <h2>Header h2</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque nobis illo culpa expedita, dolorum, in tenetur
                      deserunt natus earum omnis officiis molestias velit
                      debitis repudiandae quaerat nesciunt! Reprehenderit,
                      dicta. Impedit!
                    </p>
                  </IonCardContent>
                </IonCard>
                <br />
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Card</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <h2>Header h2</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque nobis illo culpa expedita, dolorum, in tenetur
                      deserunt natus earum omnis officiis molestias velit
                      debitis repudiandae quaerat nesciunt! Reprehenderit,
                      dicta. Impedit!
                    </p>
                  </IonCardContent>
                </IonCard>
                <br />
              </IonCardContent>
            </IonCard>
          </div>
        </IonPage>
      </IonSplitPane>
    </IonContent>
  </IonApp>
);

export default App;
