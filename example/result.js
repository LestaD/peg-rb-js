
class Example {
  constructor(id) {
    this.__id = id;
  }

  id() {
    return this.__id;
  }
}

class Foo extends Example {
  constructor(id, name) {
    super(id);

    this.__name = name;
  }

  name() {
    return this.__name.toLowerCase()
  }
}

const foo = new Foo(1, 'Hello');
console.log(foo.id(), foo.name());
