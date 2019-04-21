let a = 10;

let b = {a: 5};

b.fn = () => {
  console.log(this);
}

this = b;
b.fn()
