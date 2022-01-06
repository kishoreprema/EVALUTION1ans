var a = new Set();
var arr = [
    {id: 1, name: 'Stephen covey'},
    {id: 2, name: 'Robin Sharma' }, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 5, name: 'James clear'},
    {id: 5, name: 'James clear'},
];

var filteredArr = arr.filter(values => {
  const duplicate1= a.has(values.id);
  a.add(values.id);
  const duplicate2= a.has(values.id);
  a.add(values.name);
  return !duplicate1,!duplicate2 ;
});
console.log(a);