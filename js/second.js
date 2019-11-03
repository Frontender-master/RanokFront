let declaredVariable;
// Переменная declaredVariable объявлена, но не инициализирована,
// поэтому ее значение undefined (не определено),
// тогда как переменная undeclaredVariable не была объявлена,
// поэтому доступ к ней вызывает ошибку ReferenceError

console.log(
    declaredVariable
); // undefined

console.log(
    undeclaredVariable
); // ReferenceError: undeclaredVariable is not defined