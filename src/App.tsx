import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import Page from './pages/Page';
import Dashboard from './pages/Dashboard';
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
        <IonPage id="main">
          <IonReactRouter>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/page" component={Page} />

            <IonRouterOutlet></IonRouterOutlet>
          </IonReactRouter>
        </IonPage>
      </IonSplitPane>
    </IonContent>
  </IonApp>
);

export default App;
