# Exercício1
A 
No name fazemos que ele seja uma string de até no máximo 255 caracteres e não pode-se Null

Salary ele é Float para ele ser mutável

ID é uma string por sua vez também é uma Primary Key que faz ele não pode ser mutável 

Birtdate faz com que ele seja uma valor de data em modelo americano, enquanto gender falar que tem que ser uma string com no máximo 6 caracteres.
B 
Show Tables - Mostra todas minhas tabelas já criadas.
C 
Describe: Mostra os parâmetros dos itens Actor.

# Exercício2
A - 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002", 
"Glória Pires", 
120000,
"1963-08-23", 
"female");


B -  O Erro que aparece é que não pode ter duas primary Key duplicadas.

C - No caso dessa é como só passou id, name e Salary no values tem valores a mais que não foram definidos antes.

D - Neste caso precisa de todos os parâmetros e falta o nome.

E - A Data não está entre aspas, que encaixa no padrão date.

# Exercicio3

A - SELECT * from Actor 
where gender = "female";

B - SELECT salary from Actor
where name = "Tony Ramos";

C - SELECT * from Actor 
where gender = "invalid";

//C - Retorna Null afinal não tem nenhum ator com gênero inválido.


D - SELECT  id, name, salary  from Actor 
where salary <= 500;
 
E - Não existe nome na sua query principal.

# Exercício 4

4 A - Ela procura na Query se existe  pessoas com o nome começando com A ou J e que tenham sálarios acima de 300 reais..

B - SELECT * FROM Actor
where name NOT LIKE "A%" and salary > 350000;

C - SELECT * FROM Actor
where name Like "%G%";

D - SELECT * FROM Actor
where (name Like "%A%" or "%G%") and  salary >= 350000 and salary < 900000;

# Exercício 5

create TABLE Filmes(
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL,
Data DATE,
Avaliacao INT
);

INSERT INTO Filmes (id, nome, sinopse, Data, Avaliacao)
values (
"001",
"Doce de Mãe",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

INSERT INTO Filmes (id, nome, sinopse, Data, Avaliacao)
Values(
"002",
 "Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO Filmes (id, nome, sinopse, Data, Avaliacao)
Values (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8

);

INSERT INTO Filmes (id, nome, sinopse, Data, Avaliacao)
values(
"004",
"Cidade de Deus",
"Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
"2007-11-02",
10);


# Exercício 6

select id, nome, Avaliacao from Filmes 
where id = "004";

Select * from Filmes
where nome = "Cidade de Deus";

SELECT id, nome, sinopse from Filmes 
where Avaliacao >= 7;

# Exercício 7 

SELECT * from Filmes
where nome LIKE "%vida%";

SELECT * from Filmes
where nome LIKE "%Termo De Busca%" or sinopse like "%Termo de Busca%";

SELECT * from Filmes
where Data < "2022-08-22";

select * From Filmes 
where Data < "2022-08-22" and  nome LIKE "%Termo De Busca%" or sinopse like "%Termo de Busca%";

