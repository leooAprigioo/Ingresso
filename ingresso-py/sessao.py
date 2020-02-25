import sqlite3
from flask import Blueprint, jsonify, request
from flask_api import status
from infra.validar import validar_campos
from contextlib import closing
from infra.to_dict import rows_to_dict, row_to_dict ,to_dict_list

sessao_db = []
def conectar():
    return sqlite3.connect('ingresso_db.sqlt')

sessao_app = Blueprint('sessao_app', __name__)
campos =["sala_id", "filme_id", "data_horario_inicio", "formato", "dublado"]
tipos = {"sala_id":int, "filme_id":int, "data_horario_inicio":str, "formato":str, "dublado":int}

#campos2 =["titulo", "data_lancamento", "ano", "duracao", "genero", "diretor", "atores", "sinopse", "classificacao", "idioma","pais","poster","imdb"]
#tipos2 = {"titulo":str, "data_lancamento":str, "ano":int, "duracao":int, "genero":str, "diretor":str, "atores":str, "sinopse":str, "classificacao":int, "idioma":str,"pais":str,"poster":str,"imdb":int}


campos3 =["id" ]
tipos3 = {"id":int}


@sessao_app.route('/sessao', methods=['GET'])
def listar():
     with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM sessao")
        con.commit()
        dict = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(dict)
      
  
@sessao_app.route('/sessao/<int:id>', methods=['GET'])
def localizar(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM sessao  WHERE id = ?",(id,))
        con.commit()
        lista = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(lista)
  

@sessao_app.route('/sessao/criar', methods=['POST'])
def criar():
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos,tipos):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("Insert into sessao (sala_id,filme_id,data_horario_inicio,formato,dublado)values(?,?,?,?,?)",(dados['sala_id'],dados['filme_id'],dados['data_horario_inicio'],dados['formato'],dados['dublado'],))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400

@sessao_app.route('/sessao/update/<int:id>', methods=['PUT'])
def update(id):
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos,tipos):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("UPDATE sessao set sala_id=?,filme_id=?,data_horario_inicio=?,formato=?,dublado=? where id=?",(dados['sala_id'],dados['filme_id'],dados['data_horario_inicio'],dados['formato'],dados['dublado'],id,))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400


@sessao_app.route('/sessao/delete/<int:id>', methods=['POST'])
def delete(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not (type(id)):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("delete from sessao where id=?",(id,))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400
        
    








