import sqlite3
from flask import Blueprint, jsonify, request
from flask_api import status
from infra.validar import validar_campos
from contextlib import closing
from infra.to_dict import rows_to_dict, row_to_dict ,to_dict_list

sala_db = []
def conectar():
    return sqlite3.connect('ingresso_db.sqlt')

sala_app = Blueprint('sala_app', __name__)
campos =["id","nome", "quantidade_fileira", "quantidade_assento", "tipo_sala"]
tipos = {"id":str,"nome":str, "quantidade_fileira":int, "quantidade_assento":int, "tipo_sala":str}

#campos2 =["titulo", "data_lancamento", "ano", "duracao", "genero", "diretor", "atores", "sinopse", "classificacao", "idioma","pais","poster","imdb"]
#tipos2 = {"titulo":str, "data_lancamento":str, "ano":int, "duracao":int, "genero":str, "diretor":str, "atores":str, "sinopse":str, "classificacao":int, "idioma":str,"pais":str,"poster":str,"imdb":int}



campos3 =["id","nome", "quantidade_fileira", "quantidade_assento", "tipo_sala"]
tipos3 = {"id":int,"nome":str, "quantidade_fileira":int, "quantidade_assento":int, "tipo_sala":str}


@sala_app.route('/sala', methods=['GET'])
def listar():
     with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM sala")
        con.commit()
        dict = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(dict)
      
  
@sala_app.route('/sala/<int:id>', methods=['GET'])
def localizar(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM sala  WHERE id = ?",(id,))
        con.commit()
        lista = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(lista)
  
@sala_app.route('/sala/criar', methods=['POST'])
def criar():
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        acabou=False
        while not acabou:
            if not validar_campos(dados,campos,tipos):
               return jsonify({'erro':'valor(es) inválido(s)'}),422
            try:
                cur.execute("Insert into sala (nome,quantidade_fileira,quantidade_assento,tipo_sala)values(?,?,?,?)",(dados['nome'],dados['quantidade_fileira'],dados['quantidade_assento'],dados['tipo_sala'],))
                con.commit()
                return jsonify({'Mensagem':'sucesso'}),200                
            except Exception as inst:
                return jsonify({'Mensagem': inst.args}),400

@sala_app.route('/sala/update/<int:id>', methods=['PUT'])
def update(id):
    dados = request.get_json()
    print(dados)
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos3,tipos3):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("UPDATE sala set nome=?,quantidade_fileira=?,quantidade_assento=?,tipo_sala=? where id=?",(dados['nome'],dados['quantidade_fileira'],dados['quantidade_assento'],dados['tipo_sala'],id,))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400
      


@sala_app.route('/sala/delete/<int:id>', methods=['delete'])
def delete(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not (type(id)):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("delete from sala where id=?",(id,))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400
    








