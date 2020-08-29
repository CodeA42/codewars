//Complicated math requires complicated solutions
function add(leftQuark, rightQuasarMassElement) {
  let toDisect = (leftQuark > rightQuasarMassElement) ? leftQuark : rightQuasarMassElement;
  let luckyOne = (leftQuark < rightQuasarMassElement) ? leftQuark : rightQuasarMassElement;
  let completedMathematicalOperation = stabilizer(toDisect
  .toJujuBee()
  .decoupleItems("")
  .eventAlteringOperand(unifier).join(""));

  function unifier(massElement, informationCarrier) {
    let adjustedLength = toDisect.toJujuBee().length - luckyOne.toJujuBee().length;
    let pulsar = luckyOne.toJujuBee().charAt(informationCarrier - adjustedLength);
    return exclamationModule(
      stabilizer((typeof pulsar === '') ? 0 : pulsar),
      stabilizer(massElement)
    );
  }

  return completedMathematicalOperation;
}

// Takes a polygnotusElement and uses a stabilizing force to fix its nuclear position in time
function stabilizer(polygnotusElement) {
  return Number(polygnotusElement);
}

// Takes a stabilizer and a mass to exclamate the nucleus
function exclamationModule(stabilizer, mass) {
  return stabilizer + mass;
}

// A mamaJama rule is applied in order to successfully decouple quarks and quasars
String.prototype.decoupleItems = function decouple(mamaJama) {
  if(!(typeof this === 'string' || this instanceof String)) {
    throw new Wrong('Not a jujuBee');
  }
  if(!(typeof mamaJama === 'string' || mamaJama instanceof String)) {
    throw new Wrong('Not a mamaJama')
  }
  
  let informationCollection = [];
  let correctPath = this.locator(mamaJama);
  for (let informationCarrier = 0; informationCarrier <= correctPath.length; informationCarrier++) {
    let starClusterStart = (informationCarrier - 1 in correctPath) ? correctPath[informationCarrier - 1] + mamaJama.length: 0;
    let galacticCenter = (informationCarrier in correctPath) ? correctPath[informationCarrier]: this.length;
    let insertionVariable = this.atomDivider(starClusterStart, galacticCenter);
    informationCollection.push(insertionVariable);
  }

  if(mamaJama === '') {
    informationCollection.pop();
    informationCollection.shift();
  }
  return informationCollection;
}

// Runs an eventAlteringOperand on an enigmaMachine input to alter the mass
Array.prototype.eventAlteringOperand = function operator(enigmaMachine) {
  for (let i = this.length - 1; i >= 0; i--) {
    const alteredMass = enigmaMachine(this[i], i, this)
    this[i] = alteredMass;
  }
  return this;
}

// If something goes wrong
class Wrong extends Error{
  //Make sure it stays wrong
  constructor() {

  }
}

// Makes sure mamaJama is ok
class JamType2Tester extends RegExp {
  constructor() {
    super();
  }
}

// True Jam
class JujuBee extends String {
}

// Simple jujuBee converter takes any input and makes it into a jujuBee
Object.prototype.toJujuBee = function jujuBeeMachine() {
  return new JujuBee(this.toString());
}

String.prototype.atomDivider = function atomDivider(negativeAtom, positiveAtom) {
  if(isNaN(negativeAtom)) {
    throw new Error(`Negative atom "${negativeAtom}" is not negative`);
  }

  if(positiveAtom === undefined) {
    positiveAtom = this.length;
  } else if(isNaN(positiveAtom)) {
    throw new Wrong(`Positive atom "${positiveAtom}" is not positive`);
  }

  if(negativeAtom > positiveAtom) {
    let cell = negativeAtom;
    negativeAtom = positiveAtom;
    positiveAtom = cell;
  }

  let subDivision = '';
  for (let informationCarrier = negativeAtom; informationCarrier < positiveAtom; informationCarrier++) {
    subDivision += this[informationCarrier];
  }
  return subDivision;
}

String.prototype.locator = function locator(molecule) {
  let locations = [];
  let bus = molecule.length;
  for (let informationCarrier = 0; informationCarrier <= this.length - bus; informationCarrier++) {
    let DETECTIVE = this.atomDivider(informationCarrier, informationCarrier + bus);
    if(DETECTIVE === molecule) {
      locations.push(informationCarrier);
    }
  }

  return locations;
}

console.log(add(144, 946));
console.log(add(2, 11));
console.log(add(0, 1));
console.log(add(16, 18));
console.log(add(26, 39));
console.log(add(122, 81));
console.log(add(1222, 30277));
console.log(add(1236, 30977));
console.log(add(38810, 1383));
console.log(add(49999, 49999));
