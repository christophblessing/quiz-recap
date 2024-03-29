export type ContextType = {
  quizEnded: boolean;
  setQuizEnded: React.Dispatch<React.SetStateAction<boolean>>;
  results: ResultType[];
  setResults: React.Dispatch<React.SetStateAction<ResultType[]>>;
  numberOfQuestions: number;
  setNumberOfQuestions: React.Dispatch<React.SetStateAction<number>>;
  setQuizStarted: React.Dispatch<React.SetStateAction<boolean>>;
};

export enum QuestionTypes {
  MultipleChoice = 'multiple-choice',
  SingleChoice = 'single-choice',
}

export type QuizType =
  | QuestionTypes.MultipleChoice
  | QuestionTypes.SingleChoice;

export type Data = QuestionType[];

export type QuestionType = {
  id: string;
  points: number;
  type: QuizType;
  text: string;
  answers: AnswerType[];
};

export type AnswerType = {
  id: string;
  correct: boolean;
  text: string;
};

export type ResultType = {
  id: string;
  question: QuestionType;
  correctlyAnswered: boolean;
};
