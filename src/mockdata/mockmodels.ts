import { Schema } from 'mongoose'; 


const answersSchema = {
  _id: Schema.Types.ObjectId, 
  pid: Schema.Types.ObjectId, // ???
  qid: Schema.Types.ObjectId, // ???

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
  }, 
  lastName: { 
    type: String, 
    label: 'Last name', 
  }, 
  ramq: { 
    type: String, 
    label: 'Ramq', 
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
  }, 
  titles: { 
    type: [String], 
    label: "Form's title", 
    //validate: [(v:any) => Array.isArray(v) && v.length > 0, "array error msg "], 
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
    label: 'Response Id', 
  }, 
  label: { 
    type: String, 
    label: 'Responses', 
  } 
} 

export {collectionsSchema, formsSchema, instructionsSchema, responsesSchema, questionsSchema, patientsSchema, answersSchema}; 

//crud.RegisterModel('collections', collectionsSchema); 