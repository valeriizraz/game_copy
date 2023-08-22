'use strict';

(function() {
  const VARIANTES_RES = ['Камень', 'Ножницы', 'Бумага'];

  // Рекурсия начало
  const replayGenerateStr = () => {
    let newUserstr = '';
    let exit;

    // Получили данные от пользователя

    const checkInfo = () => {
      const userStr =
      prompt('Камень, ножницы или бумага? Введите вариант ответа');

      switch (userStr) {
        case 0:
          alert('Числа вводить нельзя');
          checkInfo();
          break;

        case '':
          alert('Строка не должна быть пустой');
          checkInfo();
          break;

        case null:
          exit = confirm('Хотите закончить игру?');
          break;
      }

      if (userStr === 'string') {
        return userStr;
      }
      if (userStr === null) {
        return userStr + '';
      }

      return userStr;
    };

    const resUserStr = checkInfo();

    // Если Нулл или пустая строка присвоить другой переменной для выхода из цикла

    if (resUserStr === 'null') {
      newUserstr = resUserStr;
      console.log('Игра окончена');
    } else {
      newUserstr = resUserStr;
    }

    // Строка с большой буквы

    const constructorStr = () => {
      let newStr = '';

      if (newUserstr === undefined) {
        newUserstr = true;
        console.log('game over');
      } else {
        newStr = newUserstr[0].toUpperCase() +
        newUserstr.slice(1).toLocaleLowerCase();
      }

      return newStr;
    };
    const resNewStr = constructorStr();
    console.log(resNewStr);

    // Получили длину введенной пользователем строки

    const getStrLengs = () => {
      let strLengs = '';

      if (resNewStr.length > 0) {
        strLengs = resNewStr.length;
      }

      return strLengs;
    };
    const resStrLengs = getStrLengs();
    console.log(resStrLengs);

    // Получили массив с длиной каждого елемента в основном массиве

    const arrElementsLengs = [];

    const getArrElementLength = (array) => {
      if (array.length > 0) {
        arrElementsLengs.push(array[0].length);
        getArrElementLength(array.slice(1));
      }
    };
    getArrElementLength(VARIANTES_RES);
    console.log(arrElementsLengs);

    // Самый длинный элемент массива

    const resMaxArrElement =
    arrElementsLengs.sort((a, b) => b - a).slice(0, 1).join();
    console.log(resMaxArrElement);

    if (resStrLengs > resMaxArrElement) {
      alert('Строка слишком большая, повторите попытку');
      checkInfo();
    }
    // Перебор массива для создания нового массива

    const resArrSlice = [];

    const recursArr = (array) => {
      if (array.length > 0) {
        resArrSlice.push(array[0].slice(0, resStrLengs));
        recursArr(array.slice(1));
      }
    };
    recursArr(VARIANTES_RES);
    console.log(resArrSlice);

    // Строка с отобранным результатом

    let newWord = '';

    const getWord = (array) => {
      if (array.length > 0) {
        if (array[0] === resNewStr && resNewStr[0] === 'К') {
          newWord = 'Камень';
        }

        if (array[0] === resNewStr && resNewStr[0] === 'Н') {
          newWord = 'Ножници';
        }

        if (array[0] === resNewStr && resNewStr[0] === 'Б') {
          newWord = 'Бумага';
        }
        if (resNewStr === 'Null') {
          newWord = resNewStr;
        }

        getWord(array.slice(1));
      }
      return newWord;
    };

    const resSortArr = getWord(resArrSlice);
    console.log(`resSortArr ${resSortArr}`);

    // Если данные верны, выходим. Если нет, возвращаем функцию...


    // let newUserstr = '';

    if (resSortArr === 'Null' || exit === true || resSortArr === 'Камень' || resSortArr === 'Ножници' || resSortArr === 'Бумага') {
      newUserstr = resSortArr;
    } else {
      replayGenerateStr();
    }

    return newUserstr;
  };
  // Рекурсия конец и результат

  const resReply = replayGenerateStr();
  console.log(resReply);

  // ------------ Генерация числа ботом -------------

  // const getRandomIntInclusive = () => {
  //   const min = 1;
  //   const max = 3;
  //   const randNum = Math.floor(Math.random() * (max - min + 1) + min);

  //   const getRandomStr = () => {
  //     let resStrBot = '';

  //     switch (randNum) {
  //       case 1:
  //         resStrBot = 'Камень';
  //         // console.log(resStr);
  //         break;

  //       case 2:
  //         resStrBot = 'Ножницы';
  //         // console.log(resStr);
  //         break;

  //       case 3:
  //         resStrBot = 'Бумага';
  //         // console.log(resStr);
  //         break;

  //       default:
  //         console.log('Сбой программы');
  //     }
  //     return resStrBot;
  //   }


  // const resRandom = getRandomIntInclusive();
  // console.log(resRandom);

  // -------------------------------------

  // const game = () => {
  //   const resultGame = {
  //     player: 0,
  //     computer: 0,
  //   };

  //   return function start() {
  //     checkInfo();


  //   };
  // };
})();

