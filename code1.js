const calculateAnswer = (email) =>

{

const [localPart, domain] = email.split("@");

const [hostname, ...countryCodes] = domain.split(".");

return `${localPart.length}${hostname.length}${countryCodes.reduce( (a,cc) => a + cc.length, "")}`
};

const email = "karthikmalla745@gmail.com"
const answer = calculateAnswer(email)
console.log(answer)