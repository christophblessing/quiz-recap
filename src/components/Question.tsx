import { QuestionTypes, QuizType } from '../types';
import Markdown from './Markdown';

const Question = ({
  text,
  type,
  showResult,
  isCorrect,
}: {
  text: string;
  type: QuizType;
  showResult: boolean;
  isCorrect: boolean;
}) => {
  return (
    <div className="qr-pb-4">
      <Markdown content={text}></Markdown>

      {showResult ? (
        <p>Your answer was {isCorrect ? ' correct ✅' : ' not correct ❌'}</p>
      ) : (
        <em>
          {type === QuestionTypes.MultipleChoice
            ? 'Select all correct answers.'
            : 'Select the correct answer.'}
        </em>
      )}
    </div>
  );
};

export default Question;
