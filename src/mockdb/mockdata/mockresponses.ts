import mongoose from 'mongoose'; 
import { DaysPerMonth } from '../../utils/date.utils'; 

function Range(min:number, max:number) { 
  const range = []; 
  for(let i = min; i < max; i++) 
    range.push(i); 
  return range; 
}

function Range_DaysPerMonth() { 
  const year = new Date().getFullYear(); 
  const month = new Date().getMonth(); 
  const daysPerMonth = DaysPerMonth(year, month); 
  return Range(1, daysPerMonth); 
} 


// RESPONSE -------------------------------------
export const responses = [ 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'Days of the week', 
    values: ['monday', 'thuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'], 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'Disagree-Agree', 
    values: ['strongly disagree', 'disagree', 'neutral', 'agree', 'strongly agree'], 
  }, 
  { 
    _id:new mongoose.Types.ObjectId(), 
    rId: 'From 0 to 7', 
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
  } 
]