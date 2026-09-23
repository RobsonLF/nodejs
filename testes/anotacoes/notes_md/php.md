# PHP Moderno

Categoria: php

Plataforma: Curso em Video

Texto Breve: Aprenda PHP moderno com segurança, clareza e foco no que importa

## LIVROS

1 - Documentação oficial de PHP
2 - Aprendendo PHP - David Sklar (Ed. O'Reilly)
3 - Programming PHP - Kevin Tatroe & Peter Maclntyre (Ed. O'Reilly)
4 - Learn PHP 8 - Steve Prettyman (Ed. Apress)
5 - PHP 8 Quick Scripting Reference - Mika Schwartz (Ed. Apress)
6 - PHP & MySQL: Server-side Web Development - Jon Duckett (Ed. Wiley)

Nota: Acronimo recursivo
      JSON - JavaScript object notation

## CONFIGURAÇÃO AMBIENTE PHP

1 - Os projetos tem que ser criados na pasta do xampp htdocs;
2 - Ativar o autosave no vscode;
3 - Ativar o Word Wrap;
4 - Extensões vscode
4.1 - Portuguese - Microsoft
4.2 - PHP Inteliphense - Ben Mewburn
4.3 - format HTML in PHP
4.4 - PHP Awesome Snippets - HakCorp

## INCORPORANDO PHP NO HTML

1. <?php ?> --> super tag PHP
2. <?    ?> --> short open tag
3. <%    %> --> ASP tag
4. <?=   ?> --> short tag PHP

## OUTROS COMANDOS

// --> Comentários em php
ctrl + ; --> comenta todo trecho selecionado do código.

## REGRAS PARA NOMES IDENTIFICADORES

1. Variáveis sempre começam com o símbolo $.
2. O segundo pode ser letra ou o símbolo _.
3. Aceita caracteres [a-z], [A-Z], [0-9] E [_].
4. Aceita caracteres da tabela ASCII a partir de 128.
5. Aceita caracteres acentuados como á, õ, ç.
6. A linguagem é case sensitive em relação aos nomes.
7. Nomes especiais como $this não podem ser usados.

## RECOMENDAÇÕES PARA INDENTIFICADORES

1. Tentar dar nomes claros e de fácil identificação.
2. Evite nomes muito curtos ou muito longos.
3. Definir um padrão de nomeação e siga em todo projeto.
4. Para Variáveis, dê preferencia para letras minúsculas.
5. Para constantes, dê preferência para letras maiúsculas.
6. Use camelCase para métodos e atributos.
7. Use snake_case para nomear constantes.

## TIPOS PRIMITIVOS

Categorias de tipos primitivos:

|
|--> Escalares
|        |--> string - cadeia de caracteres;
|        |--> int ou integer - valor numérico inteiro;
|        |--> float ou double - valores numérico real que tem uma parte decimal, depois do ponto flutuante;
|        |--> bool ou boolean - que aceita valores true e false.
|
|--> Compostos
|        |--> array
|        |--> object
|
|--> Especiais
|        |--> null
|        |--> resource
|        |--> callabe
|        |--> mixed

STRINGS

1. Double quoted --> Aspas duplas
   1.1. Operador de concatenação de strings .
   1.2. Acontece a interpretação da string
   1.3. \u indica uma sequencia de escape. É utilizada para exibição de caracteres especiais unicode. Como por exemplo um emoji \u{1F418}
   Ex:
   $nome = "Robson";
   echo "O nome é $nome ";
   Saída--> O nome é Robson

   Sequencias de escapa para aspas duplas
   \n - Nova linha
   \t - Sinal de tabulação - da um tab
   \\ - Barra invertida
   \$ - Sinal de cifrão
   \u{} - Codepoint unicode
2. Single quoted --> Aspas simples

   Ex:
   $nome = "Robson";
   echo 'O nome é $nome ';
   Saída--> O nome é $nome
3. Heredoc -->
4. Nowdoc

### IMPORTANTE

Para mostra o valor de uma constante junto com uma string deve se usar o operador de concatenação, o .

FORMULÁRIOS

### IMPORTANTE

Sempre determinar o método e a ação do formulário
method = get
action = cad.php

1. Todos os dados enviados do arquivo html para o arquivo cad.php estão em uma supervariável global. No caso do ex006 é ao variável $_GET.
   1.1. Se usar o comando var_dump($_GET) ele vai retornar todos os valores que estão sendo envidados do html para o php.
   1.2. São 3 superglobais
   1.2.1. $_GET
   1.2.2. $_POST
   1.2.3. $_REQUEST - É uma junção de $_GET, $_POST e $_COOKIES

## OPERADORES ARITMÉTICOS

      + --> Adição
      - --> Subtração
      * --> Multiplicação
      / --> Divisão real
      % --> Resto
     ** --> Potência
