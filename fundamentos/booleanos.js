let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 0;
console.log(!!isAtivo);

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("para finalizar...");

console.log(!!("" || null || 0 || " ")); // tendo 1 valor verdadeiro, ele mostra como true

console.log("" || null || 0 || "oi"); // mostra o valor verdadeiro que ele encontrou, que no caso foi a string 'oi'

let nome = ''
console.log(nome || 'Desconhecido')
