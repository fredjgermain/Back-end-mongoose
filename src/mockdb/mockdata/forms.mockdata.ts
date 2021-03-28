import mongoose from 'mongoose'; 


// FORM -----------------------------------------
export const forms = [ 
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