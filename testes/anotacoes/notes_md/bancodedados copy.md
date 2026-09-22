
# Banco de Dados SQL e NoSQL

Categoria: Banco de dados

Plataforma: Udemy

Texto Breve: Aprenda tudo sobre bancos de dados relacionais e não relacionais: MySQL, PostgreSQL, SQLite, MongoDB, Modelagem de Dados


SEÇÃO 1 - INTRODUÇÃO

## Dados e informação

### Banco de dados Relacional x Não Relacional

DB Relacional - SQL

Onde os dados estão armazenados em tabelas e por sua vez podem ou não estar relacionados;

DB Não Relacional - NoSQL

Onde os dados são armazenados de não estruturada (em tabelas). Com isso a um ganho de performance .

### Principais Sistemas de Gerenciamento Bancos de dados relacionais SGBDR

MYSQL*

Sybase

Access

SQLite*

MariaDB

TeraData

SQLServer

PostegreSQL*

IBMDB2

Apache Derby

Oracle

### Principais Sistemas de Gerenciamento Bancos de dados Não relacionais

MongoDB*

membase

Apache Solr

CouchDB*

RavenDB

elasticsearch

riak

Redis*

Cassandra

Neo4j

Oracle Coherence

Firebase*

### Arquitetura Cliente-Servidor

Arquitetura onde é oferecido serviços para vários clientes. Tais serviços disponibilizados em um servidor que está na rede

<aside>
💡 Notas
SQL - Structure Query language
      Linguagem de consulta estruturada
NoSQL - Not Only SQL
        Não somente SQL

Escalabilidade - Capacidade de se adaptar ao aumento das solicitações;

</aside>

<aside>
❓ Pesquisar
O que é Grafos na ciência da computação

</aside>

## SEÇÃO 2 - MODELAGEM DE DADOS

### Modelagem conceitual de dados

#### Tipos de relacionamento

Relacionamento Unário ou de Grau 1: é quando uma tabela se relaciona com entre si;

Relacionamento Binário ou Grau 2: é quando uma tabela(entidade) se relaciona com outra tabela(entidade);

Relacionamento Ternário ou Grau 3: é quando 3 tabelas(entidades) se relaciona entre si por meio de um relacionamento em comum com as 3;

#### Cardinalidade (Máxima)

Define a quantidade máxima de ocorrências de um entidade que poderá estar associada a outras entidades;

#### Normalização de Dados

São regras para verificar se o Banco de Dados foi construído corretamente;

Primeira Forma Normal(1FN): Uma entidade atenderá a 1FN se todos os campos forem atômicos(simples) e não multivalorados(com múltiplos valores);

Segunda Forma Normal(2FN): Uma entidade atenderá a 2FN se ela já se encontrar na 1FN e se todos os atributos não chave forem totalmente dependentes da chave primária;

Terceira Forma Normal(3FN): Uma entidade atenderá a 3FN se ela já se encontrar na 2FN e se nenhuma coluna não-chave depender de outra coluna não-chave

Outras Formas Normais:

4FN

5FN

### MER - Modelo Entidade Relacional no workbench

Padrão para nomenclatura de tabelas: sempre em letras minúsculas, plural, separação por underline_,

<aside>
💡 NOTAS
Um modelo de dados não informa quais dados estão armazenados em um banco, mais sim apenas quais e que tipo de dados contém.
Sempre que houver uma relação n:m(muitos para muitos) é necessário a criação de uma nova tabela.

!image.png

</aside>

<aside>
❓ PESQUISAR
Diagramas UML

</aside>

## SEÇÃO 3: Linguagem SQL

### DQL - Data Query Language

Comando SQL - SELECT

Exemplo:

SELECT * FROM nome_tabela; —> retorna todos os dados dos campos da tabela

SELECT campo1, campo2 FROM nome_tabela; —> retorna todos os dados dos campos especificados na query

Criação de alias para nome de campos e de tabelas

SELECT campo1 AS cod, campo2 AS desc, campo3 AS preco FROM nome_tabela AS t; —> atribui nomes para os campos da tabela e para tabela dentro da consulta

### DML - Data Manipulation Language

Comandos SQL - INSERT, UPDATE e DELETE

<aside>
<img src="/icons/plus_green.svg" alt="/icons/plus_green.svg" width="40px" /> INSERT

```sql
INSERT INTO nome_tabela (nome_campo) VALUES(’valor_a_inserir’);
INSERT INTO nome_tabela (nome_campo1, nome_campo2, nome_campo3) VALUES(’valor1’,valor2, valor3);
```

</aside>

