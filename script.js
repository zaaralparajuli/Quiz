document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quizForm');
    const resultsDisplay = document.getElementById('resultsDisplay');

    if (quizForm) {
        quizForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let score = 0;

            const q1 = document.querySelector('input[name="q1"]:checked');
            const q2 = document.querySelector('input[name="q2"]:checked');
            const q3 = document.querySelector('input[name="q3"]:checked');
            const q4 = document.querySelector('input[name="q4"]:checked');
            const q5 = document.querySelector('input[name="q5"]:checked');


            if (q1 && q1.value === 'B') score++;
            if (q2 && q2.value === 'C') score++;
            if (q3 && q3.value === 'B') score++;
            if (q4 && q4.value === 'A') score++;
            if (q5 && q5.value === 'B') score++;


            localStorage.setItem('quizScore', score);

            window.location.href = 'results.html';
        });
    }

    if (resultsDisplay) {
        const score = localStorage.getItem('quizScore');
        resultsDisplay.textContent = `You scored ${score} out of 5.`;
    }
});