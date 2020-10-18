import React, {useState} from 'react';
import { IonChip, IonLabel, IonHeader, IonIcon, IonGrid, IonCol, IonRow,IonCardSubtitle, IonAlert, IonCard,IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import { helpOutline, closeCircleOutline,  checkmarkCircleOutline } from 'ionicons/icons';
interface QuizProps  {
  question:string,
  choices:ChoiceProps[]
}

interface ChoiceProps {
  str:string;
  correct:boolean

} 
const Quiz: React.FC<QuizProps> = ({ question, choices }) => {
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [showFeedback, setShowFeedback] = useState<boolean>(false)
  const handleAnswer = (i:number) => {
    setIsCorrect(choices[i].correct)
    setShowFeedback(true)
  }
  return (
<IonCard>
  <IonHeader style={{
      background:'#c44', 
      padding:20,
      display:'flex', 
      alignItems:'center', 
      justifyContent:'center',
      color:'white',
      fontSize:'2em',
       textAlign:'center'}}>
    <IonIcon icon={helpOutline}></IonIcon>
    </IonHeader>
    <IonCardHeader>
      <IonCardTitle>{question}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
    <IonGrid>
    <IonCol>
{choices.map((item , index:number) => (
      <IonButton style={{width:'100%'}} key={index} size='large' onClick={()=>handleAnswer(index)}>{item.str}</IonButton>
    ))}
    </IonCol>
    </IonGrid>
    
    </IonCardContent>
    {showFeedback &&
    <IonCardHeader>
    <IonCardSubtitle>
    {isCorrect ? (
    <IonCard>
    <IonCardContent style={{
      background:'#5a5',
      color:'white',
      display:'grid', 
      alignItems:'center', 
      gridTemplateColumns:'auto auto',
      gridColumnGap:'20px',
      width:"100%"}}>
      
          <IonIcon style={{fontSize:'2em',textAlign:'center'}} icon={checkmarkCircleOutline} color="white" />
      <div>
          <h2>Well done</h2>
          <h3> You're Correct</h3>
          </div>
          </IonCardContent>
        </IonCard>)
        : (<IonCard>
      
    <IonCardContent style={{
      background:'#a55',
      color:'white',
      display:'grid', 
      alignItems:'center', 
      gridTemplateColumns:'auto auto',
      gridColumnGap:'20px',
      width:"100%"}}>
      <div>
          <IonIcon style={{fontSize:'2em',textAlign:'center'}} icon={closeCircleOutline} color="white" />
          </div>
      <div>
          <h2>Oh no!</h2>
          <h3>That's not the correct answer.</h3>
          </div>
          </IonCardContent>
        </IonCard>)}
        </IonCardSubtitle>
    </IonCardHeader>
    
    }

    </IonCard>
  );
};

export default Quiz;