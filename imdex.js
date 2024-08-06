// let person = {
//     name: 'daniyar',
//     surname: 'shark',
//     age: 15
// }


// person.age = 16
// person.name = 'koniball'
// person.address = 'Tashkent'

// person['name'] = 'abbos'
// person['age'] = '0655'
// person['surname'] = 'papiros'

// let car = {
//     brand: 'BMW',
//     model: 'm5cs',
//     horsePower: 150,
//     start: function () {
//         console.log('машина');

//     }
// }

// car.color = 'blak'
// car.horsePower = 1200
// delete car.model




// let car2 = {...car}

// let company = {
//     name: 'IT',
//     owner: {
//         name: 'Ghis',
//         surname: 'Jon',
//         nestworth: '300 billion',
//         address: {
//             city: 'Chicago',
//             street: 'ynosobad'
//         }
//     }

// }

// company.owner.name = 'daniyar'
// company.owner.surname = 'shakirov'

// console.log(company);

// let book = {
//     title: 'Война и мир',
//     author: 'Лев Толстой',
//     year: 1867
// }

// function print(obj) {
//     for (let key in obj) {
//         console.log(`${key} : ${obj[key]}`);

//     }
// }

// let book2 = { ...book }

// book2.title = 'война и мир2'
// book2.year = 2022

// print(book)
// console.log('-------------------------------');
// print(book2)

// car.start()
// console.log(car);
// console.log(person);



let school = {
    name: 'Presesident Shool',
    director: 'Daniyar Shakirov',
    teachers: {
        math: 'Da4r3kfrk',
        georaphy:'Nada',
    },
    students:{
        1:'Vadim',
        2:'lalo',
        3:'daniyar'
    },
    hasEater:false,
    hasToilet:true,
    rooms:163

}

console.log(school);