<aside>
<img src="/icons/swap-vertically_green.svg" alt="/icons/swap-vertically_green.svg" width="40px" /> UPDATE

```sql
UPDATE nome_tabela set nome_campo = “valor a atualizar” WHERE nome_campo_indice = indice;
UPDATE nome_tabela set nome_campo1 = “valor1”, nome_campo2 = “valor2” WHERE nome_campo_indice = indice;
```

</aside>

<aside>
<img src="/icons/close_green.svg" alt="/icons/close_green.svg" width="40px" /> DELETE

```sql
DELETE FROM nome_tabela WHERE campo_indice = indice;
```

</aside>

### DDL - Data Definition Language

Comandos SQL - CREATE, ALTER, DROP

<aside>
<img src="/icons/plus_yellow.svg" alt="/icons/plus_yellow.svg" width="40px" /> CREATE - Usado para criar um banco de dados, tabela e outros objetos no banco de dados

```sql
CREATE DATABASE nome_do_banco;
CREATE TABLE nome_tabela(campo1 INT PRIMARY KEY, campo2 VARCHAR(50));
```

</aside>

<aside>
<img src="/icons/swap-vertically_yellow.svg" alt="/icons/swap-vertically_yellow.svg" width="40px" /> ALTER - Usado para alterar a estrutura da tabela ou outro objeto do banco de dados

```sql
ALTER TABLE nome_tabela ADD nome_campo DECIMAL(8,2);
```

</aside>

<aside>
<img src="/icons/close_yellow.svg" alt="/icons/close_yellow.svg" width="40px" /> DROP - Usado para apagar um banco de dados, tabelas e outros objetos do banco de dados

```sql
DROP TABLE nome_tabela;
DROP DATABASE nome_banco_de_dados;
```

</aside>

### DCL - Data Control Language

Comandos SQL - GRANT e REVOKE - Usado para controlar autorização de dados e licenças de usuários - Controle de acesso para os usuários;

<aside>
<img src="/icons/follow_red.svg" alt="/icons/follow_red.svg" width="40px" /> GRANT - Usado para autorizar um usuário a executar ou setar operações no banco de dados;

```sql
GRANT SELECT ON nome_tabela TO nome_usuario;
```

</aside>

<aside>
<img src="/icons/unfollow_red.svg" alt="/icons/unfollow_red.svg" width="40px" /> REVOKE - Usuado para remover ou restringir a capacidade de um usuário a executar operações no banco de dados;

```sql
REVOKE CREATE TABLE FROM nome_usuario;
```

</aside>

### DTL - Data Transaction Language

Comando SQL - BEGIN, COMMIT e ROLLBACK

<aside>
<img src="/icons/playback-play_green.svg" alt="/icons/playback-play_green.svg" width="40px" /> BEGIN - Usado para marcar o começo de uma transação que pode ser completada ou não

```sql
CREATE TABLE 'nome_tabela' (campo1 INT PRIMARY KEY, campo2 VARCHAR(50));
BEGIN TRANSACTION; --COMEÇAMOS A TRANSAÇÃO
	INSERT INTO nome_tabela VALUES('valor1');
	INSERT INTO nome_tabela VALUES('valor2');
COMMIT; --TERMINA A TRANSAÇÃO E GRAVA OS DADOS
```

</aside>

<aside>
<img src="/icons/sign-in_green.svg" alt="/icons/sign-in_green.svg" width="40px" /> COMMIT - Usado para finalizar uma transação

```sql
CREATE TABLE 'nome_tabela' (campo1 INT PRIMARY KEY, campo2 VARCHAR(50));
BEGIN TRANSACTION; --COMEÇAMOS A TRANSAÇÃO
	INSERT INTO nome_tabela VALUES('valor1');
	INSERT INTO nome_tabela VALUES('valor2');
COMMIT; --TERMINA A TRANSAÇÃO E GRAVA OS DADOS
```

</aside>

<aside>
<img src="/icons/undo_green.svg" alt="/icons/undo_green.svg" width="40px" /> ROLLBACK - Usado para descartar as alterações feitas pelo último COMMIT

```sql
CREATE TABLE 'nome_tabela' (campo1 INT PRIMARY KEY, campo2 VARCHAR(50));
BEGIN TRANSACTION; --COMEÇAMOS A TRANSAÇÃO
	INSERT INTO nome_tabela VALUES('valor1');
	INSERT INTO nome_tabela VALUES('valor2');
ROLLBACK; --TERMINA A TRANSAÇÃO E GRAVA OS DADOS
```

</aside>

### Filtrando consultas com WHERE

Exemplo:

