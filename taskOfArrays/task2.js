 //#region task1.1
 // task1.1 объеденить 2 массива
    a = ['a', 'b', 'c'];
    b = [1, 2, 3];
    let c = a.concat(b);
    console.log(c);
 let c1 = [...a, ...b];


 //#endregion

 //#region task2.1
 /*let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
1.Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, третий - в переменную elem3, а все остальные элементы массива - в переменную arr. Показать решение.
2 Дан массив. Запишите последний элемент этого массива в переменную elem1, а предпоследний - в переменную elem2.
  */
 let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой']
 let [elem1, elem2, elem3, ...arr ] = newArr
 console.log([elem1, elem2, elem3, ...arr ]);
 function getElementByArr(newArr){
     let elem=[];

     for (let i = -1; i>-3; i--){
         let j=(-i-1);
         elem[j] = newArr.at(i)
     }
     console.log("elem",elem);
 }
 //getElementByArr(newArr);
let [elem1,elem2] = newArr.reverse();


 //#endregion