const student = [
    {name: 'As', age: 30, grade: 5, money: 100, lang: 'ru', sex: 'male'},
    {name: 'Bas', age: 21, grade: 2, money: 20, lang: 'eng', sex: 'female'},
    {name: 'Vas', age: 22, grade: 3, money: 22, lang: 'ru', sex: 'male'},
    {name: 'Gas', age: 14, grade: 2, money: 0, lang: 'eng', sex: 'male'},
    {name: 'Das', age: 27, grade: 5, money: 1, lang: 'de', sex: 'male'},
    {name: 'Fas', age: 18, grade: 5, money: 11, lang: 'ru', sex: 'male'},
    {name: 'Kas', age: 18, grade: 4, money: 45, lang: 'ru', sex: 'female'},
    {name: 'Mas', age: 23, grade: 3, money: 19, lang: 'ru', sex: 'female'},
    {name: 'Las', age: 21, grade: 2, money: 99, lang: 'ru', sex: 'male'},
    {name: 'Tas', age: 24, grade: 4, money: 298, lang: 'de', sex: 'male'},
    {name: 'Nas', age: 22, grade: 4, money: 100, lang: 'eng', sex: 'female'},
    {name: 'Das', age: 12, grade: 2, money: 550, lang: 'arm', sex: 'male',},
    {name: 'Das', age: 41, grade: 3, money: 23, lang: 'ru', sex: 'male',}
];
//#region task1
let restStudents = student.filter( (item,index,array) => {
    let {grade,name} = item
    console.log(name!="As");
     if (grade>2 && name!="As") {
         return(true)
     } return false
} )

//#endregion
//#region task2
let solderStudents = student.filter( function (item,index,array) {
    let {age,sex} = item
    return((age>=18 && sex=="male") ? true : false)
} )
solderStudents=solderStudents.map((item,index,array) =>{
    return({name: item.name, age: item.age, sex: item.sex})
})

//#endregion

/*todo:
   1.Сделать функцию, которая отчисляет двоечников
   2.Сделать функцию которая отбирает годных для армии
   3.Сделать функцию которая считает сумму денег студентов
   3.Сделать функцию которая, фильтрувет двоечников и если у студента есть деньги дать взятку в 100 рублей, то оставить его.
   4.Сделать функцию которая добавит каждому студенту метод с приветсвием на его языке  в форме "Привет, меня зовут (имя студента)"
*/


