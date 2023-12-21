import { FormEvent, useContext, useState } from 'react';
import AppContext from '../AppContext';
import { Question, Answer } from '../types';
import QuestionText from './QuestionText';

const Form = ({
  question,
  answers,
}: {
  question: Question;
  answers: Answer[];
}) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswerValue, setSelectedAnswerValue] = useState<
    boolean | null
  >(null);
  const { index, setIndex } = useContext(AppContext);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (selectedAnswerValue !== null) {
      setIsCorrect(selectedAnswerValue);
      setSubmitted(true);
    }
  };

  const getBooleanValue = (value: string): boolean => {
    return value.toLowerCase() === 'true' ? true : false;
  };

  const handleRadioChange = (event: any) => {
    setSelectedAnswerValue(getBooleanValue(event.currentTarget.value));
  };

  const handleNextQuestion = () => {
    setSubmitted(false);
    setIndex(index + 1);
  };

  return (
    <form onSubmit={submitHandler}>
      <fieldset disabled={submitted}>
        <QuestionText text={question.text}></QuestionText>
        {answers.map((answer) => (
          <div key={answer.id}>
            <input
              id={answer.id}
              type="radio"
              name={'answer'}
              value={answer.correct.toString()}
              onChange={handleRadioChange}
              required
              readOnly={submitted}
            ></input>
            <label htmlFor={answer.id}>{answer.text}</label>
          </div>
        ))}
        {!submitted && <button>Submit Answer</button>}
        {submitted && <p>{isCorrect ? 'Correct' : 'Not correct'}</p>}
      </fieldset>
      {submitted && (
        <button type="button" onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </form>
  );
};

export default Form;
