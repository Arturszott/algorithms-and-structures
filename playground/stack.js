import Stack from '../structures/Stack.js';

const stack = new Stack(4);
stack.push(7);
stack.push(6);
stack.push(2);
stack.push(4);
console.log(stack.contains(7));
console.log(stack.until(7));
console.log(stack.sort());
console.log(stack.pop());

console.log('length', stack.count());
