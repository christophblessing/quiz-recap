import { useEffect, useState } from 'react';
import { AnswerType, QuestionTypes, QuizType } from '../types';
import Markdown from './Markdown';

const Answers = ({
  type,
  quizId,
  answers,
  showCorrect,
  handleSelection,
}: {
  type: QuizType;
  quizId: number;
  answers: AnswerType[];
  showCorrect: boolean;
  handleSelection: (answer: AnswerType) => void;
}) => {
  const [shuffledAnswers, setShuffledAnswers] = useState(answers);

  useEffect(() => {
    const shuffledAnswers = [...answers].sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffledAnswers);
  }, [answers]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const id = event.currentTarget.id;
    const answer = answers.find((answer) => {
      return answer.id === id;
    })!;
    handleSelection(answer);
  };

  return (
    <div className="qr-pb-2" data-testid="answers">
      {shuffledAnswers.map((answer: AnswerType) => {
        const indicatorClass = showCorrect
          ? answer.correct
            ? ' qr-bg-success-light'
            : ' qr-bg-danger-light'
          : ' qr-bg-neutral-light';
        return (
          <div
            key={answer.id + '_' + quizId}
            className={
              'qr-mb-2 qr-flex qr-items-center qr-rounded qr-p-2' +
              indicatorClass
            }
          >
            <input
              id={answer.id}
              type={type === QuestionTypes.SingleChoice ? 'radio' : 'checkbox'}
              className="qr-peer qr-accent-primary"
              name={'answer'}
              onChange={handleOnChange}
              disabled={showCorrect}
            ></input>
            <label
              className="qr-w-100 qr-ml-2 qr-grow peer-checked:qr-font-bold"
              htmlFor={answer.id}
            >
              <Markdown content={answer.text}></Markdown>
              {showCorrect && (
                <small>
                  {answer.correct ? 'correct answer' : 'incorrect answer'}
                </small>
              )}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Answers;
