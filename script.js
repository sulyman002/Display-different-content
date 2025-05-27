
const historyBtn = document.getElementById('history_click');
    const visionBtn = document.getElementById('vision_click');
    const goalsBtn = document.getElementById('goal_click');

    const historyCard = document.querySelector('.history_card');
    const visionCard = document.querySelector('.vision_card');
    const goalsCard = document.querySelector('.goals_card');

    const historyContent = document.querySelector('.history_content');
    const visionContent = document.querySelector('.vision-content');
    const goalsContent = document.querySelector('.goals_content');

    function hideAll() {
        historyCard.style.display = 'none';
        visionCard.style.display = 'none';
        goalsCard.style.display = 'none';
        historyContent.style.display = 'none';
        visionContent.style.display = 'none';
        goalsContent.style.display = 'none';
    }

    historyBtn.addEventListener('click', () => {
        hideAll();
        historyCard.style.display = 'block';
        historyContent.style.display = 'flex';
    });

    visionBtn.addEventListener('click', () => {
        hideAll();
        visionCard.style.display = 'block';
        visionContent.style.display = 'flex';
    });

    goalsBtn.addEventListener('click', () => {
        hideAll();
        goalsCard.style.display = 'block';
        goalsContent.style.display = 'flex';
    });

    hideAll();
    historyCard.style.display = 'block';
    historyContent.style.display = 'flex';


 
