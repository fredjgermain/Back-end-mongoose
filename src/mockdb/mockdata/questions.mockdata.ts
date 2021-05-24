import mongoose from 'mongoose'; 
import { forms } from './forms.mockdata'; 
import { instructions } from './instructions.mockdata'; 
import { responses } from './responses.mockdata'; 



// PDQD5 --------------------------------------------------
const pdqd5_f = forms.find( f => f.fId.match('pdqd5')); 
const pdqd5_i = instructions.filter( i => i.iId.match('pdqd5') ); 
const pdqd5_r = responses.find( r => r.rId.match('pdqd5')); 

const pdqd5_q = [ 
  {labels: ['Eu du mal a vous organiser?']}, 
  {labels: ['Eu du mal a vous concentrer sur ce que vous lisez?']}, 
  {labels: ['Oubliez la date a moins de la vérifier?']}, 
  {labels: ['Oubliez le sujet de votre conversation apres un appel téléphonique?']}, 
  {labels: [`Eu l'impression d'avoir un trou de mémoire?`]} 
] 

const pdqd5_questions = pdqd5_q.map( (question, i) => { 
  const _id = new mongoose.Types.ObjectId(); 
  const qId = 'pdqd5_q'+(i+1); 
  const form = pdqd5_f; 
  const instructions = pdqd5_i; 
  const section = ''; 
  const order = i; 
  const responseType = pdqd5_r; 
  const optional = false; 
  return {_id, qId, form, instructions, section, order, responseType, optional, ...question}; 
}) 



// ASRS ---------------------------------------------------
const asrs_f = forms.find( f => f.fId.match('asrs')); 
//const asrs_i = instructions.filter( i => i.iId.match('asrs') ); 
const asrs_r = responses.find( r => r.rId.match('asrs')); 

const asrs_q = [ 
  {labels: [`A quelle fréquence vous arrive-t-il d'avoir des difficultés a finaliser les derniers détails d'un project une fois les parties les plus stimulantes ont été faites?`]}, 
  {labels: [`A quelle fréquence vous arrive-t-il d'avoir des difficultés a mettre les choses en ordre lorsque vous devez faire quelque chose qui demande de l'organisation?`]}, 
  {labels: [`A quelle fréquence vous arrive-t-il d'avoir des difficultés a vous rappeler vos rendez-vous ou vos obligations?`]}, 
  {labels: [`Lorsque vous devez faire quelque chose qui demande beaucoup de réflexion, a quelle fréquence vous arrive-t-il d'éviter de le faire ou de remettre a plus tard?`]}, 
  {labels: [`A quelle fréquence vous arrive-t-il de remuer ou de tortiller les mains ou les pieds lorsque vous devez rester assis pendant un période prolongée?`]}, 
  {labels: [`A quelle fréquence vous arrive-t-il de vous sentir excessivement actif et contraint de faire quelques chose, comme si vous étiez entrainé malgré vous par un moteur?`]}, 
  {labels: [`A quelle fréquence vous arrive-t-il de faire des fautes d'étourderie lorsque vous travaillez a un projet ennuyeyx ou difficule?`]}, 
  {labels: [`A quelles fréquence vous arrive-t-il d'avoir des difficultés a vous concentrer lorsque vous faites un travail ennuyeux ou répétitif`]}, 
  {labels: [`A quelle fréquence vous arrive-t-il d'avoir des difficultés a vous concentrer sur les propos de votre interlocuteur, meme s'il s'adresse directement a vous?`]}, 
  {labels: [`Arrive-t-il d'égarer des choses ou d'avoir des difficultés a les retrouver?`]}, 
  {labels: [`A la maison ou au travail, a quelle fréquence vous arrive-t-il d'etre distrait par l'activité ou le bruit autour de vous?`]}, 
  {labels: [`A quelle fréquence vous arrive-t-il d'avoir des difficultés a vous détendre et a vous reposer dans vos temps libre?`]}, 
  {labels: [`A quelle fréquences vous arrive-t-il de parler de facon excessive a l'occasion de vos rencontres sociales?`]}, 
  {labels: [`Pendant une conversation, a quelle fréquence vous arrive-t-il de terminer les phrases de vos interlocuteurs avant que ces derniers aient le temps de les finir?`]}, 
  {labels: [`A quelle fréquence vous arrive-t-il d'avoir des difficultés a attendre votre tour lorsque vous devrier le faire?`]}, 
  {labels: [`A quelle fréquence vous arrive-t-il d'interrompre les gens lorsqu'ils sont occupés?`]}
] 

const asrs_questions = asrs_q.map( ({labels}, i) => { 
  const _id = new mongoose.Types.ObjectId(); 
  const qId = 'asrs'+(i+1); 
  const form = asrs_f; 
  const instructions = [] as any[]; 
  const section = ''; 
  const order = i; 
  const responseType = pdqd5_r; 
  const optional = false; 
  return {_id, qId, form, instructions, section, order, responseType, optional, labels}; 
}) 



