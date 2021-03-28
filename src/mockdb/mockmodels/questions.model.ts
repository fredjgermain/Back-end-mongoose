import { Schema } from 'mongoose'; 

// QUESTION -------------------------------------
export const questions = {
  _id: Schema.Types.ObjectId, 
  qId: { 
    type: String,
    label: 'Question Id', 
    abbrev: true, 
  }, 
  form: { 
    type: Schema.Types.ObjectId,
    ref: 'forms', 
    label: 'Associated form', 
  }, 
  section: { 
    type: String, 
    label: 'Form sub-section', 
    format: "!! ${value} !!", 
  }, 
  order: {
    type: Number, 
    label: 'Display order', 
    min: 0, 
  }, 
  labels: { 
    type: [String], 
    label: 'Question text', 
  }, 
  responseType: { 
    type: Schema.Types.ObjectId, 
    ref: 'responses', 
    label: 'Response type', 
  }, 
  instructions: {
    type: [Schema.Types.ObjectId], 
    ref: 'instructions', 
    label: 'Applicable instructions', 
  },
  optional: { 
    type: Boolean, 
    label: 'Is optional', 
  },
}
