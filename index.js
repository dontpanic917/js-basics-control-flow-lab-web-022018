// Write your code in this file!
function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return `This one is on me!`;
  } else if (distance > 2500) {
    return `No can do.`;
  } else if (distance > 2000) {
    return `I will gladly take your thirty bucks.`;
  };
};
function ternaryCheckCity(city){
  const isny = city === 'NYC' ? `Ok, sounds good.` : `No go.`;
  return isny;
};
function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return `Thank you so much.`;
      break;
    case 'not as generous':
      return `Thank you.`;
    default:
      return `Bye.`;
  }
};
