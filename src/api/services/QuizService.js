import axiosClient from '../axios';

export function getQuiz(quizId){
    return axiosClient.get(`/quiz/${quizId}`);
}
