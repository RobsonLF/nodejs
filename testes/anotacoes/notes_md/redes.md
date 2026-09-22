# Redes de Computadores

Categoria: Redes

Plataforma: Udemy

Texto Breve:Curso prático do básico ao avançado sobre redes de computadores.



**CORE / EDUCAÇÃO / REDES**

Plano de Estudos Redes de Computadores

- Logins para o curso

  Packet tracer cisco - robson.l.d.ferrer@gmail.com

  VMware - robson.l.d.ferrer@gmail.com - Paladino.13

## 1. Definições

### 1.1 Rede de computadores

É um conjunto de 2 ou mais dispositivos (ou nós) que usam um conjunto de regras e protocolos para compartilhar recursos de hardware ou software através de uma determinada conexão.

### 1.2 Conexão

É o meio que faz com que 2 ou mais dispositivos conversarem.

Uma conexão pode ser do tipo:

1. Cabeada par trançado
2. Cabeada fibra optica
3. Cabeada coaxial
4. Sem fio bluetooth

### 1.3 Unidades de medidas

| Prefixo   | Símbolo | Valores Decimais                  | Unidades Escala Curta | Múltiplos |
| --------- | -------- | --------------------------------- | --------------------- | ---------- |
| bit       | b        | 1                                 |                       | 0ou1       |
| Byte      | B        | 8                                 | Unidade               | 2^0        |
| Kilobite  | KB       | 1.048                             | Milhar                | 2^10       |
| Megabyte  | MB       | 1.048.576                         | Milhão               | 2^20       |
| Gigabyte  | GB       | 1.073.741.824                     | Milhar de Milhão     | 2^30       |
| Terabyte  | TB       | 1.099.511.627.776                 | Bilhão               | 2^40       |
| Petabyte  | PB       | 1.125.899.906.842.620             | Milhar de Bilhão     | 2^50       |
| Exabyte   | EB       | 1.152.921.504.606.850.000         | Trilhão              | 2^60       |
| Zettabyte | ZB       | 1.180.591.620.717.410.000.000     | Milhar de Trilhão    | 2^70       |
| Yottabyte | YB       | 1.208.925.819.614.630.000.000.000 | Quadrilhão           | 2^80       |

<aside>
💡

Notas - Taxa de Transferência

Transmissão em série: bits por segundo (bps)

Transmissão em paralelo: bytes por segundo(B/s)

</aside>

### 1.4 Componentes de uma rede

Hardwares - Placas de rede sem fio / Placas de rede com fio Ethernet;

Cabos - Varios tipos de cabeamento;

Hubs - Recebe dados de um computador e envia para outros computadores;

Switches - Serve para distribuir dados entre computadores;

Roteadores - Também serve para distribuir dados entre computadores de uma rede

### 1.5 Topologia

É a forma com que os nós serão representados/distribuídos em uma rede;

São dois tipos de topologia

- Lógica - Descreve o fluxo dos dados na rede;
- Física - Layout da rede;

Topologia de Barramento - Não é mais usada;

Topologia ponto a ponto (P2P) - É a topologia onde todos os nós da rede funcionam como cliente e servidor;

Topologia anel - cada dispositivo tem uma conexão ponto a ponto com dois outros dispositivos;

Topologia estrela - Caracteriza-se por ter um concentrador no centro da estrutura;

Topologia malha - Existem conexões individuais diretas entre vários dispositivos da rede;

Topologia Hibrida - É a combinação entre duas ou mais topologias acima;

### 1.6 Tecnologia de transmissão

- SIMPLEX - A transmissão pode ser feita apenas num só sentido. Um dispositivo emissor para um ou mais dispositivos receptores;
- HALF-DUPLEX - A transmissão pode ser feita nos dois sentidos. Porém alternadamente, um de cada vez.
- FULL-DUPLEX - A transmissão pode ocorrer nos dois sentidos simultaneamente. Um dispositivo pode transmitir e receber a informação ao mesmo tempo;

Endereçamento:

- Unicast - (um para um);
- Multicast - (um para muitos);
- Broadcast - (um para todos);

