import mongoose from 'mongoose'; 


// FORM -----------------------------------------
export const forms = [ 
  { 
    _id: new mongoose.Types.ObjectId(), 
    fId: 'pdqd5', 
    titles: ['Dépression PDQ-D-5'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    fId: 'asrs', 
    titles: ['ASRS'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    fId: 'whodas', 
    titles: ['WHODAS 2.0'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    fId: 'edec', 
    titles: ["EDEC Échelle d'autoévaluation cognitive"], 
  } 
] 