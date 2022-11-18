const COUNT_ANSWERS = 6;
import birdsData from "../../data/birdsData";

function createAnswerList(step) {

    const answer = document.createElement('section');
    answer.className = "answer";

    const answerInner = document.createElement('div');
    answerInner.className = "answer__inner";

    const answerList = document.createElement('ul');
    answerList.className = "answer__list";

    for (let i = 0; i < COUNT_ANSWERS; i++) {
        let answerItem = document.createElement('li');
        answerItem.className = "answer__item";

        let answerItemText = document.createElement('span');
        answerItemText.className = 'answer__item__text';
        answerItemText.innerHTML = birdsData[step][i].name;
        answerItem.append(answerItemText);
        answerList.append(answerItem);
    }
    answerInner.append(answerList);
    answer.append(answerInner);

    return answer;
}

export default createAnswerList;
