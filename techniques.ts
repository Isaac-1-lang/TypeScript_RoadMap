// Type Aliases
type ID = string | number;

function getUser(id:ID) {
  return { id,name:"Isaac"};
}


// Intersection types

type user = { name:string};
type Admin = { isAdmin:boolean};
type AdminUser = User & Admin;


// Generics



