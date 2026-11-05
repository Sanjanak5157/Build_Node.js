const studentFrom=document.getElementById("studentFrom");
const studentList =document.getElementById("studentList");
const message = document.getElementById("message")

async function getStudents() {

    const response = await fetch("/api/students");

    const students = await response.json();

    studentList.innerHTML= "";

    students.forEach(student =>{

        const row = document.createElement("tr");

        [student.id, student.name, student.email, student.age]
            .forEach(value =>{
                const cell=document.createElement("td");
                cell.textContent =value;
                row.appendChild(row);
            });
            studentList.appendChild(row);
    });

}

    studentFrom.addEventListener("submit", async(event) =>{

        event.preventDefault();


        const studenData ={
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            age: Number(document.getElementById("age").value)
        };

        const response = await fetch("/api/students",{
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(studentData)
        });

        const result = await response.json();

        message.textContent =result.message;

        studentForm.reset();

        getStudents();



    });


    getStuddents();



    