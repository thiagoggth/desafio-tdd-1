const countingValleys = (path) => {
  const up = 1;
  const down = -1;
  const seaLevel = 0;
  const stepDown = 'D';
  const stepUp = 'U';
  
  const hikerSteps = path.split('');
  
  let countValleys = 0
  let count = 0;
  let antCount = 0;
  for (const step of hikerSteps) {
    antCount = count;

    if(step === stepUp){
      count += up;
    }else {
      count += down;
    }

    if(count < seaLevel && antCount >= 0){
      countValleys++;
    }
  }
  return countValleys;
}

module.exports = countingValleys ;