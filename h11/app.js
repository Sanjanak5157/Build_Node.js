// // const { patients } = require("../hospital-management-intermediate/app1");

// // const patient =  [
// //     { id:"1",name:"Johon",age:25,disease:"fever",doctorId:1},
// //     {id:"2",name:"alex",age:27,disease:"diabetes",doctorId:2},
// //     {id:"3",name:"vikki",age:32,disease:"migrance",doctorId:3}
// // ]


// // console.log(patient[1])

// // const searchName = "John";

// // for (let i = 0; i < patient.length; i++) {

// //     if (patient[i].name === searchName) {

// //         console.log("Patient Name:", patient[i].name);
// //         console.log("Age:", patient[i].age);
// //         console.log("Disease:", patient[i].disease);

// //     }
// // }



// // function def(){
// //     for(let i=0;i< patient.length;i++){
// //         console.log(`patient name only shows : ${patients[i].name}`)

// //     }
// // }


// // function getPatientNames(){
// //     return patients.map(patient  => patient.name);

// // }

// // module.exports={
// //     patients,
// //     def,
// //     getPatientNames
// // }





// const PatientsNames="Alex";
// const PatientsAge=25;
// const PatientDisease="fever";

// function showpatients(){
//     console.log(`patient name ${PatientsNames}`);
//     console.log(`patient Age ${PatientsAge}`);
//     console.log(`patients disese ${PatientDisease}`);
    
// }

// function patiets_adult(){
//     if (PatientsAge>18){
//         console.log("Patients is Adult");


//     }
//     else{
//         console.log("Patients is minor")
//     }
// }

// showpatients();
// patiets_adult();



// const Patient =[
//     {id:1, Name:"ALex",Age:25},
//     {id:2,Name:"gigi",Age:35},
//     {id:3,Name:"bob",Age:22}
// ];

// console.log(Patient[0]);

// console.log(Patient[1].Name)


// console.log(Patient[2].Age)


// console.log(Patient.length)




// for(let i=0;i<Patient.length;i++){
//     console.log(Patient[i]);
// }


// function adult(){
//     if(Patient[0].Age>18){
//         console.log("patients is adult")
//     }
//     else{
//         console.log("patients is minor")
//     }

// }

// adult()



// function getPatientNames(Patient){
//     return Patient.Name
// }

// console.log(getPatientNames(Patient[0]))
// console.log(getPatientNames(Patient[1]))
// console.log(getPatientNames(Patient[2]))



// ------------------------------------------------------------------------------------------



// console.log(`patients ${Patients}`)
// where console.log(`patients ${Patients[i]}`)
// what happened if we write inside $ {} 

// Evaluate whatever JavaScript expression is inside here, then put its result into this string.
// puts the result as convert to the strings

// console.log("patients:",Patients[i])
// this print the entry object 

// -----------------------------------------------------------------------------------
// there diff btw
// console.log(`patients ${Patients}`)
// console.log("patients:",Patients[i])
// -----------------------------------------------------------------------------------






// for(let i=0;i<Patients.length;i++){
//     if(Patients[i].id === 2){
//         console.log("patients :", Patients[i])
//     }
// }



// const result
// const result =Patients.find(Patients => Patients.Age > 18)
// // find first one and excutive

// console.log(result)



// const Patients =[
//     {id:1,Name:"Alex",Age:25},
//     {id:2,Nmae:"Bob",Age:32},
//     {id:3,Name:"gigi",Age:25}
// ]


// for(let i=0;i<Patients.length;i++){
//     if(Patients[i].Age >18){
//         console.log(`Patients ${Patients[i]}`)
//         console.log("Patients:",Patients[i])
// there different print road 
//     }
// }




// const Patients =[
//     {id:1,Name:"Alex",Age:25},
//     {id:2,Nmae:"Bob",Age:32},
//     {id:3,Name:"gigi",Age:25}
// ]

// for(let i=0;i<Patients.length;i++){
//     console.log("patients:",Patients[i]);
// }

