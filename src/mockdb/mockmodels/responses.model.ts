import { Schema } from 'mongoose'; 

// RESPONSE ------------------------------------- 
export const responses = { 
  _id: Schema.Types.ObjectId, 
  rId: { 
    type: String, 
    label: 'Response Id', 
    abbrev: true, 
  }, 
  values: { 
    type: [String], 
    label: 'Values', 
  }, 
} 
