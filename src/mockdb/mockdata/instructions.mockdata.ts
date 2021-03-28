import mongoose from 'mongoose'; 


// INSTRUCTION ----------------------------------
export const instructions = [ 
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
