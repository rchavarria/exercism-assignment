let isSilent = (m) => m.trim().length === 0;
let isShouting = (m) => m.toUpperCase() === m && m.match(/[A-Z\xc0-\xdf]/);
let isAsking = (m) => m.endsWith('?');
let anything = () => true;

const CONDITIONS = [
  { question: isSilent, response: 'Fine. Be that way!' },
  { question: isShouting, response: 'Whoa, chill out!' },
  { question: isAsking, response: 'Sure.' },
  { question: anything, response: 'Whatever.' }
];

class Bob {
  hey(message) {
    message = message.trim();
    let [ {response} ] = CONDITIONS.filter((c) => c.question(message));
    return response;
  }
}

export default Bob;

