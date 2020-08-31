function testLiteral(hello, there) {
  return `${hello[0]}${there}`;
}

const there = 'there!';
const helloThere = testLiteral`Hello ${there}`;

console.log(helloThere);