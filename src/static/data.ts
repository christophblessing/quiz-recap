import { Data, QuestionTypes } from '../types';

const markdownQuestion = `# Markdown

## A question

> A block quote

A paragraph with *emphasis* and **strong importance**.


[a URL](https://daringfireball.net/projects/markdown/).

### Lists

1. First ordered list item
2. Another item

* Unordered
* Unordered
* [ ] todo
* [x] done

A table:

| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
| Data 3   | Data 4   |
`;

export const exampleData: Data = [
  {
    id: '1',
    points: 1,
    type: QuestionTypes.SingleChoice,
    text: 'What is the capital of France?',
    answers: [
      { id: 'a', correct: false, text: 'Berlin' },
      { id: 'b', correct: true, text: 'Paris' },
      { id: 'c', correct: false, text: 'Madrid' },
      { id: 'd', correct: false, text: 'Rome' },
    ],
  },
  {
    id: '2',
    points: 2,
    type: QuestionTypes.SingleChoice,
    text: 'Which planet is known as the Red Planet?',
    answers: [
      { id: 'a', correct: false, text: 'Earth' },
      { id: 'b', correct: false, text: 'Jupiter' },
      { id: 'c', correct: true, text: 'Mars' },
      { id: 'd', correct: false, text: 'Venus' },
    ],
  },
  {
    id: '3',
    points: 1,
    type: QuestionTypes.MultipleChoice,
    text: 'What is considered a mammal?',
    answers: [
      { id: 'a', correct: true, text: 'Elephant' },
      { id: 'b', correct: true, text: 'Blue Whale' },
      { id: 'c', correct: true, text: 'Giraffe' },
      { id: 'd', correct: false, text: 'Banana' },
    ],
  },
  {
    id: '4',
    points: 2,
    type: QuestionTypes.SingleChoice,
    text: 'Who wrote "Romeo and Juliet"?',
    answers: [
      { id: 'a', correct: false, text: 'Charles Dickens' },
      { id: 'b', correct: false, text: 'Jane Austen' },
      { id: 'c', correct: true, text: 'William Shakespeare' },
      { id: 'd', correct: false, text: 'Homer' },
    ],
  },
  {
    id: '5',
    points: 1,
    type: QuestionTypes.SingleChoice,
    text: 'In which year did the Titanic sink?',
    answers: [
      { id: 'a', correct: false, text: '1905' },
      { id: 'b', correct: false, text: '1922' },
      { id: 'c', correct: true, text: '1912' },
      { id: 'd', correct: false, text: '1920' },
    ],
  },
  {
    id: '6',
    points: 2,
    type: QuestionTypes.MultipleChoice,
    text: 'What are cities in Japan?',
    answers: [
      { id: 'a', correct: false, text: 'Seoul' },
      { id: 'b', correct: false, text: 'Beijing' },
      { id: 'c', correct: true, text: 'Tokyo' },
      { id: 'd', correct: true, text: 'Osaka' },
    ],
  },
  {
    id: '7',
    points: 1,
    type: QuestionTypes.SingleChoice,
    text: 'Which gas do plants absorb during photosynthesis?',
    answers: [
      { id: 'a', correct: true, text: 'Carbon Dioxide' },
      { id: 'b', correct: false, text: 'Oxygen' },
      { id: 'c', correct: false, text: 'Nitrogen' },
      { id: 'd', correct: false, text: 'Methane' },
    ],
  },
  {
    id: '8',
    points: 2,
    type: QuestionTypes.SingleChoice,
    text: 'Who is known as the "Father of Computer Science"?',
    answers: [
      { id: 'a', correct: false, text: 'Bill Gates' },
      { id: 'b', correct: false, text: 'Steve Jobs' },
      { id: 'c', correct: true, text: 'Alan Turing' },
      { id: 'd', correct: false, text: 'Tim Berners-Lee' },
    ],
  },
  {
    id: '9',
    points: 1,
    type: QuestionTypes.MultipleChoice,
    text: 'What are oceans on Earth?',
    answers: [
      { id: 'a', correct: true, text: 'Indian Ocean' },
      { id: 'b', correct: true, text: 'Atlantic Ocean' },
      { id: 'c', correct: true, text: 'Pacific Ocean' },
      { id: 'd', correct: false, text: 'Fantastic Ocean' },
    ],
  },
  {
    id: '10',
    points: 2,
    type: QuestionTypes.SingleChoice,
    text: 'Who painted the Mona Lisa?',
    answers: [
      { id: 'a', correct: false, text: 'Vincent van Gogh' },
      { id: 'b', correct: true, text: 'Leonardo da Vinci' },
      { id: 'c', correct: false, text: 'Pablo Picasso' },
      { id: 'd', correct: false, text: 'Claude Monet' },
    ],
  },
  {
    id: '11',
    points: 2,
    type: QuestionTypes.SingleChoice,
    text: markdownQuestion,
    answers: [
      { id: 'a', correct: true, text: 'Markdown is pretty **great**!' },
      {
        id: 'b',
        correct: false,
        text: 'Markdown is only for `nerds`.',
      },
    ],
  },
];

