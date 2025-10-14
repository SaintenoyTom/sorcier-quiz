import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import questions from '../../data/questions.json';

interface Answer {
  questionId: number;
  optionId: string;
}

interface QuizState {
  current: number;
  answers: Answer[];
  reset: () => void;
  answer: (questionId: number, optionId: string) => void;
}

export const useQuizStore = create<QuizState>((set: any) => ({
  current: 1,
  answers: [],
  reset: () => set({ current: 1, answers: [] }),
  answer: (questionId: number, optionId: string) => set((state: QuizState) => ({
    answers: [...state.answers.filter((a: Answer) => a.questionId !== questionId), { questionId, optionId }],
    current: Math.min(state.current + 1, questions.length),
  })),
}));