// find--------------------------------------------------------------------
// const Patients =[
//     {id:1,Name:"Alex",Age:25},
//     {id:2,Nmae:"Bob",Age:32},
//     {id:3,Name:"gigi",Age:25}
// ]


// const result = Patients.find(p =>p.Age>18);
// console.log(result)
// It returns only the first matching patient.(any name can give )
// -----------------------------------------------------------------------

// Filter-------------------------------------------------------------------------Find MANY patients

// const Patients =[
//     {id:1,Name:"Alex",Age:25},
//     {id:2,Name:"Bob",Age:15},
//     {id:3,Name:"gigi",Age:22}

// ]
// const result = Patients.filter(p =>p.Age>18)
// console.log(result)


// const Patients1 =[
//     {id:1,Name:"Alex",Age:25},
//     {id:2,Name:"bob",Age:17},
//     {id:3,Name:"gigi",Age:26}
// ]

// const result = Patients1.filter(p =>p.Age > 18 )
// console.log(result)

// f is small in filter and any name can give within parmater -----------------------------------------------------


// map-------------------------------------------------------------

// const Patient =[
//     {id:1,Name:"Alex",Age:25},
//     {id:2,Name:"Bob",Age:17},
//     {id:3,Name:"gigi",Age:28}
// ]

// const r1 = Patient.map(p => p.id)
// const r2 = Patient.map(p =>p.Name)
// const r3 = Patient.map( p => p.Age)

// console.log(r1)
// console.log(r2)
// console.log(r3)

// map all the object in one together 
// const Patient =[
//     {id:1,Name:"Alex",Age:25},
//     {id:2,Name:"Bob",Age:17},
//     {id:3,Name:"gigi",Age:28}
// ]
// const result = Patient.map(p => ({
//     id:p.id,
//     Name1:p.Name
// }))

// const result1 = Patient.map( p =>({
//     id:p.id,
//     Name: p.Name

// }))
// console.log(result)

// console.log(result1)


// see there is differect btw the result and result1 where anyname can give as object name within the pamarater and 
// small m in map( within brackets write as the parmater )




// FOR     → repeat
// FIND    → one
// FILTER  → many
// MAP     → transform





// -------------------------------------------------------------------
// reduce


// const Patients = [
//     {id:1,Name:"Alex",Fee:50000},
//     {id:2,Name:"BoB",Fee:20500},
//     {id:3,Name:"gigi",Fee:40000}
// ]

// const result = Patients.reduce((s, P) => {
//     return s+ P.Fee;
// },0)

// // reduce ()=>{}


// console.log(result)
// ================================================================================
// reduce

// see properly the printing of each function 


// const total = consultations.reduce(
//     (sum, consultation) => {
//         return sum + consultation.fee;
//     },
//     0
// );
// const results=array.reduce((accumulator, currentValue) => {
//     // calculation
//     return accumulator;
// }, initialValue);

// =======================================================

// const Patients =[
//     {id:1,Name:"Alex",Age:25},
//     {id:2,Name:"Bob",Age:31},
//     {id:3,Name:"gigi",Age:25}
// ]



// const r1=Patients.find( p => p.Age>30)
// console.log(r1)




// const r2=Patients.filter( p => p.Age >18)
// console.log(r2)


// const r3=Patients.map(p => p.id)
// console.log(r3)

// const numbers = [10, 20, 30];

// const total = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);

// console.log(total);

// =======================================================================
const patients = [
    {id:1,Name:"Alex",Age:25},
    {id:2,Name:"Bob",Age:30},
    {id:3,Name:"gigi",Age:18}
]


const r1 = patients.find( p  => p.Age >18)
console.log(r1)

const r2 = patients.filter( p =>p.Age >18)
console.log(r2)

const r3 = patients.map(p =>p.id)
console.log(r3)

const r4 = patients.reduce((s,c)=>{
    return s+c.fee;

}
,0)





























// ----------------------------------------------------------------------------------












