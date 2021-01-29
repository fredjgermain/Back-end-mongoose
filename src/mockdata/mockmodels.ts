import { Schema } from 'mongoose'; 

function RamqValidation (value:any) { 
  return new RegExp('^[a-zA-Z]{4}[0-9]{8}$').test(value as string); 
} 

const ArrayLengthValidation = (values:any[], min?:number, max?:number) => { 
  if(!values && min) 
    return false; 
  const minCondition = min ? (values.length >= min) : true; 
  const maxCondition = max ? (values.length <= max) : true; 
  return minCondition && maxCondition; 
} 

function ElementsValidation (values:any[], ElementValidation:(e:any) => boolean) { 
  return values.every(ElementValidation); 
} 



const answersSchema = {
  _id: Schema.Types.ObjectId, 
  patient: {
    type: Schema.Types.ObjectId, 
    ref: 'questions', 
    label: 'Patient', 
    required: true, 
  }, 
  question: { 
    type: Schema.Types.ObjectId, 
    ref: 'questions', 
    label: 'Question', 
    required: true, 
  }, 
  answer: { 
    type: Number, 
    label: 'Answer', 
  } 
}


// PATIENT --------------------------------------
const patientsSchema = { 
  _id: Schema.Types.ObjectId, 
  firstName: { 
    type: String, 
    label: 'First name', 
    required: true, 
  }, 
  lastName: { 
    type: String, 
    label: 'Last name', 
    required: true, 
  }, 
  ramq: { 
    type: String, 
    label: 'Ramq', 
    required: [true, 'is required'], 
    validate: { 
      validator: RamqValidation, 
      message: (prop:any) => 'ramq error', 
    } 
  } 
}

// RESPONSE -------------------------------------
const responsesSchema = { 
  _id: Schema.Types.ObjectId, 
  rId: { 
    type: String, 
    label: 'Response Id', 
    abbrev: true, 
  }, 
  responseType: { 
    type: Schema.Types.Mixed, 
    label: 'Responses', 
  } 
} 

// FORM -----------------------------------------
const formsSchema = { 
  _id: Schema.Types.ObjectId, 
  fId: { 
    type: String, 
    label: 'Form Id', 
    abbrev: true, 
    required: true, 
  }, 
  titles: { 
    type: [String], 
    label: "Form's title", 
    validate: { 
      validator: (value:any) => ArrayLengthValidation(value, 1, undefined), 
      message: (prop:any) => 'array error', 
    } 
  }, 
} 

// INSTRUCTION ----------------------------------
const instructionsSchema = { 
  _id: Schema.Types.ObjectId, 
  iId: { 
    type: String, 
    label: 'Instruction Id', 
    abbrev: true, 
  }, 
  /*order: { 
    type: Number, 
    label: 'Display order', 
  }, */
  labels: { 
    type: [String], 
    label: "Instruction label", 
  }, 
} 

// QUESTION -------------------------------------
const questionsSchema = {
  _id: Schema.Types.ObjectId, 
  qId: { 
    type: String,
    label: 'Question Id', 
    abbrev: true, 
  }, 
  form: { 
    type: Schema.Types.ObjectId, ref: 'forms', 
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


// CollectionsSchema ----------------------------
const collectionsSchema = { 
  _id: Schema.Types.ObjectId, 
  accessor: { 
    type: String, 
    label: 'Accessor', 
  }, 
  label: { 
    type: String, 
    label: 'Label', 
    abbrev: true, 
  } 
} 

export {collectionsSchema, formsSchema, instructionsSchema, responsesSchema, questionsSchema, patientsSchema, answersSchema}; 

//crud.RegisterModel('collections', collectionsSchema); 