### 1.7 Classificação das redes

Redes pessoais (PANs - Personal Area Networks)

- Redes sem fio de curta distância(bluetooth)

Redes locais (LANs - Local Area Networks)

- Redes privadas, baia latência, Projeto e gerenciamento facilitado.

Redes metropolitanas (MANs - Metropolitan Area Networks)

- Redes públicas ou privadas, cobre um grupo de prédios, organizações ou uma cidade;

Redes de longa distância (WANs - Wide Area Networks)

- Cobre uma área geográfica maior como um país ou continente;

### 1.8 Comutação de pacotes

A comutação de pacotes é a técnica que envia uma mensagem de dados dividida em pequenas unidades chamadas de pacotes. Ela não exige o prévio estabelecimento de um caminho físico para a transmissão dos pacotes de dados. Os pacotes podem ser transmitidos por diferentes caminhos e chegar fora da ordem em que foram transmitidos;

## 2. Modelos de redes de computadores

### 2.1 Modelo OSI (Open system interconection)

Tinha como objetivo ser um modelo standard, para protocolos de comunicação entre os mais diversos sistemas.

Camadas

| Aplicação    | 7 | Responsável por processos de rede             | Processo de redes                             | HTTP/FTP/DNS/DHCP/…         |
| -------------- | - | ---------------------------------------------- | --------------------------------------------- | ---------------------------- |
| Apresentação | 6 | Responsável pela representação dos dados    | Representar os dados                          | EBCDIC/NDR/…                |
| Sessão        | 5 | Responsável pela Comunicação entre os Hosts | Comunicação entre computadores/Dispositivos | RCP/SSH/SCP/NetBios/…       |
| Transporte     | 4 | Responsável pelas Conexões ponto a ponto     | Conexões                                     | TCP/UDP                      |
| Rede           | 3 | Responsável pelo endereço e melhor caminho   | Endereçamento                                | IP/IPX/ICMP/ARP/RARP/…      |
| Enlace         | 2 | Responsável pelos Acessos                     | Acessos                                       | Ethernet/FDDI/Frame Relay/… |
| Física        | 1 | Responsável pela Transmissão Binária        | Transmisão Binária                          | Modem/Camada Física ethernt |

### 2.2 Protocolos TCP/IP

Protocolo é um conjunto de regras sobre as quais se dará a comunicação entre as partes envolvidas

TCP - Transmission Control Protocol -

IP - Internet Protocol

TCP/IP - É o  protocolo mais usado em redes locais

Camadas

| Aplicação | 4 | Contém todos os protocolos para um serviço específico de comunicação de dados em um nível de processo-a-processo. | Comunicação entre computadores/Dispositivos | HTTP/HTTPS/FTP/DNS 

| BGP/RIP - Protocolos de routing |   |                                                                                                        |                      |                              |
| ------------------------------- | - | ------------------------------------------------------------------------------------------------------ | -------------------- | ---------------------------- |
| Transporte                      | 3 | Essa parte controla a comunicação host a host                                                        | Conexões            | TCP/UDP/SCTP/RTP             |
| Rede                            | 2 | Essa parte é responsável pelas conexões entre as redes locais, estabelecendo assim a interconexão. | Endereçamento       | IP/IPX/ICMP/ARP/RARP/…      |
| Física e de Enlace             | 1 | Responsável pela Transmissão Binária                                                                | Transmisão Binária | Modem/Camada Física ethernt |

### 2.3 TCP e UDP

- O TCP é como um serviço de entrega confiável que garante que todas as partes de um pacote (dados) cheguem ao destino e na ordem correta.

  ### **Características principais do TCP:**


  1. **Confiável**: Garante que os dados enviados sejam recebidos sem erros e na ordem certa. Se algo se perder ou chegar errado, ele reenvia.
  2. **Orientado à conexão**: Antes de enviar dados, o TCP estabelece uma "conexão" entre o remetente e o receptor (através de um processo chamado "handshake").
  3. **Mais lento, mas seguro**: A confiabilidade torna o TCP mais lento, mas adequado para situações onde a integridade dos dados é essencial.
  4. **Exemplos de uso**: Navegação na web (HTTP/HTTPS), envio de e-mails (SMTP), transferência de arquivos (FTP).

  ### **Como funciona na prática?**

  - Quando você acessa um site, o TCP quebra o conteúdo da página em pequenos pacotes, envia para o seu computador e garante que eles cheguem completos e na ordem correta.
