/* 
#######################################
* Operadores Aritméticos*             #
 * + Adição / concatenção             #
 * - Subtração                        # 
 * * Multiplicação                    # 
 * / Divisão                          # 
 * % Módulo - Resto da divisão        #
 * ** Exponenciação                   #
 *                                    #
 * Precedencia de operadores          #
 * 1. ()                              #
 * 2. **                              #
 * 3. * / %                           #
 * 4. + -                             #
 * Incrementar                        #
 * variavel++                         #
 * Decrementar                        #
 * variavel--                         #
 *                                    #
 * Operador de atribuição             #
 * variavel +=
 * 
 * 
#######################################    
*/                                   

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3);

const passo = 2;
let contador = 0;
/*
contador += passo; // contador = contador + passo
console.log(contador);
*/
contador += 2; // contador = contador + 2
console.log(contador);

contador += 2; // contador = contador + 2
console.log(contador);

contador += 2; // contador = contador + 2
console.log(contador);

const num4 = 10;
const num5 = '5.2';

//casting de string para number
const num6 = parseInt(num5);
const num7 = parseFloat(num5);
const num8 = Number(num5);

console.log(num4 + num6);
console.log(num4 + num7);
console.log(num4 + num8);