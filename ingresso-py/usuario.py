import sqlite3
from flask import Blueprint, jsonify, request
from flask_api import status
from infra.validar import validar_campos
from contextlib import closing
from infra.to_dict import rows_to_dict, row_to_dict ,to_dict_list

usuario_db = []
def conectar():
    return sqlite3.connect('ingresso_db.sqlt')

usuario_app = Blueprint('usuario_app', __name__)
campos =["nome", "data_nascimento", "senha", "cpf", "endereco", "admin"]
tipos = {"nome": str, "data_nascimento":str, "senha":str, "cpf":str, "endereco":str, "admin":bool}

campos2 =["nome", "data_nascimento", "senha", "cpf", "endereco", "admin", "id" ]
tipos2 = {"nome": str, "data_nascimento":str, "senha":str, "cpf":str, "endereco":str, "admin":bool,"id":int}

campos3 =["id" ]
tipos3 = {"id":int}


@usuario_app.route('/usuario', methods=['GET'])
def listar():
     with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM usuario")
        con.commit()
        acabou=False
        while not acabou:
            rows = cur.fetchmany(200)
            acabou = (len(rows) == 0)
            dict = rows_to_dict(cur.description, rows)
            print(dict)
            return jsonify(dict)
      
    
@usuario_app.route('/usuario/<int:id>', methods=['GET'])
def localizar(id):
    print(id)
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM usuario  WHERE id = ?",(id,))
        con.commit()
        lista = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(lista)
  

@usuario_app.route('/usuario_criar', methods=['POST'])
def criar():
    listaRetorno={}
    dados = request.get_json()
    print(dados)
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        acabou=False
        while not acabou:
            if not validar_campos(dados,campos,tipos):
                return jsonify({'erro':'valor(es) inválido(s)'}),422
            cur.execute("Insert into usuario (nome,data_nascimento,senha,cpf,endereco,admin)values(?,?,?,?,?,?)",(dados['nome'],dados['data_nascimento'],dados['senha'],dados['cpf'],dados['endereco'],dados['admin'],))
            con.commit()
            if status==200:
                listaRetorno={"Mensagem":"Criado com sucesso","Status_Code":200}
                
            else:
                listaRetorno={"Mensagem":"Erro ao crirar","Status_Code":201}
                return listaRetorno


@usuario_app.route('/usuario_update', methods=['PUT'])
def update():
    dados = request.get_json()
    print(request.get_json())
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos2,tipos2):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        cur.execute("UPDATE usuario set nome=?,data_nascimento=?,senha=?,cpf=?,endereco=?,admin=? where id=?",(dados["nome"],dados['data_nascimento'],dados['senha'],dados['cpf'],dados["endereco"],dados['admin'],dados["id"],))
        con.commit()
        return localizar(cur.lastrowid)
    
@usuario_app.route('/usuario_delete', methods=['POST'])
def delete():
    dados = request.get_json()
    print(request.get_json())
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos3,tipos3):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        cur.execute("delete from usuario   where id=?",(dados['id'],))
        con.commit()
        return 'sucesso'
    









