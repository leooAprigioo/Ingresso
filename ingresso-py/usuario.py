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

campos2 =["nome", "data_nascimento", "senha", "cpf", "endereco", "admin"]
tipos2 = {"nome": str, "data_nascimento":str, "senha":str, "cpf":str, "endereco":str, "admin":bool}

campos3 =["id" ]
tipos3 = {"id":int}


@usuario_app.route('/usuario', methods=['GET'])
def listar():
     with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM usuario")
        con.commit()
        dict = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(dict)
      
    
@usuario_app.route('/usuario/<int:id>', methods=['GET'])
def localizar(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM usuario  WHERE id = ?",(id,))
        con.commit()
        lista = rows_to_dict(cur.description, cur.fetchall())
        if (lista==[]):
             return jsonify({'Mensagem': 'Nenhum usuario com esse ID'}),400
        return jsonify(lista)
  

@usuario_app.route('/usuario/criar', methods=['POST'])
def criar():
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos,tipos):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("Insert into usuario (nome,data_nascimento,senha,cpf,endereco,admin)values(?,?,?,?,?,?)",(dados['nome'],dados['data_nascimento'],dados['senha'],dados['cpf'],dados['endereco'],dados['admin'],))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400

@usuario_app.route('/usuario/update/<int:id>', methods=['PUT'])
def update(id):
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos2,tipos2):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("UPDATE usuario set nome=?,data_nascimento=?,senha=?,cpf=?,endereco=?,admin=? where id=?",(dados["nome"],dados['data_nascimento'],dados['senha'],dados['cpf'],dados["endereco"],dados['admin'],id,))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400
    
@usuario_app.route('/usuario/delete/<int:id>', methods=['POST'])
def delete(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not (type(id)):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        else:
            try:
                cur.execute("delete from usuario where id=?",(id,))
                con.commit()
                return jsonify({'Mensagem':'sucesso'}),200                
            except Exception as inst:
                return jsonify({'Mensagem': inst.args}),400
    









