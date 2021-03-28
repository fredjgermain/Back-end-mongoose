export function RamqValidation (value:any) { 
  return new RegExp('^[a-zA-Z]{4}[0-9]{8}$').test(value as string); 
} 

export const ArrayLengthValidation = (values:any[], min?:number, max?:number) => { 
  if(!values && min) 
    return false; 
  const minCondition = min ? (values.length >= min) : true; 
  const maxCondition = max ? (values.length <= max) : true; 
  return minCondition && maxCondition; 
} 

export function ElementsValidation (values:any[], ElementValidation:(e:any) => boolean) { 
  return values.every(ElementValidation); 
} 
