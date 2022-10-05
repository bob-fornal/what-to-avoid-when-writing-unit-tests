
// TypeScript
// LINK: https://playcode.io/978432

class TestThis1 {
  private element: string = 'ELEMENT';
}

const testThis1 = new TestThis1();

console.log(testThis1['element']); // ELEMENT

// JavaScript
// LINK: https://playcode.io/978431

class TestThis2 {
  #element = 'ELEMENT';
}

const testThis2 = new TestThis2();

console.log(testThis2['#element']); // UNDEFINED

