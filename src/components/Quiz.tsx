import React, { useEffect, useState } from 'react';
import {
  IonIcon,
  IonCardSubtitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/react';
import {
  helpOutline,
  closeCircleOutline,
  checkmarkCircleOutline
} from 'ionicons/icons';
interface QuizProps {
  question: string;
  choices: ChoiceProps[];
}

interface ChoiceProps {
  str: string;
  correct: boolean;
}
const Quiz: React.FC<QuizProps> = ({ question, choices }) => {
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number>();
  const handleAnswer = (i: number) => {
    setIsCorrect(choices[i].correct);
    setShowFeedback(true);
    setSelectedAnswer(i);
  };
  return (
    <IonCard>
      <IonCardHeader
        style={{
          background: '#c44',
          padding: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2em',
          textAlign: 'center'
        }}
      >
        <IonIcon icon={helpOutline}></IonIcon>
      </IonCardHeader>
      <IonCardHeader>
        <IonCardTitle>{question}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {choices.map((item, index: number) => (
          <IonButton
            color={selectedAnswer === index ? 'primary' : 'medium'}
            key={index}
            expand="block"
            fill={selectedAnswer === index ? 'solid' : 'outline'}
            onClick={() => handleAnswer(index)}
            size="large"
          >
            {item.str}
          </IonButton>
        ))}
      </IonCardContent>
      {showFeedback && (
        <IonCardHeader>
          <IonCardSubtitle>
            {isCorrect ? (
              <IonCard>
                <IonCardContent
                  style={{
                    background: '#5a5',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%'
                  }}
                >
                  <IonIcon
                    style={{
                      fontSize: '2em',
                      marginRight: '20px',
                      textAlign: 'center'
                    }}
                    icon={checkmarkCircleOutline}
                    color="white"
                  />
                  <div>
                    <h2>Well done</h2>
                    <h3> You're Correct</h3>
                  </div>
                </IonCardContent>
              </IonCard>
            ) : (
              <IonCard>
                <IonCardContent
                  style={{
                    background: '#a55',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '100%'
                  }}
                >
                  <div>
                    <IonIcon
                      style={{
                        marginRight: '20px',
                        fontSize: '2em',
                        textAlign: 'center'
                      }}
                      icon={closeCircleOutline}
                      color="white"
                    />
                  </div>
                  <div>
                    <h2>Oh no!</h2>
                    <h3>That's not the correct answer.</h3>
                  </div>
                </IonCardContent>
              </IonCard>
            )}
          </IonCardSubtitle>
        </IonCardHeader>
      )}
    </IonCard>
  );
};

export default Quiz;
