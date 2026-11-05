// diff btw the printings 
// there diff btw
// console.log(`patients ${Patients}`)
// console.log("patients:",Patients[i])


// diff btw the ---------------------------------------------
// const result = patients.find(p =>p.Age>18)
// console.log(result)

// const result =patients.filter(p=>p.Age>18)
// console.log(result)



// FOR     → repeat
// FIND    → one
// FILTER  → many
// MAP     → transform



// -------------------------------------------------------------

// console.log("helloe")

// const hi=[
//     {
//         name:"Alex",
//         id:"1",
//         age:"20"
//     },
//     {
//         name:"John",
//         id:"2",
//         age:"25"
//     }
// ]
// console.log(hi[1])
// console.log(hi[0].name)
// console.log(hi[1].name)
// console.log(hi[1].age)


// Remember: JavaScript arrays start counting from 0.
// Why i = 0 and not i = 1?
// Because arrays use zero-based indexing.
// What is a for loop?
// A for loop is used to repeatedly execute a block of code while a condition is true.
// for(let i=0;i<hi.length;i++){
//     console.log(hi[i].name)
// }









// i is index 
// hi is the array name and contain acutally value


// Break it down:

// const → creates a variable whose binding cannot be reassigned.
// patients → variable name.
// = → assigns a value.
// [ → starts an array.

// So patients is an array.



// ==========================================================
// 30/10/2026

// const patient =[
//     {
//         id:1,
//         Name:"Alex",
//         Age:25,
//         Disease:"fever"
//     },
//     {
//         id:1,
//         Name:"Gigi",
//         Age:58,
//         Disease:"diabites"
//     }
// ]
// --------------------------------------------------------
// const patients =[
//     {id:1,Name:"johan",Age:25,Disease:"fever"},
//     {id:2,Name:"gigi",Age:56,Disease:"Diabites"},
//     {id:3,Name:"Bob",Age:27,Disease:"Migrance"}
// ]

// console.log(patients[1]);
// -------------------------------------------------
// console.log(patient[1].Age);
// console.log("Patients",patients[i])


// ------------------------------------------------------------------------------
// console.log(`patients ${patients}`)
// ouput : patients [object Object],[object Object],[object Object]

// ----------------------------------------------------------------------
// for(let i=0;i<patient.length;i++){
// console.log(`patients ${patients[i]}`)
// }
// output 
// patients [object Object]
// patients [object Object]

// -------------------------------------------------------------------------

// there diff btw
// console.log(`patients ${Patients}`) prints object 
// console.log("patients:",Patients[i]) prints entry rows
// --------------------------------------------------------------

// for(let i=0;i<patients.length;i++){
//     if(patients[i].Age>18){
//         console.log(`patients ${patients[i]}`)
//         console.log("patients:", patients[i])
//     }
// }
// ouput 
// { id: 2, Name: 'gigi', Age: 56, Disease: 'Diabites' }
// patients [object Object]
// patients: { id: 1, Name: 'johan', Age: 25, Disease: 'fever' }
// patients [object Object]
// patients: { id: 2, Name: 'gigi', Age: 56, Disease: 'Diabites' }
// patients [object Object]
// patients: { id: 3, Name: 'Bob', Age: 27, Disease: 'Migrance' }
// =======================================================================


// find
// const patients=[
//     {id:1,Name:"Alex",Age:25},
//     {id:2,Name:"Bob",Age:21},
//     {id:3,Name:"gigi",Age:28}
// ]

// const result = patients.find(p =>p.Age>18)
//     console.log(result)

// filter --------------------------------------------------------------------

// const patients=[
//     {id:1,Name:"Alex",Age:25,Disease:"fever"},
//     {id:2,Name:"Bacu",Age:21,Disease:"diabetes"},
//     {id:3,Name:"gigi",Age:25,Disease:"migrant"}
// ]




// const result =patients.filter(p=>p.Age>18)
// console.log(result)

// ouptput 

// [
//   { id: 1, Name: 'Alex', Age: 25, Disease: 'fever' },   
//   { id: 2, Name: 'Bacu', Age: 21, Disease: 'diabetes' },
//   { id: 3, Name: 'gigi', Age: 25, Disease: 'migrant' }  
// ]



// ======================================================================



// map

// const patients=[
//     {id:1,Name:"Alex",Age:25,Disease:"fever"},
//     {id:2,Name:"bob",Age:21,Disease:"diabetes"},
//     {id:3,Name:"gigi",Age:27,Disease:"mirgrant"}
// ]

// const result= patients.map(p => ({

//     id: p.id,
//     Name:p.Name,
//     Age:p.Age,
//     Disease:p.Disease

// }) )
// console.log(result)





// ========================================================================

const patients=[
    {id:1,Name:"Alex",Age:17,Disease:"Fever",count:2},
    {id:2,Name:"Bob",Age:27,Disease:"diabetes",count:3},
    {id:3,Name:"gigi",Age:52,Disease:"mirgant",count:4}
]



const result =patients.find(p => p.Age>18 )
// give first one fetchs the matched one 
const result1 = patients.filter(p =>p.Age>18)
// every matched one fetches 


const result2= patients.map( p => ({
    id:p.id,
    Name:p.Name,
    Age:p.Age,
    Disease:p.Disease
}))



const result3 =patients.reduce((sum,p)=>{
    return sum+ p.count;
},0)



console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)



















