export enum QuestionType {
  FreeText = 0,
  Number,
  Radiobutton,
  Checkbox,
}

export interface Option {
  title: string;
  value: string;
}

export interface Question {
  type: QuestionType;
  id?: string;
  title: string;
  description?: string;
  options?: Option[];
  required?: boolean;
}

export interface QuestionsData {
  list: string[];
  entities: {
    [key: string]: Question;
  };
}

export interface UserResponse extends Question {
  userValue: string | string[];
}

export interface QuestionnaireResponse {
  responses: UserResponse[];
  date: string;
  id: string;
}

export interface Responses {
  [name: string]: QuestionnaireResponse[];
}
