import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import ReadCard from '../components/ReadCard';
import './Tab1.css';
import Quiz from '../components/Quiz';
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MCQ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            display: 'grid',
            gridRowGap: '30px',
            paddingBottom: '100px'
          }}
        >
          <ReadCard>
            <p>
              "I do believe thGorwelion55] vaccines will be available in the
              first quarter of next year, I do believe that monoclonal
              antibodies to treat patients and save lives will be available in
              the coming months," he said.
            </p>
            <p>
              "It's with that context that I think we need to reduce
              transmission now and we need to get ourselves back to the
              beginning of September as a country, not in piecemeal, not in
              fragments across the country, but as a whole country."
            </p>
          </ReadCard>

          <Quiz
            question="Question One"
            choices={[
              { str: 'Choice A', correct: false },
              { str: 'Choice B', correct: false },
              { str: 'Choice C', correct: true }
            ]}
          />

          <Quiz
            question="Question One"
            choices={[
              { str: 'Choice A', correct: false },
              { str: 'Choice B', correct: false },
              { str: 'Choice C', correct: true }
            ]}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
