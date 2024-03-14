import { useContext } from 'react';
import { ResultType } from '../types';
import { Context } from '../Context';
import Button from './Button';
import Markdown from './Markdown';

const Result = () => {
  const {
    results,
    numberOfQuestions,
    setQuizEnded,
    setQuizStarted,
    setResults,
  } = useContext(Context);

  const correctAnswers = results.reduce(
    (accumulator: number, result: ResultType) =>
      result.correctlyAnswered ? (accumulator = accumulator + 1) : accumulator,
    0,
  );
  return (
    <>
      <h3 className="qr-pb-2 qr-text-lg">Result</h3>
      {results.length ? (
        <table className="qr-mb-6 qr-w-full">
          <caption className="qr-pb-4 qr-text-lg">
            You answered {correctAnswers} of {numberOfQuestions} correctly.
          </caption>
          <thead>
            <tr className="qr-border-b qr-border-neutral">
              <th aria-label="Correctly answered"></th>
              <th aria-label="Question Text"></th>
            </tr>
          </thead>
          <tbody>
            {results.map((result: ResultType) => {
              return (
                <tr key={result.id} className="qr-border-b qr-border-neutral">
                  <td className="qr-px-2 qr-py-2">
                    {result.correctlyAnswered ? '✅' : '❌'}
                  </td>
                  <td className="qr-px-2 qr-py-2">
                    <Markdown content={result.question.text}></Markdown>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>You did not answer any questions.</p>
      )}
      <div className="qr-flex qr-justify-end">
        <Button
          text="New Quiz"
          onClickAction={() => {
            setQuizStarted(false);
            setQuizEnded(false);
            setResults([]);
          }}
        />
      </div>
    </>
  );
};

export default Result;
