import mongoose from 'mongoose'; 


// FORM -----------------------------------------
export const answers = [
  { 
    _id: new mongoose.Types.ObjectId(), 
    patient: '', 
    date: new Date(), 
    question: '', 
    answer: -1, 
  }
] 