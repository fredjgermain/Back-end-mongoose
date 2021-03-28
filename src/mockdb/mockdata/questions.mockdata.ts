import mongoose from 'mongoose'; 
import { forms } from './forms.mockdata'; 
import { instructions } from './instructions.mockdata'; 
import { responses } from './responses.mockdata'; 


// QUESTION -------------------------------------
export const questions = [ 
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