// WHODAS ---------------------------------------------------
const whodas_f = forms.find( f => f.fId.match('whodas')); 
const whodas_i = instructions.filter( i => i.iId.match('whodas') ); 
const whodas_r1 = responses.find( r => r.rId.match('whodas_r1')); 
const whodas_r2 = responses.find( r => r.rId.match('whodas_r2')); 

const whodas_q = [
  {section:`d1`, labels:`Vous concentrer sur une tâche pendant 10 minutes?`}, 
  {section:`d1`, labels:`Vous rappeler de faire des choses importantes?`}, 
  {section:`d1`, labels:`Analyser et trouver des solutions à des problèmes de lavie courante?`}, 
  {section:`d1`, labels:`Apprendre une nouvelle tâche ou par ex. découvrir un nouveau lieu?`}, 
  {section:`d1`, labels:`Comprendre ce que les gens disent?`}, 
  {section:`d1`, labels:`Commencer ou maintenir une conversation?`}, 
  {section:`d2`, labels:`Être debout pour de longues périodes comme 30 min.?`}, 
  {section:`d2`, labels:`Passer de la position assise à une position débout?`}, 
  {section:`d2`, labels:`Vous déplacer dans votre maison?`}, 
  {section:`d2`, labels:`Sortir de votre maison?`}, 
  {section:`d2`, labels:`Marcher une longue distance comme 1 kilomètre?`}, 
  {section:`d3`, labels:`Laver votre corps tout entier?`}, 
  {section:`d3`, labels:`Vous habiller?`}, 
  {section:`d3`, labels:`Manger?`}, 
  {section:`d3`, labels:`Rester seul(e) durant quelques jours?`}, 
  {section:`d4`, labels:`Avoir à faire avec des personnes que vous ne connaissez pas?`}, 
  {section:`d4`, labels:`Entretenir une relation d'amitiés?`}, 
  {section:`d4`, labels:`Vous entendre avec des proches?`}, 
  {section:`d4`, labels:`Vous faire de nouveaux amis?`}, 
  {section:`d4`, labels:`Avoir des relations sexuelles ?`}, 
  {section:`d5`, labels:`Vous occuper de vos résponsabilités ménagères?`}, 
  {section:`d5`, labels:`Faire bien vos tâches ménagères importantes?`}, 
  {section:`d5`, labels:`Terminer tout ce qui devrait être fait comme tâches?`}, 
  {section:`d5`, labels:`Faire votre ménage aussi vite que nécessaire?`}, 
  {section:`d5optional`, labels:`Faire votre travail/ vos activités scolaires quotidièn(nes)`}, 
  {section:`d5optional`, labels:`Faire correctement votre tâche la plus importante pour le travail/ les activités scolaires?`}, 
  {section:`d5optional`, labels:`Faire tout le travail que vous avez à faire?`}, 
  {section:`d5optional`, labels:`Faire votre travail aussi vite que nécessaire?`}, 
  {section:`d6`, labels:`À quel point est-ce un problème de vous engager dans des activités communautaires (par ex. fêtes, activité religieuse ou autre) de la même façon que les autres?`}, 
  {section:`d6`, labels:`Combien de problèmes avez-vous eues pour executer vos plans à cause de barrières ou d'empêchements dans le monde qui vous entoure?`}, 
  {section:`d6`, labels:`À quel point est-ce un problème de vivre dignement malgré les attitudes et les actions d'autrui?`}, 
  {section:`d6`, labels:`Combien de temps avez-vous passé sur votre état de santé ou ses conséquences?`}, 
  {section:`d6`, labels:`À quel point avez-vous été émotionellement affecté(e) par votre état de santé?`}, 
  {section:`d6`, labels:`À quel point votre santé a-t-elle été à l'origine d'une perte pour vos ressources financières et celles de votre famille?`}, 
  {section:`d6`, labels:`Combien de difficulté votre famille a-t-elle eues à cause de votre état de santé?`}, 
  {section:`d6`, labels:`Combien de difficulté avez-vous eues pour faire des choses tout(e ) seule(e ) pour vous relaxer ou pour votre plaisir?`}, 
  {section:`h1`, labels:`Au total, durant les 30 dernier jours, pendant combien de jours avez-vous eu ces difficultés?`}, 
  {section:`h2`, labels:`Durant les 30 derniers jours, pendant combien de jours avez-vous été incapable d'effectuer vos activités habituelles ou travail du fait de votre état de santé?`}, 
  {section:`h3`, labels:`Durant les 30 derniers jours, sans compter les jours où vous étiez totalement incapable, pendant combien de temps avez-vous diminué ou réduit vos activités habituelles ou votre travail du fait de votre état de santé?`}, 
]

