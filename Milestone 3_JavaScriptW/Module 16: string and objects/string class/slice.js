const address =  "Mohakhali";
const part = address.slice(2,4);
console.log(part);


const sentence = "I am a good and hardworking person. ";
console.log(sentence.split(" a "));


// "String to array"
const friendsStr = 'Rahim , karim , dhahim, fakir';
const frie = friendsStr.split(",");
console.log(frie);


const reailFriend = [ 'Rahim ', ' karim ', ' dhahim', ' fakir' ];
console.log(reailFriend.join());
console.log(reailFriend.join("|"));
