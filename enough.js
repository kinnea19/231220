function enough(cap, on, wait) {
  return cap > on + wait ? 0 : on + wait - cap;
}

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));
