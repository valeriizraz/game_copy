'use strict';

(function() {
  const VARIANTES_RES = ['Камень', 'Ножницы', 'Бумага'];

  let exit;
  const getNewStr = () => {
    const userStr =
      prompt(`${VARIANTES_RES.join(', ')}. Введите вариант ответа`);

    if (userStr === null) {
      exit = confirm(`Хотите покинуть игру?`);
      if (exit) {
        return;
      }
      return getNewStr();
    }

    if (userStr === '') {
      alert(`${VARIANTES_RES.join(', ')}. Строка не должна быть пустой`);
      return getNewStr();
    }

    let filterStr = '';

    if (userStr.length > 0) {
      const getRenameStr = (str) =>
        str[0].toUpperCase() + str.slice(1).toLowerCase();
      const renameStr = getRenameStr(userStr);

      filterStr = VARIANTES_RES.filter((elem) =>
        elem.includes(renameStr)).join();

      if (filterStr === 'Камень' || filterStr === 'Ножницы' || filterStr === 'Бумага') {
        return filterStr;
      } else {
        alert(`${VARIANTES_RES.join(', ')}. Нет таких вариантов`);
        getNewStr();
      }

      return filterStr;
    }
};

  const playerStr = getNewStr();
  console.log(`Вы выбрали: ${playerStr}`);

  const minRand = 1;
  const maxRand = 3;

  function getRandomIntInclusive(min, max) {
    let resRandom = '';

    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min + 1) + min);

    if (randNum === 1) {
      resRandom = 'Камень';
    }

    if (randNum === 2) {
      resRandom = 'Ножницы';
    }

    if (randNum === 3) {
      resRandom = 'Бумага';
    }

    return resRandom;
  };

  const randStr = getRandomIntInclusive(minRand, maxRand);
  console.log(`Компьютер выбрал: ${randStr}`);

  const resultGame = function(user, bot) {
    const check = {
      player: 0,
      computer: 0,
    };

    if (user === bot) {
      console.log('Ничья');
    }

    if (user === 'Бумага' && bot === 'Ножницы') {
      console.log(`Бот победил`);
      check.computer++;
    }

    if (user === 'Бумага' && bot === 'Камень') {
      console.log(`Бот проиграл`);
      check.player++;
    }

    if (user === 'Ножницы' && bot === 'Бумага') {
      console.log(`Бот проиграл`);
      check.player++;
    }

    if (user === 'Ножницы' && bot === 'Камень') {
      console.log(`Бот победил`);
      check.computer++;
    }

    if (user === 'Камень' && bot === 'Бумага') {
      console.log(`Бот победил`);
      check.computer++;
    }

    if (user === 'Камень' && bot === 'Ножницы') {
      console.log(`Бот проиграл`);
      check.player++;
    }

    console.log(`игрок: ${check.player}`);
    console.log(`компьютер: ${check.computer}`);

    if (exit) {
      return;
    } else {
      return getNewStr();
    }
  };

  resultGame(randStr, playerStr);
})();
