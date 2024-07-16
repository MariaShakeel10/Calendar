document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const monthAndYear = document.getElementById('monthAndYear');
    const calendarDays = document.getElementById('calendarDays');

    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    function generateCalendar(month, year) {
        let firstDay = new Date(year, month, 1);
        let lastDay = new Date(year, month + 1, 0);
        let startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - startDate.getDay());

        calendarDays.innerHTML = '';

        while (startDate <= lastDay) {
            for (let i = 0; i < 7; i++) {
                let day = startDate.getDate();
                let dateCell = document.createElement('div');
                dateCell.textContent = day;
                if (startDate.getMonth() !== month) {
                    dateCell.classList.add('other-month');
                }
                if (startDate.toDateString() === today.toDateString()) {
                    dateCell.classList.add('today');
                }
                calendarDays.appendChild(dateCell);
                startDate.setDate(startDate.getDate() + 1);
            }
        }

        monthAndYear.textContent = `${months[month]} ${year }`;
    }

    function goToPreviousMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    }

    function goToNextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    }

    prevButton.addEventListener('click', goToPreviousMonth);
    nextButton.addEventListener('click', goToNextMonth);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    generateCalendar(currentMonth, currentYear);
});