const whodas_questions = whodas_q.map( ({labels, section}, i) => { 
  const _id = new mongoose.Types.ObjectId(); 
  const qId = section+(i+1); 
  const form = whodas_f; 
  const instructions = whodas_i.filter( i => i.iId.match(section)); 
  const order = i; 
  const responseType = section.match('h') ? whodas_r2: whodas_r1; 
  const optional = false; 
  return {_id, qId, form, instructions, order, responseType, optional, section, labels}; 
}) 



// EDEC ---------------------------------------------------
const edec_f = forms.find( f => f.fId.match('edec')); 
const edec_i = instructions.filter( i => i.iId.match('edec') ); 
const edec_r = responses.find( r => r.rId.match('edec') ); 

const edec_q = [ 
  {labels: [`De mémoire ex. oublier ce qui s'est passé il y a quelques jours?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 
  
  {labels: [`De mémoire ex. oublier des conversations qui se sont passées il y a quelques jours?`]},  
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`De mémoire ex. se rendre compte que vous vous répétez?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A communiquer vos idées en mots?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A trouver le bon mot lors de conversations?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`Oublier el sens de mots communs?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A penser avant d'agir?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A planifier d'avance?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A retrouver votre chemin dans un endroit que vous connaissez?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A suivre des directions sur une carte?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A garder votre chambre/maison organisée?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A cuisiner ou travailler et parler en meme temps?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A se concentrer sur une tache sans etre distrait(e) par ce qui se passe autour de vous?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A organiser vos finances?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A faire deux choses en meme temps?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 

  {labels: [`A maintenir vos documents et courriers organisés?`]}, 
  {labels: [`Ceci dérange votre fonctionnement?`]}, 
] 

const edec_questions = edec_q.map( ({labels}, i) => { 
  const _id = new mongoose.Types.ObjectId(); 
  const qId = `edec_${i+1}`; 
  const form = edec_f; 
  const instructions = [] as any[]; 
  const section = `${i}`; 
  const order = i; 
  const responseType = edec_r; 
  const optional = false; 
  return {_id, qId, form, instructions, order, responseType, optional, section, labels}; 
}) 


export const questions = [...asrs_questions, ...pdqd5_questions, ...whodas_questions, ...edec_questions]; 







/*
// QUESTION -------------------------------------
export const questions = [ 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 1, 
    qId: 'f1d1q1', 
    labels: ['Question 1', 'Question 1'], 
    responseType: responses[0], 
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 2, 
    qId: 'f1d1q2', 
    labels: ['Question 2', 'Question 2'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 3, 
    qId: 'f1d1q3', 
    labels: ['Question 3', 'Question 3'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 4, 
    qId: 'f1d1q4', 
    labels: ['Question 4', 'Question 4'], 
    responseType: responses[0], 
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 5, 
    qId: 'f1d1q5', 
    labels: ['Question 5', 'Question 5'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  { 
    _id: new mongoose.Types.ObjectId(), 
    form: forms[0], 
    section: 'd1', 
    order: 6, 
    qId: 'f1d1q6', 
    labels: ['Question 6', 'Question 6'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  },
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[1], 
    section: 'd1', 
    order: 7, 
    qId: 'f2d1q1', 
    labels: ['Question 7', 'Question 7'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[1], 
    section: 'd1', 
    order: 8, 
    qId: 'f2d1q2', 
    labels: ['Question 8', 'Question 8'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  },
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[1], 
    section: 'd1', 
    order: 9, 
    qId: 'f2d1q3', 
    labels: ['Question 9', 'Question 9'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[0]], 
  },
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[1], 
    section: 'd2', 
    order: 10, 
    qId: 'f2d1q4', 
    labels: ['Question d2q1', 'Question d2q1'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[1]], 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[2], 
    section: 'd1', 
    order: 10, 
    qId: 'f3d1q1', 
    labels: ['Question d2q2', 'Question d2q2'], 
    responseType: responses[0],
    optional: false, 
    instructions: [instructions[1]], 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[2], 
    section: 'd2', 
    order: 10, 
    qId: 'f3d1q2', 
    labels: ['Question d2q3', 'Question d2q3'], 
    responseType: responses[0],  
    optional: false, 
    instructions: [instructions[1]], 
  },
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[2], 
    section: 'd3', 
    order: 10, 
    qId: 'f3d1q3', 
    labels: ['Question d3q1', 'Question d3q1'], 
    responseType: responses[0], 
    optional: false, 
    instructions: [instructions[1]], 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[2], 
    section: 'd3', 
    order: 10, 
    qId: 'f3d1q4', 
    labels: ['Question d3q2', 'Question d3q2'], 
    responseType: responses[0], 
    optional: false, 
    instructions: [instructions[1]], 
  }, 
  {
    _id: new mongoose.Types.ObjectId(), 
    form: forms[2], 
    section: 'd3', 
    order: 10, 
    qId: 'f3d1q5', 
    labels: ['Question d3q3', 'Question d3q3'], 
    responseType: responses[0],  
    optional: false, 
    instructions: [instructions[1]], 
  }
]

*/