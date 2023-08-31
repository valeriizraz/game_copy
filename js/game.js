'use strict';

(function() {
  const VARIANTES_RES = ['камень', 'ножницы', 'бумага'];

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function game() {
    const check = {
      player: 0,
      computer: 0,
    }

    return function gameStart() {
      const randStr = getRandomIntInclusive(0, 2);
      console.log(`Компьютер выбрал: ${randStr}`);
    
    const user = prompt(`${VARIANTES_RES.join(', ')}. Введите вариант ответа`);
    console.log(`Игрок выбрал ${user}`);

    if (user == 0) {
      gameStart();
    }

    if (user === null) {
      if (confirm('Вы уверены?')) {
        alert(`Вы: ${check.player} Компьютер: ${check.computer}`);
      }
    }

    if (user === null) {
      return;
    }

    if (+user === 0) {
      return;
    }
    
    const userStr = VARIANTES_RES.indexOf(VARIANTES_RES
        .find(elem => elem
            .startsWith(user
                .toLocaleLowerCase())));
    console.log(userStr);
              
    if (randStr === userStr) {
      alert('Ничья');
    } else if
      ((randStr === 0 && userStr === 2) ||
      (randStr === 1 && userStr === 0) ||
      (randStr === 2 && userStr === 1)) {
        check.player++;
        alert('Вы победили!');
    } else if 
      ((randStr === 0 && userStr === 1) ||
      (randStr === 1 && userStr === 2) ||
      (randStr === 2 && userStr === 0)) {
        check.computer++;
        alert('Вы проиграли');
      }

      return gameStart();
    }
  };

  window.RPS = game;
})();
