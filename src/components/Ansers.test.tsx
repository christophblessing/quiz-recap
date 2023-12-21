import { render, screen } from '@testing-library/react';
import { QuestionTypes } from '../types';
import Answers from './Answers';

const testData = {
  answers: [
    {
      id: 'answer_01',
      correct: true,
      text: 'Answer 1',
    },
    {
      id: 'answer_02',
      correct: false,
      text: 'Answer 2',
    },
  ],
};

test('renders radios with multiple choice question', async () => {
  render(
    <Answers
      type={QuestionTypes.MultipleChoice}
      answers={testData.answers}
      handleSelection={() => {}}
    />
  );

  const answers = await screen.findAllByRole('radio');
  expect(answers.length).toBeGreaterThanOrEqual(1);
});

test('renders checkboxes with multiple answer question', async () => {
  render(
    <Answers
      type={QuestionTypes.MultipleAnswer}
      answers={testData.answers}
      handleSelection={() => {}}
    />
  );

  const answers = await screen.findAllByRole('checkbox');
  expect(answers.length).toBeGreaterThanOrEqual(1);
});