- O UDP é mais simples e rápido, mas não verifica se os dados chegaram corretamente ou na ordem certa.

  ### **Características principais do UDP:**


  1. **Menos confiável**: Não faz checagem de erros ou confirma se os dados foram entregues.
  2. **Sem conexão (não orientado à conexão)**: O UDP apenas envia os dados, sem estabelecer uma "conexão" formal entre remetente e receptor.
  3. **Mais rápido, mas sem garantias**: Ideal para situações onde a velocidade é mais importante do que a precisão dos dados.
  4. **Exemplos de uso**: Streaming de vídeo e áudio (Netflix, YouTube), chamadas VoIP (WhatsApp, Skype), jogos online.

  ### **Como funciona na prática?**

  - Quando você assiste a um vídeo ao vivo, o UDP prioriza a entrega rápida dos dados. Se alguns pacotes se perderem, o vídeo pode ter pequenos atrasos ou falhas, mas não interrompe completamente.

  ### **Comparação simples entre TCP e UDP**

| Característica               | **TCP**                                       | **UDP**                                |
| ----------------------------- | --------------------------------------------------- | -------------------------------------------- |
| **Confiabilidade**      | Sim, verifica e reenvia dados se necessário.       | Não, os dados podem ser perdidos.           |
| **Velocidade**          | Mais lento devido às verificações.               | Mais rápido por não verificar erros.       |
| **Conexão**            | Orientado à conexão (handshake inicial).          | Sem conexão (apenas envia dados).           |
| **Uso principal**       | Transferência de dados críticos (e-mails, sites). | Dados que exigem rapidez (streaming, jogos). |
| **Tolerância a erros** | Baixa (não aceita perdas ou desordem).             | Alta (algumas perdas são toleradas).        |

### 2.4 IP - Internet Protocol

O endereço IPv4 é um número de 32bits, representado em decimal em forma de quatro números de oito bits separados por um ponto, os Octetos.

Intervalo de IP

0.0.0.0 até 255.255.255.255

Exemplos:

1.1.1.1

172.16.1.1

127.0.0.1

200.200.225.233

#### 2.4.1 - Entendendo sistema Binário:

$$
2^7 + 2^6 + 2^5 + 2^4 + 2^3 + 2^2 + 2^1 + 2^0
$$

$$
128 + 64 + 32 + 16 + 8 + 4 + 2 + 1  = 255
$$

```mathematica
11111111 00000000 00000000 00000000
   255       0        0        0
11111111 11111111 00000000 00000000 
   255      255       0        0
11111111 11111111 11111111 00000000
   255      255      255       0
```

#### 2.4.2 - MAC Address - Media access control

O MAC Address é o endereço físico de cada dispositivo(código do hardware que dá acesso a redes)

É um endereço hexadecimal de 48 bits

```mathematica
FF-C6-00-A2-05-D8
Onde:
FF-C6-00 - Corresponde a identificação do fabricante, e essa parte do código é administrada pela IEEE;
A2-05-D8 - Corresponde ao dispositivo(placa de rede, interface) e são atribuidos de maneira serial pelo fabricante;
```

### 2.5 Classes de endereços IPv4

Para facilitar a distribuição de endereços de IP foram criadas 5 classes

Classe A - 0.0.0.0 a 127.255.255.255   - Pode ter 127 de redes, e endereçar 16.777.216 máquinas - 255.0.0.0 o primeiros octeto identificam a rede

Classe B - 128.0.0.0 a 191.255.255.255 - Pode ter 16.000 de redes e endereçar 65000 máquinas - 255.255.0.0 os 2 primeiros octetos identificam a rede

Classe C - 192.0.0.0 a 223.255.255.255 - pode ter 2.000.000 de redes e endereçar e 254 máquinas - 255.255.255.0 os 3 primeiros octetos identificam a rede

