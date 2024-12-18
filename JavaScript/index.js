// const arrow = document.querySelectorAll('.fa-chevron-down');
const questionContainer = document.querySelectorAll('.col-12');

questionContainer.forEach((questionCont)=>{
    questionCont.addEventListener('click',(e)=>{
        const questionText = e.currentTarget.querySelector('.question-css');
        const arrow = e.currentTarget.querySelector('.fa-chevron-down');

        if (arrow.classList.contains('rotate-down')) {
            arrow.classList.remove('rotate-down');
            arrow.classList.add('rotate-up');
            questionText.style.color = '#2980B9';
        } else {
            arrow.classList.remove('rotate-up');
            arrow.classList.add('rotate-down');
            questionText.style.color = '#333333';
        }

    })
});
