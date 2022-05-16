const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (lesson, newKey, value) => {
  lesson[newKey] = value;
};

addTurno(lesson2, 'turno', 'noite');

//console.log(lesson2);


const listKeys = (lesson) => Object.keys(lesson);

//console.log(listKeys(lesson3));

const objectLength = (lesson) => Object.entries(lesson).length;

//console.log(objectLength(lesson3));

const listValue = (obj) => Object.values(obj);

//console.log(listValue(lesson3));

const allLessons = {
  lesson1: Object.assign(lesson1),
  lesson2: Object.assign(lesson2),
  lesson3: Object.assign(lesson3)
}

//console.log(allLessons);

const numAlunos = () => {
  const alunosQtd1 = Object.values(allLessons['lesson1']);
  const alunosQtd2 = Object.values(allLessons['lesson2']);
  const alunosQtd3 = Object.values(allLessons['lesson3']);
  const alunos = alunosQtd1[1] + alunosQtd2[1] + alunosQtd3[1];
  return alunos;
}
//console.log(numAlunos());

const getValueByNumber = (lesson, position) => {
  const keyValue = Object.values(lesson);
  let key = keyValue[position];
  return key;
}

//console.log(getValueByNumber(lesson2, 0))


// const verifyPair = (lesson, key, value) => {
//   const pair = Object.entries(lesson);
//   if (pair[0] === key && pair[1] === value) {
//     return true;
//   }
//   return false;
// }

const verifyPair = (lesson, key, value) => lesson[key] === value;


console.log(verifyPair(lesson1, 'turno', 'noite'));
