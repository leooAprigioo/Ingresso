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
    idioma TEXT,
    pais TEXT,
    poster TEXT,
    imdb TINYINT
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