import mongoose from 'mongoose'; 
import { DaysPerMonth } from '../utils/date.utils'; 



function Range(min:number, max:number) { 
  const range = []; 
  for(let i = min; i < max; i++) 
    range.push(i); 
  return range; 
}

function Range_DaysPerMonth() { 
  const year = new Date().getFullYear(); 
  const month = new Date().getMonth(); 
  const daysPerMonth = DaysPerMonth(year, month); 
  return Range(1, daysPerMonth); 
} 



// Mock Collections -----------------------------
const collections = [ 
  { 
    _id: new mongoose.Types.ObjectId(), 
    accessor:'responses', 
    label:'Responses', 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    accessor:'instructions', 
    label:'Instructions', 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    accessor:'forms', 
    label:'Forms', 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    accessor:'questions', 
    label:'Questions', 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    accessor:'patients', 
    label:'Patients', 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    accessor:'answers', 
    label:'Answers', 
  }, 
]; 

// FORM -----------------------------------------
const forms = [ 
  { 
    _id: new mongoose.Types.ObjectId(), 
    fId: 'f1', 
    titles: ['Title form 1', 'titre form 1'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    fId: 'f2', 
    titles: ['Title form 2', 'titre form 2'], 
  },
  { 
    _id: new mongoose.Types.ObjectId(), 
    fId: 'f3', 
    titles: ['Title form 3', 'titre form 3'], 
  } 
] 

// INSTRUCTION ----------------------------------
const instructions = [ 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: 'i1', 
    label: ['Instruction 1', 'Instruction 1'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: 'i2', 
    labels: ['Instruction 2', 'Instruction 2'], 
  } 
] 

// RESPONSE -------------------------------------
const responses = [ 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'Days of the week', 
    values: ['monday', 'thuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'], 
  }, 
  /*{ 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'Disagree-Agree', 
    values: ['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'], 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'From 0 to 7', 
    values: Range(0,7), 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'Last 30 days', 
    values: Range(0, 30), 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'Last month days', 
    values: Range_DaysPerMonth(), 
  } */
]

//console.log([instructions[0]]); 
// QUESTION -------------------------------------
const questions = [ 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 1, 
    qId: 'f1d1q1', 
    labels: ['Question 1', 'Question 1'], 
    responseType: responses[0], 
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 2, 
    qId: 'f1d1q2', 
    labels: ['Question 2', 'Question 2'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 3, 
    qId: 'f1d1q3', 
    labels: ['Question 3', 'Question 3'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 4, 
    qId: 'f1d1q4', 
    labels: ['Question 4', 'Question 4'], 
    responseType: responses[0], 
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 5, 
    qId: 'f1d1q5', 
    labels: ['Question 5', 'Question 5'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 6, 
    qId: 'f1d1q6', 
    labels: ['Question 6', 'Question 6'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  },
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[1], 
    section: 'd1', 
    order: 7, 
    qId: 'f2d1q1', 
    labels: ['Question 7', 'Question 7'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[1], 
    section: 'd1', 
    order: 8, 
    qId: 'f2d1q2', 
    labels: ['Question 8', 'Question 8'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  },
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[1], 
    section: 'd1', 
    order: 9, 
    qId: 'f2d1q3', 
    labels: ['Question 9', 'Question 9'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  },
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[1], 
    section: 'd2', 
    order: 10, 
    qId: 'f2d1q4', 
    labels: ['Question d2q1', 'Question d2q1'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[1]], 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[2], 
    section: 'd1', 
    order: 10, 
    qId: 'f3d1q1', 
    labels: ['Question d2q2', 'Question d2q2'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[1]], 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[2], 
    section: 'd2', 
    order: 10, 
    qId: 'f3d1q2', 
    labels: ['Question d2q3', 'Question d2q3'], 
    responseType: responses[0],  
    optional: false, 
    instructions: [instructions[1]], 
  },
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[2], 
    section: 'd3', 
    order: 10, 
    qId: 'f3d1q3', 
    labels: ['Question d3q1', 'Question d3q1'], 
    responseType: responses[0], 
    optional: false, 
    instructions: [instructions[1]], 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[2], 
    section: 'd3', 
    order: 10, 
    qId: 'f3d1q4', 
    labels: ['Question d3q2', 'Question d3q2'], 
    responseType: responses[0], 
    optional: false, 
    instructions: [instructions[1]], 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[2], 
    section: 'd3', 
    order: 10, 
    qId: 'f3d1q5', 
    labels: ['Question d3q3', 'Question d3q3'], 
    responseType: responses[0],  
    optional: false, 
    instructions: [instructions[1]], 
  }
]


// PATIENTS -------------------------------------
const patients = [
  {
    _id: new mongoose.Types.ObjectId(), 
    firstName: 'Frédéric', 
    lastName: 'Jean-Germain', 
    ramq: 'JEAF83112314', 
  }
]


// ANSWERS -------------------------------------- 
const answers:any[] = []; 



export const datas = {collections, forms, instructions, responses, questions, patients, answers}; 