tipo_produto

| codigo | descricao  |
| ------ | ---------- |
| 1      | Computador |
| 2      | Impressora |

produto

| codigo | descricao           | preco   | codigo_tipo_produto |
| ------ | ------------------- | ------- | ------------------- |
| 10     | Desktop             | 1200,00 | 1                   |
| 20     | Laptop              | 1800,00 | 1                   |
| 30     | Impr. Jato de tinta | 300,00  | 2                   |
| 40     | Impr. Laser         | 500,00  | 2                   |

```sql
SELECT * FROM tipo_produto WHERE codigo = 1; --retorna computador
SELECT * FROM produto WHERE codigo_tipo_produto = 1; --retorna as linhas 10 e 20

```

### Consultas em Multiplas tabelas

Exemplo:

tipo_produto

| codigo | descricao  |
| ------ | ---------- |
| 1      | Computador |
| 2      | Impressora |

produto

| codigo | descricao           | preco   | codigo_tipo_produto |
| ------ | ------------------- | ------- | ------------------- |
| 10     | Desktop             | 1200,00 | 1                   |
| 20     | Laptop              | 1800,00 | 1                   |
| 30     | Impr. Jato de tinta | 300,00  | 2                   |
| 40     | Impr. Laser         | 500,00  | 2                   |

```sql
SELECT p.codigo AS codigo, p.descricao AS descricao, p.preco AS preco, tp.descricao as tipo FROM produto as p, tipo_produto AS tp WHERE p.codigo_tipo_produto = tp.codigo;
```

### Junção de tabelas

Na elaboração de consultas é comum ter necessidade de trazer dados de tabelas diferentes.

Para selecionar dados deve-se definir critérios de agrupamento. Esses critérios são chamados de junções.

### Junção de produto cartesiano

É a junção de duas tabelas originando uma terceira tabela. Com todos os elementos das duas tabelas.

profissoes

| id | cargo                |
| -- | -------------------- |
| 1  | Programador          |
| 2  | Analista de Sistemas |
| 3  | Suporte              |
| 4  | Gerente              |

colaboradores

| id | nome             | data_nascimento | telefone  | id_profissao |
| -- | ---------------- | --------------- | --------- | ------------ |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | 1            |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | 2            |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | 3            |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | 1            |

```sql
SELECT c.id, c.nome, c.data_nascimento, c.telefone, p.cargo FROM colaboradores AS c, profissoes AS p  WHERE c.id_profissao = p.id;
```

resultado

| id | nome             | data_nascimento | telefone  | cargo                |
| -- | ---------------- | --------------- | --------- | -------------------- |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | Programador          |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | Analista de Sistemas |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | Suporte              |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | Programador          |

### Junção Interna (inner join)

profissoes

| id | cargo                |
| -- | -------------------- |
| 1  | Programador          |
| 2  | Analista de Sistemas |
| 3  | Suporte              |
| 4  | Gerente              |

colaboradores

| id | nome             | data_nascimento | telefone  | id_profissao |
| -- | ---------------- | --------------- | --------- | ------------ |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | 1            |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | 2            |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | 3            |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | 1            |

```sql
SELECT c.id, c.nome, c.data_nascimento, c.telefone, p.cargo FROM colaboradores AS c INNER JOIN profissoes AS p ON c.id_profissao = p.id;
```

resultado

| id | nome             | data_nascimento | telefone  | cargo                |
| -- | ---------------- | --------------- | --------- | -------------------- |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | Programador          |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | Analista de Sistemas |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | Suporte              |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | Programador          |

MESMO RESULTADO DO PRODUTO CARTESIANO

### Junção Externa (Left Outer join)

profissoes

| id | cargo                |
| -- | -------------------- |
| 1  | Programador          |
| 2  | Analista de Sistemas |
| 3  | Suporte              |
| 4  | Gerente              |

colaboradores

| id | nome             | data_nascimento | telefone  | id_profissao |
| -- | ---------------- | --------------- | --------- | ------------ |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | 1            |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | 2            |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | 3            |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | 1            |

```sql
SELECT * FROM colaboradoes LEFT OUTER JOIN profissoes ON colaboradores.id_profissao = profissoes.id;
```

resultado

| id | nome             | data_nascimento | telefone  | id_profissao | id | cargo                |
| -- | ---------------- | --------------- | --------- | ------------ | -- | -------------------- |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | 1            | 1  | Programador          |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | 1            | 1  | Programador          |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | 2            | 2  | Analista de Sistemas |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | 3            | 3  | Suporte              |

### Junção Externa (Right Outer join)

profissoes

