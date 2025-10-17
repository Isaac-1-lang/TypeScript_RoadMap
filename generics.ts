function identity<T>(value: T): T {
  return value;
}

let num1 = identity<number>(42);
let str1 = identity<string>("Isaac");



function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then(res => res.json());
}

// Use with inferred type
interface User {
  id: number;
  name: string;
}

fetchData<User[]>("/api/users").then(users => console.log(users[0].name));
