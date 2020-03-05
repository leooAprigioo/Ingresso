CREATE TABLE IF NOT EXISTS filme (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    ano INTEGER NOT NULL,
    duracao INTEGER NOT NULL,
    genero TEXT NOT NULL,
    diretor TEXT NOT NULL,
    atores TEXT NOT NULL,
    sinopse TEXT NOT NULL,
    classificacao TINYINT NOT NULL,
    em_cartaz BIT DEFAULT 0,
    idioma TEXT,
    pais TEXT,
    imdb TINYINT,
    poster TEXT,
    banner TEXT,
    trailer_url TEXT
);

CREATE TABLE IF NOT EXISTS sala (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    quantidade_fileira TINYINT NOT NULL,
    quantidade_assento TINYINT NOT NULL,
    tipo_sala TEXT DEFAULT 'Normal'
);

CREATE TABLE IF NOT EXISTS usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    data_nascimento DATE NOT NULL,
    senha TEXT NOT NULL,
    email TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
    endereco TEXT,
    admin BIT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS telefone (
    telefone TEXT NOT NULL,
    usuario_id INTEGER NOT NULL,
    PRIMARY KEY (telefone, usuario_id)
);

CREATE TABLE IF NOT EXISTS sessao (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sala_id INTEGER NOT NULL,
    filme_id INTEGER NOT NULL,
    data_horario_inicio DATETIME NOT NULL,
    formato TEXT DEFAULT '2D',
    dublado BIT default 0,
    FOREIGN KEY (sala_id) REFERENCES sala(id),
    FOREIGN KEY (filme_id) REFERENCES filme(filme_id)
);

CREATE TABLE IF NOT EXISTS tipo_ingresso (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco DECIMAL(7, 2) NOT NULL,
    observacao TEXT
);

