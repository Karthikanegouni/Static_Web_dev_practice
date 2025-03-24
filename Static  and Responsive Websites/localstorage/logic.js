let list = [
  { name: "Karthik", Age: 25, city: "hyderabad" },
  {
    name: "Pavan",
    Age: 24,
    city: "chennai",
  },
];

localStorage.setItem("name", "Karthik");
localStorage.setItem("list1", JSON.stringify(list));

let ls = localStorage.getItem("list1");
ls = JSON.parse(ls);
console.log(ls);

localStorage.removeItem("name");

localStorage.clear();