| id | cargo                |
| -- | -------------------- |
| 1  | Programador          |
| 2  | Analista de Sistemas |
| 3  | Suporte              |
| 4  | Gerente              |

colaboradores

| id | nome             | data_nascimento | telefone  | id_profissao |
| -- | ---------------- | --------------- | --------- | ------------ |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | 1            |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | 2            |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | 3            |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | 1            |

```sql
SELECT * FROM colaboradoes RIGHT OUTER JOIN profissoes ON colaboradores.id_profissao = profissoes.id;
```

resultado

| id   | nome             | data_nascimento | telefone  | id_profissao | id | cargo                |
| ---- | ---------------- | --------------- | --------- | ------------ | -- | -------------------- |
| 1    | João Perreira   | 1981-06-15      | 1234-5688 | 1            | 1  | Programador          |
| 2    | Ricardo da Silva | 1973-10-10      | 2234-5669 | 2            | 2  | Analista de Sistemas |
| 3    | Felipe Oliveira  | 1987-08-01      | 4234-5640 | 3            | 3  | Suporte              |
| 4    | Mário Pirez     | 1991-02-05      | 5234-5621 | 1            | 1  | Programador          |
| NULL | NULL             | NULL            | NULL      | NULL         | 4  | Gerente              |

### Junção Externa (Full Outer join)

profissoes

| id | cargo                |
| -- | -------------------- |
| 1  | Programador          |
| 2  | Analista de Sistemas |
| 3  | Suporte              |
| 4  | Gerente              |

colaboradores

| id | nome             | data_nascimento | telefone  | id_profissao |
| -- | ---------------- | --------------- | --------- | ------------ |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | 1            |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | 2            |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | 3            |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | 1            |

```sql
SELECT * FROM colaboradoes FULL OUTER JOIN profissoes ON colaboradores.id_profissao = profissoes.id;
```

Versão MySQL

```sql
SELECT * FROM colaboradoes LEFT OUTER JOIN profissoes ON colaboradores.id_profissao = profissoes.id 
UNION 
SELECT * FROM colaboradoes RIGHT OUTER JOIN profissoes ON colaboradores.id_profissao = profissoes.id;
```

resultado

| id   | nome             | data_nascimento | telefone  | id_profissao | id | cargo                |
| ---- | ---------------- | --------------- | --------- | ------------ | -- | -------------------- |
| 1    | João Perreira   | 1981-06-15      | 1234-5688 | 1            | 1  | Programador          |
| 2    | Ricardo da Silva | 1973-10-10      | 2234-5669 | 2            | 2  | Analista de Sistemas |
| 3    | Felipe Oliveira  | 1987-08-01      | 4234-5640 | 3            | 3  | Suporte              |
| 4    | Mário Pirez     | 1991-02-05      | 5234-5621 | 1            | 1  | Programador          |
| NULL | NULL             | NULL            | NULL      | NULL         | 4  | Gerente              |

<aside>
💡 Esta consulta não funciona no MySQL mas pode ser simulada utilizando um LEFT JOIN e um RIGHT JOIN;

</aside>

### Junção Cruzada (Cross join)

profissoes

| id | cargo                |
| -- | -------------------- |
| 1  | Programador          |
| 2  | Analista de Sistemas |
| 3  | Suporte              |
| 4  | Gerente              |

colaboradores

| id | nome             | data_nascimento | telefone  | id_profissao |
| -- | ---------------- | --------------- | --------- | ------------ |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | 1            |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | 2            |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | 3            |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | 1            |

```sql
SELECT c.id, c.nome, c.data_nascimento, c.telefone, p.cargo FROM colaboradores AS c CROSS JOIN profissoes AS p;
```

resultado

| id | nome             | data_nascimento | telefone  | cargo                |
| -- | ---------------- | --------------- | --------- | -------------------- |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | Programador          |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | Analista de Sistemas |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | Suporte              |
| 1  | João Perreira   | 1981-06-15      | 1234-5688 | Gerente              |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | Programador          |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | Analista de Sistemas |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | Suporte              |
| 2  | Ricardo da Silva | 1973-10-10      | 2234-5669 | Gerente              |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | Programador          |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | Analista de Sistemas |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | Suporte              |
| 3  | Felipe Oliveira  | 1987-08-01      | 4234-5640 | Gerente              |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | Programador          |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | Analista de Sistemas |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | Suporte              |
| 4  | Mário Pirez     | 1991-02-05      | 5234-5621 | Gerente              |

### Auto Junção (Self join)

consumidores