CREATE TABLE IF NOT EXISTS ingresso (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo_ingresso_id INTEGER NOT NULL,
    sessao_id INTEGER NOT NULL,
    usuario_id INTEGER NOT NULL,
    poltrona TEXT NOT NULL,
    data_compra DATETIME DEFAULT current_timestamp,
    FOREIGN KEY (tipo_ingresso_id) REFERENCES tipo_ingresso(id),
    FOREIGN KEY (sessao_id) REFERENCES sessao(id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    UNIQUE (sessao_id, poltrona)
);

INSERT INTO tipo_ingresso (id, nome, preco, observacao) VALUES (1, 'Ingresso individual', 10.50, 'Ingresso normal avulso');
INSERT INTO tipo_ingresso (id, nome, preco, observacao) VALUES (2, 'Ingresso familia', 35.99, 'Ingresso para toda a fámilia. Válido para 2 adultos e 2 crianças');
INSERT INTO tipo_ingresso (id, nome, preco, observacao) VALUES (3, 'Ingresso casal', 16.70, 'Ingresso para os amantes. Válido para 2 pessoas');


INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (1, 'Sonic: O Filme', '2020-02-12', 2020, 99, 'Ação;Ficção científica;Comédia;Família', 'Jeff Fowler', 'Ben Schwartz;James Marsden;Jim Carrey','Sonic, o ouriço azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs.', 0,1,'Inglês','Estados Unidos',6.9,'/Kt9iFdTu5TbAm7tNfc876mrWU.jpg','/qonBhlm0UjuKX2sH7e73pnG0454.jpg','zQEjE_M2Esw');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (2, 'Aves de Rapina: Arlequina e sua Emancipação Fantabulosa', '2020-12-07', 2020, 109, 'Ação;Crime;Comédia', 'Cathy Yan', 'Margot Robbie;Ewan McGregor;Mary Elizabeth Winstead','Arlequina (Margot Robbie), Canário Negro (Jurnee Smollett), Caçadora (Mary Elizabeth Winstead), Cassandra Cain e a policial Renée Montoya (Rosie Perez) formam um grupo inusitado de heroínas. Quando um perigoso criminoso começa a causar destruição em Gotham, as cinco mulheres precisam se unir para defender a cidade.', 16,1,'Inglês','Estados Unidos',6.6,'/oFfDC7ouX63C2hj6LsF9Cm7A5Nb.jpg','/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg','PEvCzJulUZI');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (3, 'Parasita', '2019-05-30', 2019, 132, 'Comédia;Thriller;Drama', 'Bong Joon-ho', 'Song Kang-ho;Lee Sun-kyun;Cho Yeo-jeong','Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.', 16,1,'Coreano','Coreia do Sul',8.6,'/bNGW8zYA91VqTZfV3jnKHPEKKvB.jpg','/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg','ruaBfQWvHKI');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (4, 'A Hora Da Sua Morte', '2019-10-25', 2019, 90, 'Terror;Thriller', 'Justin Dec', 'Elizabeth Lail;Jordan Calloway;Talitha Bateman','Uma jovem enfermeira baixa um aplicativo que promete prever o momento e a data da morte das pessoas. Quando o aplicativo indica que ela tem três dias de vida restantes, a enfermeira luta por sua sobrevivência ao mesmo tempo em que enfrenta uma misteriosa criatura que a assombra.', 14,1,'Inglês','Estados Unidos',5.3,'/gM3CutrtmlTtLCqOShzto6ECgBX.jpg','/zETkzgle7c6wAeW11snnVUBp67S.jpg','D1S4ElaFc6A');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (5, 'Dolittle', '2020-01-17', 2020, 99, 'Comédia;Fantasia;Aventura;Família', 'Chris McKay', 'Robert Downey Jr;Antonio Banderas;Michael Sheen;','O Dr. Dolittle vive com uma variedade de animais exóticos e conversa com eles diariamente. Quando a jovem rainha Victoria fica doente, o excêntrico médico e seus amigos peludos embarcam em uma aventura épica em uma ilha mítica para encontrar a cura.', 0,1,'Inglês','Estados Unidos',5.5,'/eiMUDeDBH4s1dbtbcnmasAtgssZ.jpg','/lG802rseTZcN9mtLsQPVfApEVzM.jpg','c-hwRn94sMw');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (6, 'Bad Boys Para Sempre', '2020-01-15', 2020, 113, 'Thriller;Ação;Crime', 'Bilall Fallah;Adil El Arbi', 'Will Smith;Martin Lawrence;Vanessa Hudgens','Armando é um assassino de sangue frio com uma natureza cruel e provocadora. Ele está comprometido com o trabalho do cartel e é enviado por sua mãe para matar Mike (Smith). Nuñez assumirá o papel de Rita, psicóloga criminal durona e engraçada que é recém-nomeada chefe da AMMO e é ex-namorada de Mike.', 16,1,'Inglês','Estados Unidos',7.2,'/Y0NQuB8cMZlmgBe90BOlMoFMSX.jpg','/upUy2QhMZEmtypPW3PdieKLAHxh.jpg','ay05Ts6wnjI');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (7, 'O Chamado da Floresta', '2020-02-19', 2020, 100, 'Aventura;Família;Drama;', 'Chris Sanders', 'Harrison Ford;Dan Stevens;Colin Woodell','Depois de anos vivendo como um cachorro de estimação na casa de uma família na Califórnia, Buck precisa entrar em contato com os seus instintos mais selvagens para conseguir sobreviver em um ambiente hostil como o Alaska. Com o tempo, seu lado feroz se desenvolve e ele se torna o grande líder de sua matilha. Baseado no livro homônimo de Jack London, lançado em 1903.', 0,1,'Inglês','Estados Unidos',6.8,'/yMZoOrAWHZ0Jtga7xQDxd024luQ.jpg','/yFRpUmsreYO5Bc0HVBTsJsHIIox.jpg','_rjeorIxeEI');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (8, 'Jojo Rabbit', '2019-10-18', 2019, 108, 'Comédia;Guerra;Drama', 'Taika Waititi', 'Roman Griffin Davis;Thomasin McKenzie;Scarlett Johansson','Alemanha, durante a Segunda Guerra Mundial. Jojo (Roman Griffin Davis) é um jovem nazista de 10 anos, que trata Adolf Hitler (Taika Waititi) como um amigo próximo, em sua imaginação. Seu maior sonho é participar da Juventude Hitlerista, um grupo pró-nazista composto por outras pessoas que concordam com os seus ideais. Um dia, Jojo descobre que sua mãe (Scarlett Johansson) está escondendo uma judia (Thomasin McKenzie) no sótão de casa. Depois de várias tentativas frustradas para expulsá-la, o jovem rebelde começa a desenvolver empatia pela nova hóspede.', 14,1,'Inglês','Estados Unidos',8.0,'/xhJF9gStbEsvGiCIxwPu8B1NqjZ.jpg','/agoBZfL1q5G79SD0npArSlJn8BH.jpg,','-IBaMJ15Fm0');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (9, 'Jumanji: Próxima Fase', '2019-12-04', 2019, 123, 'Ação;Aventura;Comédia;Fantasia', 'Jake Kasdan', 'Dwayne Johnson;Jack Black;Kevin Hart','Tentado em revisitar o mundo de Jumanji, Spencer (Alex Wolff) decide consertar o jogo de videogame que permite que os jogadores sejam transportados ao local. Logo o quarteto formado por Smolder Bravestone (Dwayne Johnson), Moose Finbar (Kevin Hart), Shelly Oberon (Jack Black) e Ruby Roundhouse (Karen Gillan) ressurge, agora comandado por outras pessoas: os avôs de Spencer e Fridge (Danny DeVito e Danny Glover) assumem as personas de Bravestone e Finbar, enquanto o próprio Fridge (Ser Darius Blain) agora está sob a pele de Oberon.', 12,1,'Inglês','Estados Unidos',6.9,'/bBRDUTr6jgbD8I8A9DvVGrVbdfB.jpg','/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg','cadEnARIOVg');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (10, 'Frozen 2', '2019-11-20', 2019, 104, 'Animação;Família;Aventura', 'Chris Buck', 'Kristen Bell;Idina Menzel;Jonathan Groff','De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai, quando ainda era príncipe de Arendelle. Ele conta às meninas a história de uma visita à floresta dos elementos, onde um acontecimento inesperado teria provocado a sepaação dos habitantes da cidade com os quatro elementos fundamentais: ar, fogo, terra e água. Esta revelação ajudará Elsa a compreender a origem de seus poderes.', 0,1,'Inglês','Estados Unidos',7.1,'/qXsndsv3WOoxszmdlvTWeY688eK.jpg','/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg','PPXqPxNh8lo');


INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (11, 'Mulan', '2020-03-25', 2020, 120, 'Drama;Ação;Guerra', 'Niki Caro', 'Liu Yifei;Yoson An;Gong Li','Hua Mulan (Liu Yifei) é a espirituosa e determinada filha mais velha de um honrado guerreiro. Quando o Imperador da China emite um decreto que um homem de cada família deve servir no exército imperial, Mulan decide tomar o lugar de seu pai, que está doente. Assumindo a identidade de Hua Jun, ela se disfarça de homem para combater os invasores que estão atacando sua nação, provando-se uma grande guerreira.', 0,1,'Inglês','Estados Unidos',0.0,'/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg','/xl5oCFLVMo4d4Pgxvrf8Jmc2IlA.jpg','LBRJhII2wu8');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (12, '007 - Sem Tempo Para Morrer', '2020-04-02', 2020, 163, 'Ação;Thriller;Aventura', 'Cary Joji Fukunaga', 'Daniel Craig;Rami Malek;Léa Seydoux','James Bond deixa o serviço ativo. Sua paz dura pouco quando Felix Leiter, um velho amigo da CIA, aparece pedindo ajuda, levando Bond à trilha de um vilão misterioso armado com perigosas novas tecnologias.', 0,1,'Inglês','Estados Unidos',0,'/HORpg5CSkmeQlAolx3bKMrKgfi.jpg','/6VcVl48kNKvdXOZfJPdarlUGOsk.jpg','FlriFMTIPOg');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (13, 'Eduardo e Mônica', '2020-04-02', 2020, 0, 'Romance;Drama', 'René Sampaio', 'Gabriel Leone;Alice Braga;Otávio Augusto','Adaptação para o cinema da famosa canção "Eduardo e Mônica", composta por Renato Russo, sobre um casal que não tinha nada a ver um com o outro mas acabou se apaixonando perdidamente.', 0,1,'Potuguês','Brasil',0,'/iV3qb95qNfBgPWIsobrtUPMKGCo.jpg','/4ECPCD5yx8z2dyauaAeNjseDwfq.jpg','IoSR5tl1AAU');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (14, 'Um Lugar Silencioso - Parte II', '2020-03-18', 2020, 96, 'Drama;Ficção científica;Thriller', 'John Krasinski', 'Emily Blunt;Millicent Simmonds;Cillian Murphy','Logo após os acontecimentos mortais, até mesmo dentro de casa, a família Abbott (Emily Blunt, Millicent Simmonds, Noah Jupe) precisa agora encarar o terror mundo afora, continuando a lutar para sobreviver em silêncio. Obrigados a se aventurar pelo desconhecido, eles rapidamente percebem que as criaturas que caçam pelo som não são as únicas ameaças que os observam pelo caminho de areia.', 0,1,'Inglês','Estados Unidos',0,'/7WkFgOFJ6kKpqfEUo78zS3gjDlm.jpg','/55W4OmZx1tH73KOtYHMJU7uGpy0.jpg','uGtoEvEjuEk');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (15, 'Viúva Negra', '2020-04-24', 2020, 0, 'Ação;Thriller;Aventura', 'Cate Shortland', 'Scarlett Johansson;Florence Pugh;David Harbour;','Sinopse oficial ainda não divulgada.', 0,1,'Inglês','Estados Unidos',0,'/nfiwuRN59pcw3ETIDTThNOm2vai.jpg','/8N0OhgolMmt8lML70slyPZpE9qY.jpg','BotTBc1x7M4');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (16, 'SCOOBY! O Filme', '2020-05-14', 2021, 0, 'Família;Animação;Comédia;Mistério;Aventura', 'Tony Cervone', 'Frank Welker;Zac Efron;Amanda Seyfried','Scooby e a gangue enfrentam seu mistério mais desafiador de todos os tempos: um plano para libertar o cão fantasma Cerberus no mundo. Enquanto eles correm para parar esse caopocalypse, a gangue descobre que Scooby tem um destino épico maior do que se imaginava.', 0,1,'Inglês','Estados Unidos',0,'/cyAlYJUrE77k19MoH5pcMakh6YD.jpg','/wY4MZ45czZfQ5e9scuzXybDe3LF.jpg','NRIE3aTBdS8');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (17, 'Bob Esponja: O Incrível Resgate', '2020-05-21', 2020, 0, 'Família;Animação;Comédia;Fantasia;Aventura', 'Tim Hill', 'Tom Kenny;Bill Fagerbakke;Rodger Bumpass','Onde está Gary? Segundo Bob Esponja, Gary foi "caracolstrado" pelo temível Rei Poseidon e levado para a cidade perdida de Atlantic City. Junto a Patrick Estrela, ele sai em uma missão de resgate ao querido amigo, e nesta jornada os dois vão conhecer novos personagens e viver inimagináveis aventuras.', 0,1,'Inglês','Estados Unidos',0,'/bsCBgNIeqwUh0rWrEjojH7Xbqto.jpg','/wu1uilmhM4TdluKi2ytfz8gidHf.jpg','013DqQr2XCs');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (18, 'Mulher Maravilha 1984', '2020-06-04', 2020, 0, 'Fantasia;Ação;Aventura', 'Patty Jenkins', 'Gal Gadot;Chris Pine;Kristen Wiig','Sequência de Mulher-Maravilha (Gal Gadot) que será ambientada nos EUA. A sinopse oficial ainda não foi divulgada.', 0,1,'Inglês','Estados Unidos',0,'/8AQRfTuTHeFTddZN4IUAqprN8Od.jpg','/w9KtZXbtb2d1GRaGK5RuDEJFcR0.jpg,','8XrFAXykgoc');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (19, 'Espiral - O Legado de Jogos Mortais', '2020-05-13"', 2020, 0, 'Thriller;Terror', 'Darren Lynn Bousman', 'Chris Rock;Samuel L. Jackson;Max Minghella','Sob o comando do veterano da polícia Marcus (Samuel L. Jackson), o detetive Ezekiel "Zeke" Banks (Chris Rock) se une ao seu parceiro novato Willem (Max Minghella) para desvendar uma série de assassinatos terríveis que estão acontecendo na cidade. Durante as investigações, Zeke acaba se envolvendo no mórbido jogo do assassino.', 0,1,'Inglês','Estados Unidos',0,'/7JENyUT8ABxcvrcijDBVpdjgCY9.jpg','/oLfS1lOmN2KIU2IQ200SDEPVEZe.jpg','411aCkoMEmU');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (20, 'Antebellum', '2020-04-22', 2020, 0, 'Terror', 'Christopher Renz', 'Janelle Monáe;Jena Malone;Robert Aramayo','Veronica (Janelle Monáe) é uma autora bem sucedida que se encontra presa em dois diferentes períodos: Os dias atuais e o Antebellum, a era das plantações no sul. Imersa nesta horrorizante realidade, ela deve descobrir o mistério por trás desse acontecimentos e fugir, antes que seja tarde demais.', 0,1,'Inglês','Estados Unidos',0,'/xfEpleeWpl2ImrxSN8uVXD5VgVE.jpg','/deABNVHCqnoFHEz8A59l0MLrbgi.jpg','mXcZ7WDsVwk');

INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (21, 'Interestelar', '2014-11-05', 2014, 169, 'Aventura;Drama;Ficção científica;', 'Christopher Nolan', 'Matthew McConaughey;Jessica Chastain;Anne Hathaway','Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.', 10,0,'Inglês','Estados Unidos',8.6,'/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg','/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg','BYUZhddDbdc');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (22, 'Pokémon: Detetive Pikachu', '2019-05-03', 2019, 105, 'Aventura;Ação;Fantasia', 'Rob Letterman', 'Ryan Reynolds;Justice Smith;Kathryn Newton','A história começa quando o detective particular Harry Goodman desaparece misteriosamente, levando seu filho Tim, de 21 anos, a tentar descobrir o que aconteceu. Quem ajuda na investigação é o antigo parceiro Pokémon de Harry, o Detetive Pikachu: um adorável superdetetive divertido e brincalhão que é um enigma até para si mesmo. Após descobrirem que são capazes de se comunicar um com o outro, Tim e Pikachu unem forças em uma aventura para desvendar esse mistério. Reunindo pistas pelas ruas de Ryme City, uma gigantesca metrópole moderna onde seres humanos e Pokémons convivem lado a lado em um mundo hiper-realista, eles encontram pelo caminho um elenco diversificado de personagens Pokémon e revelam uma trama chocante que poderia arruinar essa coexistência pacífica e ameaçar todo o universo Pokémon.', 0,0,'Inglês','Estados Unidos',6.6,'/lHwEhsUaB9D0gXO6M08H5tdb2Vx.jpg','/nDP33LmQwNsnPv29GQazz59HjJI.jpg','ikwHWX-ZWnc');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (23, 'Batman: O Cavaleiro das Trevas', '2012-09-06', 2012, 152, 'Ação;Crime;Drama;Thriller', 'Christopher Nolan', 'Christian Bale;Michael Caine;Heath Ledger','Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.', 12,0,'Inglês','Estados Unidos',9.0,'/kG5moUJwvIAW0w4JmnJJLu9cH9u.jpg','/hqkIcbrOHL86UncnHIsHVcVmzue.jpg,','dkcB6SvkWrk');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (24, 'Vingadores: Ultimato', '2019-04-24', 2019, 181, 'Ação;Aventura;Ficção científica', 'Joe Russo;Anthony Russo', 'Robert Downey Jr;Chris Evans;Mark Ruffalo','Após os eventos devastadores de "Vingadores: Guerra Infinita", o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.', 12,0,'Inglês','Estados Unidos',8.5,'/yFSIUVTCvgYrpalUktulvk3Gi5Y.jpg','/zuW6fOiusv4X9nnW3paHGfXcSll.jpg','PgrmbRID0eY');
INSERT INTO filme (id, titulo, data_lancamento, ano, duracao, genero, diretor, atores, sinopse, classificacao, em_cartaz, idioma, pais, imdb, poster, banner, trailer_url) VALUES (25, 'Pulp Fiction: Tempo de Violência', '1994-09-10', 1994, 104, 'Thriller;Crime', 'Quentin Tarantino', 'John Travolta;Samuel L. Jackson;Uma Thurman','Jules Winnfield e Vincent Vega são dois assassinos que saem para recuperar uma mala roubada de seu empregador, o chefe da máfia Marsellus Wallace. Wallace também pede, alguns dias mais tarde, para Vincent levar sua esposa Mia para passear, quando o próprio Wallace estará fora da cidade. Butch Coolidge é um envelhecido boxer que é pago por Wallace para perder sua próxima luta. As vidas dessas pessoas aparentemente não relacionadas são tecidas compondo uma série de engraçados, estranhos e desnecessários incidentes.', 18,0,'Inglês','Estados Unidos',8.9,'/tptjnB2LDbuUWya9Cx5sQtv5hqb.jpg','/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg','YBZp3tkua2Y');

INSERT INTO sala (
    id,
    nome,
    quantidade_fileira,
    quantidade_assento,
    tipo_sala
) VALUES 
    (1, 'Sala 3D', 4, 10, '3D'),
    (2, 'Sala Surround', 4, 10, 'Surround');
