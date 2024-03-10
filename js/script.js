// общие переменные
const days = document.querySelectorAll(".short-week-days > li");
const mainCurrentDay = document.querySelector(".main-current-day");
const mover = document.querySelector(".current-day");

const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

new Sortable(mover, {
    group: 'column',
    animation: 150
});

const listDays = [
    "ПОНЕДЕЛЬНИК",
    "ВТОРНИК",
    "СРЕДА",
    "ЧЕТВЕРГ",
    "ПЯТНИЦА",
    "СУББОТА",
    "ВОСКРЕСЕНЬЕ"
];


days.forEach(day => {
    day.addEventListener("click", () => {
        const oldSelectedShortDay = document.querySelector(".selected-short-day");
        oldSelectedShortDay.classList.remove("selected-short-day");
        day.classList.add("selected-short-day");
        const oldSelectedShortDayID = day.id.slice(1);
        mainCurrentDay.textContent = listDays[oldSelectedShortDayID];
        console.log(day.textContent);
    });
});


rightArrow.addEventListener("click", () => {
    let indexOfEl = listDays.indexOf(mainCurrentDay.textContent)
    if(indexOfEl >= 6){
        indexOfEl = 0;
        const currentDay = document.querySelector(`#i6`);
        const nextDay = document.querySelector(`#i0`);
        currentDay.classList.remove("selected-short-day");
        nextDay.classList.add("selected-short-day");
        mainCurrentDay.textContent = listDays[indexOfEl];
    } else {
        const currentDay = document.querySelector(`#i${indexOfEl}`);
        const nextDay = document.querySelector(`#i${indexOfEl+1}`);
        currentDay.classList.remove("selected-short-day");
        nextDay.classList.add("selected-short-day");
        mainCurrentDay.textContent = listDays[indexOfEl+1];
    }
    
});


leftArrow.addEventListener("click", () => {
    let indexOfEl = listDays.indexOf(mainCurrentDay.textContent)
    if(indexOfEl <= 0){
        indexOfEl = 6;
        const currentDay = document.querySelector(`#i0`);
        const nextDay = document.querySelector(`#i6`);
        currentDay.classList.remove("selected-short-day");
        nextDay.classList.add("selected-short-day");
        mainCurrentDay.textContent = listDays[indexOfEl];
    } else {
        const currentDay = document.querySelector(`#i${indexOfEl}`);
        const nextDay = document.querySelector(`#i${indexOfEl-1}`);
        currentDay.classList.remove("selected-short-day");
        nextDay.classList.add("selected-short-day");
        mainCurrentDay.textContent = listDays[indexOfEl-1];
    }
});


// понедельник
const addBtn = document.querySelector(".addTask");

addBtn.addEventListener("click", () => {
    const dayContainer = document.querySelector(".current-day")
    const newDay = dayContainer.children.length+1
    if (newDay <= 10) {
        const container = document.createElement("div");
        container.classList.add("task");
        container.innerHTML = `
            <img src="img/drag.svg" alt="">
            <span>${newDay}</span>
            <input type="time" name="" id="" value="08:00">
            <input type="">
            <img src="img/delete.svg" alt="" class="delete">
        `;
        dayContainer.appendChild(container);
        const btn = container.querySelector(".delete");
        btn.addEventListener("click", () => {
            if (document.querySelectorAll(".delete").length > 1) {
                const parent = btn.parentElement;
                const dayTask = parent.parentElement;
                parent.remove();
                const allTasks = dayTask.querySelectorAll(".task");
                console.log(allTasks);

                allTasks.forEach((task, index) => {
                    const taskNumber = task.querySelector("span");
                    taskNumber.textContent = index + 1;
                });
            }
        });

        container.addEventListener("dragend", () => { // touchend
            const allTasks = document.querySelectorAll(".task");
            console.log(allTasks);
            allTasks.forEach((task, index) => {
                const taskNumber = task.querySelector("span");
                taskNumber.textContent = index + 1;
            });
        });
    }
});

function addDelete() {
    const deletesBtn = document.querySelectorAll(".delete");    

    deletesBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            if (document.querySelectorAll(".delete").length > 1) {
                const parent = btn.parentElement;
                const dayTask = parent.parentElement;
                parent.remove();
                const allTasks = dayTask.querySelectorAll(".task");
                console.log(allTasks);

                allTasks.forEach((task, index) => {
                    const taskNumber = task.querySelector("span");
                    taskNumber.textContent = index + 1;
                });
            }
        });
    });
}

addDelete();
