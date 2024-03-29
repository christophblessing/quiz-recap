import { useContext } from 'react';
import { ResultType } from '../types';
import { Context } from '../Context';
import Button from './Button';
import styles from './Result.module.scss';
import { useTranslation } from 'react-i18next';

const Result = () => {
  const {
    results,
    numberOfQuestions,
    setQuizEnded,
    setQuizStarted,
    setResults,
  } = useContext(Context);
  const { t } = useTranslation();

  const correctAnswers = results.reduce(
    (accumulator: number, result: ResultType) =>
      result.correctlyAnswered ? (accumulator = accumulator + 1) : accumulator,
    0,
  );
  return (
    <div className={styles.result}>
      <h3 className={styles.h3}>{t('result.title')}</h3>
      {results.length ? (
        <table className={styles.table}>
          <caption className={styles.caption}>
            {t('result.overview', { correctAnswers, numberOfQuestions })}
          </caption>
          <thead>
            <tr>
              <th aria-label={t('result.correct')}></th>
              <th aria-label={t('result.question')}></th>
            </tr>
          </thead>
          <tbody>
            {results.map((result: ResultType) => {
              return (
                <tr className={styles.tr} key={result.id}>
                  <td className={styles.td}>
                    {result.correctlyAnswered ? '✅' : '❌'}
                  </td>
                  <td className={styles.td}>{result.question.text}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>{t('result.unanswered')}</p>
      )}
      <div className={styles.buttonBar}>
        <Button
          text={t('result.new')}
          onClickAction={() => {
            setQuizStarted(false);
            setQuizEnded(false);
            setResults([]);
          }}
        />
      </div>
    </div>
  );
};

export default Result;
