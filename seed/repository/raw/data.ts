// const fs = require('fs');

// const _colleges = require('./raw/colleges_raw.json');
// const _cities: ICity[] = require('./raw/cities_raw.json');
// const _students = require('./raw/students_raw.json');
// let skills: ISkills[] = require('./raw/skills_raw.json');
// let cources = require('./raw/cources_raw.json');

// interface ICity {
//     id: number;
//     name: string;
//     state_id: number;
//     country_id: number;
// }

// interface IState {
//     id: number;
//     name: string;
//     country_id: number;
// }

// interface ICountry {
//     id: number;
//     name: string;
// }

// interface IStudent {
//     id: number;
//     name: string;
//     year_of_batch: number;
//     college_id: number;
//     skills: number[];
// }

// interface ICollege {
//     id: number;
//     name: string;
//     year_founded: number;
//     city: number;
//     state: number;
//     country: number;
//     students: number[];
//     cources: number[];
// }

// interface ICource {
//     id: number;
//     name: string;
//     colleges: number[];
// }

// interface ISkills {
//     id: number;
//     name: string;
//     students: number[];
// }

// const students: IStudent[] = [];
// const colleges: ICollege[] = _colleges.map((_college): ICollege => {
//     const __city: ICity = _cities[random(0, _cities.length)];
//     const __cources: number[] = getRandomItems(
//         cources,
//         random(2, cources.length)
//     ).map((_cources) => {
//         // injecting college to cource
//         const cource = cources.find((_cource) => _cource.id === _cources.id);
//         cource.colleges.push(_college.id);
//         return _cources.id;
//     });
//     return {
//         city: __city.id,
//         country: __city.country_id,
//         state: __city.state_id,
//         cources: __cources,
//         id: _college.id,
//         name: _college.name,
//         students: [],
//         year_founded: _college.year
//     };
// });

// _students.forEach((_student) => {
//     const __skills = getRandomItems(skills, random(1, skills.length)).map(
//         (_skill) => _skill.id
//     );
//     skills = skills.map<ISkills>((_skill) => {
//         let __students = _skill.students || [];
//         if (__skills.includes(_skill.id) && !__students.includes(_student.id)) {
//             __students.push(_student.id);
//         }
//         return {
//             ..._skill,
//             students: __students
//         };
//     });
//     colleges
//         .find((_college) => _college.id === _student.college)
//         .students.push(_student.id);
//     students.push({
//         id: _student.id,
//         name: _student.first_name + ' ' + _student.last_name,
//         college_id: _student.college,
//         year_of_batch: random(2018, 2021),
//         skills: __skills
//     });
// });

// console.log(skills[1]);
// console.log(cources[0]);
// console.log(students[0]);
// console.log(colleges[0]);

// storeData(skills, '/home/lijovijayan/projects/oneshot-core/dummy/skills.json');
// storeData(
//     cources,
//     '/home/lijovijayan/projects/oneshot-core/dummy/cources.json'
// );
// storeData(
//     students,
//     '/home/lijovijayan/projects/oneshot-core/dummy/students.json'
// );
// storeData(
//     colleges,
//     '/home/lijovijayan/projects/oneshot-core/dummy/colleges.json'
// );

// // utils
// function getRandomItems(arr: any[], n: number) {
//     const result = new Array(n);
//     let len = arr.length;
//     const taken = new Array(len);
//     if (n > len)
//         throw new RangeError('getRandom: more elements taken than available');
//     while (n--) {
//         const x = Math.floor(Math.random() * len);
//         result[n] = arr[x in taken ? taken[x] : x];
//         taken[x] = --len in taken ? taken[len] : len;
//     }
//     return result;
// }

// function random(min: number, max: number) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function storeData(data: any, path: string) {
//     try {
//         fs.writeFileSync(path, JSON.stringify(data));
//     } catch (err) {
//         console.error(err);
//     }
// }

// // end - utils