| id | nome          | contato         | endereco         | cidade     | cep        | pais   |
| -- | ------------- | --------------- | ---------------- | ---------- | ---------- | ------ |
| 1  | Alfredo Nunes | Maria Nunes     | Rua da Paz, 47   | São Paulo | 123.456-78 | Brasil |
| 2  | Ana Trujillo  | Guilherme Souza | Rua Dourada, 452 | Goiânia   | 232.984-23 | Brasil |
| 3  | Leandro Veloz | Pedro Siqueira  | Rua Vazia, 72    | São Paulo | 936.738-23 | Brasil |

```sql
SELECT a.nome AS consumidor1, b.nome AS consumidor2, a.cidade FROM consumidor AS a INNER JOIN consumidor AS b ON a.id <> b.id AND a.cidade = b.cidade;
```

Versão MySQL

resultado

| id   | nome             | data_nascimento | telefone  | id_profissao | id | cargo                |
| ---- | ---------------- | --------------- | --------- | ------------ | -- | -------------------- |
| 1    | João Perreira   | 1981-06-15      | 1234-5688 | 1            | 1  | Programador          |
| 2    | Ricardo da Silva | 1973-10-10      | 2234-5669 | 2            | 2  | Analista de Sistemas |
| 3    | Felipe Oliveira  | 1987-08-01      | 4234-5640 | 3            | 3  | Suporte              |
| 4    | Mário Pirez     | 1991-02-05      | 5234-5621 | 1            | 1  | Programador          |
| NULL | NULL             | NULL            | NULL      | NULL         | 4  | Gerente              |

<aside>
💡 Esta consulta não funciona no MySQL mas pode ser simulada utilizando um LEFT JOIN e um RIGHT JOIN;

</aside>

<aside>
💡 NOTAS
Data Query Language - Linguagem de consulta de dados

</aside>

<aside>
❓ PESQUISAR
Utilização do ROLLBACK

</aside>

## SEÇÃO 4: MySQL

### Instalação e Configuração MySQL no Windows

1. Baixar o MySQL community server

MySQL :: Download MySQL Community Server

1. Configurar o MySQL no path do sistema
   1. Menu Inicar e digitar ‘Meu Computador’
   2. Botão direito em ‘Meu Computador’ depois selecionar propriedades
   3. Selecionar ‘Configurações avançadas do sistema’
   4. Selecionar ‘Variáveis de ambiente’
   5. Selecinar Path na lista ‘Variáveis do Sistema’
   6. Clicar em Editar
   7. Abrir o explorer e copia o caminho C:\Program Files\MySQL\MySQL Server 8.0\bin
   8. Clicar em Novo na janela “Editar a variável de ambiente”
   9. Colar o caminho copiado na etapa g na janela “Editar a variável de ambiente”.

3.Usando o mysql pelo terminal

1. Iniciar o console MySQL
2. mysql -u root -p —> com esse comando acessamos o servidor com o usuário root. O -p solicita a senha
3. digita a senha

Criação e configuração de um novo usuário no servidor MySQL

```sql
#'Cria um usuário dentro do servidor'
CREATE USER 'nome_usuario'@'localhost' IDENTIFIED BY 'password';
#Da total acesso a todos os bancos criados
GRANT ALL PRIVILEGES ON *.* TO 'nome_usuario'@'localhost' WITH GRANT OPTION;
#Recarrega a tabela de privilégios do servidor de db para que o usuário seja reconhecido
FLUSH PRIVILEGES;
```

### Alguns comandos SQL pelo console

```sql
#Ver os bancos no servidor
SHOW DATABASES;
#Ativar um banco de dados
USE nome_do_banco;
#Mostra as tabelas do banco
SHOW TABLES;

```

### Criação de tabelas e definição de chaves

Para a chave estrangeira no workbench primeiro cria-se o nome da chave

Ex.: fk_nomedatabela_numerosequencial

Para o nome da chave estrangeira (Foreign Key) considera a tabela de origem (de onde vai partir) o relacionamento

A “Referenced Table” é a tabela de destino do relacionamento.

### Criar o banco de dados pelo diagrama no Workbench

Primeiro cria-se o diagrama

Database

Forward Enginner

Selecina a conexão/usuario

### Comandos DCL

Configurando permissões de usuários no workbench

Entrar com o usuário root

Selecionar a aba Administration

Selecionar users and privileges

Selecionar o usuária a configurar

Selecionar as permissões na aba Administrative Roles e schema privilegies seleciona as permissões

### Comandos DTL

É bom para usar em tratativas de erros

se o commit for utilizado não é possível utilizar o ROLLBACK, para desfazer a ação;
