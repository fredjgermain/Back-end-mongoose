import mongoose from 'mongoose'; 
import { DaysPerMonth } from '../../utils/date.utils'; 

function Range(min:number, max:number) { 
  const range = []; 
  for(let i = min; i <= max; i++) 
    range.push(i); 
  return range; 
}

function Range_DaysPerMonth() { 
  const year = new Date().getFullYear(); 
  const month = new Date().getMonth(); 
  const daysPerMonth = DaysPerMonth(year, month+1); 
  return Range(1, daysPerMonth); 
} 


// RESPONSE -------------------------------------
export const responses = [ 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'pdqd5', 
    values: ['Jamais', 'Rarement (1 ou 2 fois)', 'Quelques fois (3 a 5 fois)', 'Souvent (environ 1 fois par jours)', `Tres souvent (plus d'une fois par jours)`], 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'asrs', 
    values: [`Pas du tout`, `Rarement`, `Parfois`, `Souvent`, `Tres souvent`], 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'whodas_r1', 
    values: [`Aucune, Légere, Modérée, Severe, Extreme ou ne peut pas faire`], 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'whodas_r2', 
    values: Range(0, 30), 
  }, 
  {
    _id:new mongoose.Types.ObjectId(), 
    rId: 'edec_r', 
    values: [
      `(0) Aucunement`, 
      `(1) Légerement`, 
      `(2) Légerement`, 
      `(3) Légerement`, 
      `(4) Modérément`, 
      `(5) Modérément`, 
      `(6) Modérément`, 
      `(7) Beaucoup`, 
      `(8) Beaucoup`, 
      `(9) Beaucoup`, 
      `(10) Etremement`, 
    ]
  },
  /*{ 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'Weeks-day', 
    values: ['monday', 'thuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'], 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'Disagree-Agree', 
    values: ['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'], 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'From 0-7', 
    values: Range(0,7), 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'Last 30 days', 
    values: Range(0, 30), 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'Last month days', 
    values: Range_DaysPerMonth(), 
  } */
]