export const testData: Data = [
  {
    id: 'id-01',
    points: 1,
    type: QuestionTypes.SingleChoice,
    text: 'What is the answer?',
    courseId: 'courseId-01',
    quizId: 'quizId-01',
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
  },
  {
    id: 'id-02',
    points: 1,
    type: QuestionTypes.SingleChoice,
    text: 'What is the answer?',
    courseId: 'courseId-01',
    quizId: 'quizId-02',
    answers: [
      {
        id: 'answer_03',
        correct: true,
        text: 'Answer 3',
      },
      {
        id: 'answer_04',
        correct: false,
        text: 'Answer 4',
      },
    ],
  },
  {
    id: 'id-03',
    points: 1,
    type: QuestionTypes.MultipleChoice,
    text: 'What is the answer?',
    answers: [
      {
        id: 'answer_05',
        correct: true,
        text: 'Answer 5',
      },
      {
        id: 'answer_06',
        correct: false,
        text: 'Answer 6',
      },
      {
        id: 'answer_07',
        correct: true,
        text: 'Answer 7',
      },
      {
        id: 'answer_08',
        correct: false,
        text: 'Answer 8',
      },
    ],
  },
  {
    id: 'id-04',
    points: 1,
    type: QuestionTypes.MultipleChoice,
    text: 'What is the answer?',
    answers: [
      {
        id: 'answer_09',
        correct: false,
        text: 'Answer 9',
      },
      {
        id: 'answer_10',
        correct: false,
        text: 'Answer 10',
      },
      {
        id: 'answer_11',
        correct: false,
        text: 'Answer 11',
      },
      {
        id: 'answer_12',
        correct: false,
        text: 'Answer 12',
      },
    ],
  },
] as Data;

export const testDataWithFourQuestions: Data = [
  {
    id: 'id-01',
    points: 1,
    type: QuestionTypes.SingleChoice,
    text: 'What is the answer?',
    courseId: 'courseId-01',
    quizId: 'quizId-01',
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
  },
  {
    id: 'id-02',
    points: 1,
    type: QuestionTypes.SingleChoice,
    text: 'What is the answer?',
    courseId: 'courseId-01',
    quizId: 'quizId-02',
    answers: [
      {
        id: 'answer_03',
        correct: true,
        text: 'Answer 3',
      },
      {
        id: 'answer_04',
        correct: false,
        text: 'Answer 4',
      },
    ],
  },
  {
    id: 'id-03',
    points: 1,
    type: QuestionTypes.MultipleChoice,
    text: 'What is the answer?',
    answers: [
      {
        id: 'answer_05',
        correct: true,
        text: 'Answer 5',
      },
      {
        id: 'answer_06',
        correct: false,
        text: 'Answer 6',
      },
      {
        id: 'answer_07',
        correct: true,
        text: 'Answer 7',
      },
      {
        id: 'answer_08',
        correct: false,
        text: 'Answer 8',
      },
    ],
  },
  {
    id: 'id-04',
    points: 1,
    type: QuestionTypes.MultipleChoice,
    text: 'What is the answer?',
    answers: [
      {
        id: 'answer_09',
        correct: false,
        text: 'Answer 9',
      },
      {
        id: 'answer_10',
        correct: false,
        text: 'Answer 10',
      },
      {
        id: 'answer_11',
        correct: false,
        text: 'Answer 11',
      },
      {
        id: 'answer_12',
        correct: false,
        text: 'Answer 12',
      },
    ],
  },
] as Data;
