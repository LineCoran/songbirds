import createAnswerList from "../answer/answer-list";
import createCardDescription from "../description/description-card";


export default function createGameQuestion(step) {
    const game = document.createElement('section');
    game.className = 'game';
    game.id = 'game';

    const question = document.createElement('div');
    question.className = 'question';

    const nextQuestionButton = document.createElement('button');
    nextQuestionButton.className = 'next__question';
    nextQuestionButton.innerHTML = 'Next question';

    question.append(createAnswerList(step), createCardDescription());
    game.append(question, nextQuestionButton);

    return game
}