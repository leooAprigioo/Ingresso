import sqlite3
from flask import Blueprint, jsonify, request
from flask_api import status
from infra.validar import validar_campos
from contextlib import closing
from infra.to_dict import rows_to_dict, row_to_dict ,to_dict_list

telefone_db = []
def conectar():
    return sqlite3.connect('ingresso_db.sqlt')

telefone_app = Blueprint('telefone_app', __name__)
campos =["telefone", "usuario_id"]
tipos = {"telefone":str, "usuario_id":int}

#campos2 =["titulo", "data_lancamento", "ano", "duracao", "genero", "diretor", "atores", "sinopse", "classificacao", "idioma","pais","poster","imdb"]
#tipos2 = {"titulo":str, "data_lancamento":str, "ano":int, "duracao":int, "genero":str, "diretor":str, "atores":str, "sinopse":str, "classificacao":int, "idioma":str,"pais":str,"poster":str,"imdb":int}


campos3 =["id" ]
tipos3 = {"id":int}


@telefone_app.route('/telefone', methods=['GET'])
def listar():
     with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM telefone")
        con.commit()
        dict = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(dict)
      
  
@telefone_app.route('/telefone/<int:id>', methods=['GET'])
def localizar(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM telefone  WHERE id = ?",(id,))
        con.commit()
        lista = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(lista)
  

@telefone_app.route('/telefone/criar', methods=['POST'])
def criar():
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos,tipos):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("Insert into telefone (telefone,usuario_id)values(?,?)",(dados['telefone'],dados['usuario_id'],))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400

@telefone_app.route('/telefone/update/<int:id>', methods=['PUT'])
def update(id):
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos,tipos):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("UPDATE telefone set telefone=? where usuario_id=?",(dados['telefone'],dados['usuario_id'],))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400



@telefone_app.route('/telefone/delete/<int:id>', methods=['POST'])
def delete(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not (type(id)):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("delete from telefone where usuario_id=?",(id,))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400








