var students = ["Maria", "Sergio", "Rosa", "Daniel"];

function greetStudents(student) {
    console.log(`Hola, ${student}`);
}

// Standard for
for (var index = 0; index < students.length; index++) {
    greetStudents(students[index]); 
}

//For each

for(var student of students){
    greetStudents(student);
}

students.forEach(element => {
    greetStudents(element);
});