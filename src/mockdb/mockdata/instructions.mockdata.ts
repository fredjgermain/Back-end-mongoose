import mongoose from 'mongoose'; 


// INSTRUCTION ----------------------------------
export const instructions = [ 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: "i_pdqd5_1", 
    labels: ['Veuillez choisir a meilleure réponse correspondant a ce que vous avez vécu au cours des 7 derniers jours.'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: "i_pdqd5_2", 
    labels: ['Au cours des 7 derniers jours a quelle fréquence avez-vous ...'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: 'i_whodas_0', 
    labels: ['Dans les 30 derniers jours, combien de difficultés avez-vus eues pour:'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: 'i_whodas_d1', 
    labels: ['Compréhension et communication'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: 'i_whodas_d2', 
    labels: ['Mobilité'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: 'i_whodas_d3', 
    labels: ['Soins personnels'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: 'i_whodas_d4', 
    labels: ['Vous entendre avec votre entourage'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: 'i_whodas_d5', 
    labels: ['Vous entendre avec votre entourage'], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: 'i_whodas_d5optional', 
    labels: [`Si vous etes (employé, bénévole, indépendant) ou allez a l'école, complétez les questions D5.5-D5.8, Sinon, allez a D6.1`], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    iId: 'i_whodas_d6', 
    labels: [`Participation a la société`], 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    iId: 'i_eded', 
    labels: [`Avez-vous des difficultés:`], 
  }
] 
