import axiosClient from '../axios';

export function getQuiz(quizId){
    return axiosClient.get(`/quiz/${quizId}`);
}

export function calculateResult(quizResponse){
    return axiosClient.post('/quiz/calculateresult', JSON.stringify(quizResponse));
}
