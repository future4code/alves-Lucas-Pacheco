# Exericio 1

A - Ele vai apagar a Coluna Salary

B - Ele muda a tabela do nome gender para sex e diz que ela tem varchar 6

C - Ela altera gender para gender e falar que vai ter 255


D - Alter Table Actor 
Change gender gender varchar(255)


# Exercicio 2

A - UPDATE Actor
SET birth_date = "1900-08-08"
where  id = 3

B -Update Actor 
set name = "JULIANA PÃES"
where name = "Glória Pires";

Update Actor 
set name = "Glória Pires"
where name = "JULIANA PÃES";

C -
Update Actor
SET
name = "alemão",
birth_date = "2001-02-10",
salary = 50000000,
gender = "Female"
where - 5

# Exercicio 3

A 
DELETE From Actor 
 where name = "alemão";

B
 DELETE From Actor 
 where gender = "male" and salary = 1000000


# Exercício 4

-- a
SELECT max(salary) from Actor;

-- b
SELECT min(salary) from Actor
where gender = "female";

-- c 
Select count(*) from Actor
where gender = "female";

-- d
Select sum(salary) from Actor;

# Exercício 5

-- a
 No caso ela mostra a quantidade de atores femininos e masculinos respectivamente. 

-- b
select id, name from Actor
order by name ASC;

-- c
SELECT * from Actor
ORDER BY salary 

-- D 
select * from Actor
ORDER BY salary desc
LIMIT 3;

-- E

select AVG(salary), gender from Actor
Group BY gender;

# Exercício 6

alter Table Filmes
ADD playing_limit_date DATE default "2022-07-07";


alter Table Filmes
Change Avaliacao Avaliacao FLOAT;

UPDATE Filmes
set playing_limit_date = "2022-12-12"
where id = "004";

UPDATE Filmes 
set playing_limit_date = "2020-12-12"
where id = "001";

Delete  from Filmes
Where id = "002";

Update Filmes
set sinopse = " Olá Olá olá"
where id = "002"


# Exercicio 7

alter Table Filmes
ADD playing_limit_date DATE default "2022-07-07";


alter Table Filmes
Change Avaliacao Avaliacao FLOAT;

UPDATE Filmes
set playing_limit_date = "2022-12-12"
where id = "004";

UPDATE Filmes 
set playing_limit_date = "2020-12-12"
where id = "001";

Delete  from Filmes
Where id = "002";

Update Filmes
set sinopse = " Olá Olá olá"
where id = "002";

select Count(*) from Filmes
where Avaliacao > 7.5;

select avg(Avaliacao) from Filmes;

select  count(*) from Filmes 
Where playing_limit_date > Curdate();

select count(*) from Filmes
where Data > Curdate();

select max(Avaliacao) from Filmes;

select min(Avaliacao) from Filmes;

# Exercício 8

Select * From Filmes
ORDER BY  nome ASC;

Select * From Filmes
ORDER BY  nome DESC
limit 5;

SELECT * From Filmes
where Data < curdate()
order by data Desc
LIMIT 3;

SELECT * From Filmes
order by Avaliacao DESC
LIMIT 3;