Classe D - 224.0.0.0 a 239.255.255.255 -

Classe E - 240.0.0.0 a 247.255.255.255 -

#### 2.5.1 - Mascara de subrede

Uma máscara de subrede ou subnet mask ou netmask, é uma bitmask de 32bits usada para informar os routers.

Classes das Subredes

Classe A - 255.0.0.0 - 11111111.00000000.00000000.00000000 - também chamada de /8

Classe B - 255.255.0.0 - 11111111.11111111.00000000.00000000 - também chamada de /16

Classe C - 255.255.255.0 - 11111111.11111111.111111111.0000000 - também chamada de /24

### 2.6 Outros Protocolos

#### 2.6.1 - DHCP - Dynamic Host Configuration Protocol

É um protocolo de serviços TCP/IP que oferece configuração dinâmica de terminas, com concessão de endereços IP de Host, Mascara de sub rede e Gateway. Ele determina IP, Mascara de subrede e Gateway automaticamente para os dispositivos sem que o usuário determine.

#### 2.6.2 - POP3 - Post Office Protocol

Permite que todas as mensagens contidas numa caixa de correio eletrônico possam ser transferidas sequencialmente para um computador local.

#### 2.6.3 - SMTP - Simple Mail Transfer Protocol

Protocolo padrão para envio de emails através da internet.

#### 2.6.4 - IMAP - Internet Message Access Procotol

É um protocolo de gerenciamento de correio eletrônico superior em recursos ao POP3.

#### 2.6.5 - DNS - Domain Name System

É um sistema de gerenciamento de hosts e nomes hierárquico e distribuído para computadores, serviços ou qualquer outro recurso conectado à internet ou em uma rede privada e pública. Ex.: www.terra.com.br / IP 208.84.244.116

#### 2.6.6 - HTTP - Protocolo de transferência de hipertexto

É base para comunicação de dados da wide world web

#### 2.6.7 - FTP - File Transfer Protocol

É uma forma bastante rápida e versátil de transferir arquivos para internet.

#### 2.6.8 - TELNET

É um protocolo de rede utilizado na internet ou em redes locais para proporcionar uma facilidade de comunicação baseada em texto interativo bidirecional usando uma conexão de terminal virtual.

#### 2.6.9 - SSH - Secure Shell

É ao mesmo tempo, um programa de computador e um protocolo de rede que permite conexão com outro computador na rede de forma a permitir execução de comandos de uma unidade remota. O SSH faz parte da suíte de protocolos TCP/IP que torna segura a administração remota de servidores.

#### 2.6.10 - CSMA/CD

CS - Carrier Sense - Capacidade de identificar se está ocorrendo transmissão, ou seja, o primeiro passo na transmissão de dados em uma rede ethernet é verificar se o cabo está livre.

MA - Multiple Access - Capacidade de múltiplos nós concorrerem pela utilização da mídia, ou seja, o protocolo CSMA/CD não gera nenhum tipo de prioridade. Pode ocorrer de duas placas tentarem transmitir dados ao mesmo tempo. Quando isso ocorre, há uma colisão e nenhuma das placas consegue transmitir dados.

CD - Collision Detection - É responsável por identificar colisões na rede.

### 2.7 Portas

É um ponto físico (hardware) ou lógico (software) no qual podem ser feitas conexões, ou seja, um canal através do qual os dados são transferidos entre um dispositivo de entrada e o processador ou entre o processador e um dispositivo de saída.

!image.png

## 3. Virtualização

### 3.1 Compartilhamento de Dados e Dispositivos

Para o compartilhamento de recursos, as máquinas tem que estar na mesma classe de IP e com nomes diferentes.

Aula Prática

Topologia = Um moden DSL, dois computadores

### Computador 1

Sistema:

Nome:

Configuração de rede:

IP      -

Mascara -

Gateway -

DNS1    -

DNS2    -

## X. Referências e Links

Calculadora de sub-redes de IP para IPv4 | Calculadora de máscara de sub-rede online - Site24x7
