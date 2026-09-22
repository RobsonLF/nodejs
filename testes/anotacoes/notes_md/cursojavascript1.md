# JavaScript

Categoria: Desenvolvimento

Plataforma: Curso em Video

Texto Breve: Aprenda JavaScript do zero e domine a linguagem que move a web

# Anotações Do Curso de *JavaScript*

## Referências

### Livros

- JavaScript: O Guia Definitivo
- JavaScript: Guia do Programador

### Sites

- Guia de Referência Mozilla
- Guia de Referência ECMA

# Índice

- [Variáveis](#variaveis)

  - [Regras para Identificadores](#regras-id)
  - [Tipos Primitivos](#tipos)
  - [Conversões entre Tipos](#conversoes)
  - [Formatando Variáveis](#formatacao)
- [Operadores](#operadores)

  - [Aritméticos](#op-aritmeticos)
  - [Atribuição](#op-atribuicao)
  - [Relacionais](#op-relacionais)
  - [Lógicos](#op-logicos)
  - [Ternários](#op-ternarios)
- [Aprendendo DOM](#dom)
- [Aprendendo Condições](#Cond)
- []()
- [NOTAS IMPORTANTES](#notas)

<a id="variaveis"></a>

## Variáveis

- Criando variaveis no JS = var x = 10
- Para declaração de string
  - var s1 = "JavaScript"
  - var s2 = 'Curso de JS'
  - var s3 = `Robson Luis`
- Nomes das Variáveis: Os nomes das váriaveis são chamados de **Identificadores**

 <a id="regras-id"></a>

- ### Regras para **Identificadores**

  - O que pode:

    - Podem começar com letra
    - Podem começar com $
    - Podem começar com _
    - Pode usar acento
    - Pode usar símbolos
  - O que não pode:

    - Não podem começar com números
    - Não podem conter espaços
    - Não podem ser palavras reservadas do sistema
- Nomear as variáveis conforme a função que ela executa no programa

 <a id="tipos"></a>

- ### Tipos Primitivos

  - Number
    - Infinity
    - NaN - Not an Number
  - Strings
  - Boolean
  - Null
  - Undefined
  - Object
    - Array
  - Function
- Comando importante para saber qual é o tipo do dado é o typeof.

<a id="conversoes"></a>

- ### Conversões de tipos de variáveis

  - Conversões Numéricas:

    - Para números Inteiros: Number.parseInt(n)
    - Para números Reais: Number.parseFloat(n)
    - Pode usar apena Number para que o JS identifique o tipo: Number(n)
  - Conversão de String:

    - String(n)
    - n.toString()

<a id="formatacao"></a>

- ### Formatando Strings

  - s.length //retorna quantos caracteres tem a string
  - s.toUpperCase() //retorna a string com todos os caracteres em maiusculo
  - s.toLowerCase() //retorna a string com todos os caracteres em minusculo
- ### Formatando Números

  - n1.toFixed(2) //retorna um float com 2 casas decimais
  - n1.toFixed(2).replace('.' , ',') //retorna um float com 2 casas decimais e substitui o . por ,
  - n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})//retorna um numero com REAL
  - n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})//retorna um numero com DOLAR
  - n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})//retorna um numero com EURO

<a id="operadores"></a>

## Operadores

 <a id="op-aritmeticos"></a>

### Operadores Aritméticos

    Operadores aritméticos binários: precisão de no mínimo 2 operandos
    5  +  2 = 7   --> Adição
    5  -  2 = 3   --> Subtração
    5  *  2 = 10  --> Multiplicação
    5  /  2 = 2.5 --> Divisão
    5  %  2 = 2   --> Resto
    5 **  2 = 25  --> Potência

#### Ordem de Precedência

   &nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;()
   &nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**
   &nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* / %
   &nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ -
   &nbsp;&nbsp;V &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <a id="op-atribuicao"></a>

### Operador de Atribuição

    O sinal de igual é o operador de atribuição '='
    Ex de atribuições normais:
    var a = 5 + 3 --------------> a = 8
    var b = a % 5 --------------> b = 3
    var c = 5 * b ** 2 ---------> c = 45
    var d = 10 - a / 2 ---------> d = 6
    var e = 6 * 2 / d ----------> e = 2
    var f = b % e + 4 / e ------> f = 3

    Ex de auto-atribuições
    var n = 3
    n = n + 4 ---> n  += 4
    n = n - 5 ---> n  -= 5
    n = n * 4 ---> n  *= 4
    n = n / 2 ---> n  /= 2
    n = n** 2 ---> n **= 2
    n = n % 5 ---> n  %= 5

    Operador de Incremento

    var x = 5
    x = x + 1 ----> x += 1 ----> x ++
    x = x - 1 ----> x -= 1 ----> x --

 <a id="op-relacionais"></a>

```
   >  ------> 5 >  2 ---> true
   <  ------> 7 <  4 ---> false
   >= ------> 8 >= 8 ---> true
   <= ------> 9 <= 7 ---> false
   == ------> 5 == 5 ---> true
   != ------> 4 != 4 ---> false

   5 == '5'  ---> true
   5 === '5' ---> false operador identidade irrestrita " Lê se 5 identico a 5 = true

```

 <a id="op-logicos"></a>

```
   !   ------> negação  = Operador Unário, apenas um operadorando 
   &&  ------> conjunção E - AND = Operador binário dois operandos
   ||  ------> Dijunção OU - OR  = Operador binário dois operandos

   x ! true   ---> x é falso
   x ! false  ---> x é true

   x == true  && y == true   ----> true
   x == true  && y == false  ----> false
   x == false && y == true   ----> false
   x == false && y == false  ----> false

   x == true  || y == true   ----> true
   x == true  || y == false  ----> true
   x == false || y == true   ----> true
   x == false || y == false  ----> false
```

   Precedência entre operadores aritméticos, relacionais e logicos

```
   | () ** / ...
   | > < =   ...
   | !
   | &&
   | ||
   |
   V
```

<a id="op-ternarios"></a>

```
   ? - operador
   : - operador
   Ex:

   media >= 7 ? 'APROVADO' : 'REPROVADO'
   
```

<a id="dom"></a>

## Aprendendo DOM

### Metodos para navegar na árvore DOM

- Seletores

  - por marca(tag) - .getElementsByTagName()[]
  - por id - .getElementById()
  - por nome - .getElementsByName()[]
  - por classe - .getElementsByClassName()[]
  - por seletor - .querySelector('div.msg')
- Eventos

  - Tudo aquilo que pode acontecer com qualquer elemento.
    - Eventos de Mouse
      - mouseenter
      - mousemove
      - mousedown
      - mouseup
      - click
      - mouseout
    - [Eventos JavaScript](https://udn.realityripple.com/docs/Web/Events)

<a id="Cond"></a>

## Aprendendo sobre Condições

### Condições Simples

```
   if(condição){
     true
   }
```

### Condições Compostas

```
   if(condição){
     true
   }else{
     false
   }
```

### Condições Aninhadas

```
  if (condicao1){
    bloco1
  }else if(condicao2){
    bloco2
  }else{
    bloco3
  }
```

### Condições Múltiplas

```
switch(expressao){
  case valor1:
    bloco1
    break
  case valor2:
    bloco2
    break
  default:
    bloco3
    break
}
```

### Exercícios Propostos

<a id="notas"></a>

## Notas Importantes

- O *ECMAScript* é a versão mais padronizada do JavaScript.
- Para rodar o JavaScript no vscode tem que instalar o node.js.
- Em JavaScript o comentário pode ser feito com // ou /* */.
- Ordem de Precedendia de Operadores, importante saber a ordem em que ocorre cada operação. Ex.: 5 + 3 / 2 = 6.5.
- Quando tem operadores aritmeticos, relacionais e lógicos a ordem deve ser:
  - Primeiro todos aritmeticos, depois todos operadores relacionais e ai sim o lógicos.
  - ``Ex.: a > b && b % 2 == 0``
- DOM Document Object Model - Conjunto de objetos que tem dentro do navegador, que dá acesso aos componentes internos do site.
  - [Arvore DOM](img-Aula/arvoreDOM.png)
- Um bloco de código é envelopada dentro de {}, deve começar com function e ter um nome e pode ter parametros.
