import { FormEvent, useContext, useState } from 'react';
import AppContext from '../AppContext';
import { Question, Answer } from '../types';
import Answers from './Answers';
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
  const [selectedAnswerValue, setSelectedAnswerValue] =
    useState<boolean>(false);
  const { index, setIndex } = useContext(AppContext);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (selectedAnswerValue !== null) {
      setIsCorrect(selectedAnswerValue);
      setSubmitted(true);
    }
  };

  const handleRadioChange = (value: boolean) => {
    setSelectedAnswerValue(value);
  };

  const handleNextQuestion = () => {
    setSubmitted(false);
    setIndex(index + 1);
  };

  return (
    <form onSubmit={submitHandler}>
      <fieldset disabled={submitted}>
        <QuestionText text={question.text} type={question.type}></QuestionText>
        <Answers
          type={question.type}
          answers={answers}
          handleSelection={handleRadioChange}
        ></Answers>
        {!submitted && <button>Submit Answer</button>}
      </fieldset>
      <div>
        {submitted && (
          <p>Your answer was {isCorrect ? ' correct' : ' not correct'}</p>
        )}
        {submitted && (
          <button type="button" onClick={handleNextQuestion}>
            Next Question
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
