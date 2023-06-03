let dataRight = document.querySelectorAll('[data-right]');
let button0 = document.querySelector('.button0');
let answers = [
    'Волк',
    'Дикобраз',
    'Жираф'
];
button0.addEventListener('click',function(){
  for(let i in answers){
    if(dataRight[i].value == answers[i]){
      dataRight[i].setAttribute('class', 'right');
    }else{
      dataRight[i].setAttribute('class', 'wrong');
    }
  }
});

let good__predictions = [
    "Вас сегодня ждёт 5 по экзамену",
    "За твоей дверью уже стоит счастье.",
    "Повезет в денежных вопросах.",
    "Будешь много плакать, но только от радости.",
    "Тебя ожидает интересная поездка.",
    "Весь год будут помогать люди, которые сейчас рядом.",
    "Успешным будет любое начатое дело.",
  ];
  

  
  let timer = document.querySelector("#timer");
  let good__text = document.querySelector("#good__text");
  let button1 = document.querySelector(".button1");

  button0.addEventListener("click", function () {
    this.classList.remove("active");
    button1.classList.add("active");
  
    timerId3 = setInterval(function () {
      timer.textContent = random3 = getRandomInt(1, good__predictions.length);
    }, 100);
  });
  
  button1.addEventListener("click", function () {
    this.classList.remove("active");
    clearInterval(timerId3);
  
    good__text.textContent = good__predictions[random3 - 1];
   
  });
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }