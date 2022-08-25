# Exercicio 1 

A - Uma Foreing Key é uma chave que liga uma tabela a outra por um ID, por meio do comando REFERENCES que o faz ligar a outra tabela.


C - 13:40:06	INSERT INTO Rating (id, comment, rate, Filme_id) Values  ("001", "Maravilhoso", 10, "004"), ("002", "bom!", 7, "001"), ("003", "ruim", 2, "002"), ("004", "razoavel", 5, "003")	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-lucas-pacheco`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`Filme_id`) REFERENCES `Filmes` (`id`))	0.172

C - Ele da um erro falando que não é possível criar algo naquela tabela.

-- D 
ALTER Table Filmes DROP COLUMN Avaliacao;

-- E
DELETE FROM Filmes 
where id = "004";

14:03:57	DELETE FROM Filmes  where id = "004"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-lucas-pacheco`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`Filme_id`) REFERENCES `Filmes` (`id`))	0.157 sec

// Ele não pode apagar algo que tem uma foreign Key


2 - A

A - CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

// Essa tabela em questão ela junta duas tabelas já existentes no caso a Tabela de Atores e a tabela de filmes, ou seja ela junta um ator com um filme especifico.

2 - B
INSERT INTO MovieCast (filme_id, actor_id)
values 
("003", 5),
("004", 8),
("001", 6),
("003", 1982),
("004", 5),
("004", 6);


2 - C
14:53:50	INSERT INTO MovieCast (filme_id, actor_id) values ("002", 8)	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`alves-lucas-pacheco`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`filme_id`) REFERENCES `Filmes` (`id`))	0.156 sec

-Não da para criar algo com um filme que não existe o ID

2 

D - 
14:55:06	DELETE FROM Actor  where id = 8	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`alves-lucas-pacheco`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.141 sec

- Não da para apagar um ator que tenha references com outras tabelas.


3 

A 

SELECT * FROM Filmes
INNER JOIN Rating ON Filmes.id = Rating.filme_id;


// Ele procura apenas os filmes que tenham já avaliação feitas.

// E ON É a condição pra ele procurar

B 


DESAFIOS 

SELECT Filme_id, Filmes.nome, Rating.rate, Rating.comment
From Filmes
LEFT JOIN Rating  
on Filmes.id = Rating.Filme_id;

SELECT Filme_id, Filmes.nome, MovieCast.actor_id 
From Filmes
right JOIN MovieCast
ON MovieCast.filme_id = Filmes.id;

Select AVG(Rating.rate), Filmes.id, Filmes.nome 
from Filmes
LEFT JOIN Rating
ON Filmes.id = Rating.Filme_id 
GROUP BY (Filmes.id);