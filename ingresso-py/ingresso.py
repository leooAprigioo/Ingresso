import sqlite3
from flask import Blueprint, jsonify, request
from flask_api import status
from infra.validar import validar_campos
from contextlib import closing
from infra.to_dict import rows_to_dict, row_to_dict ,to_dict_list


ingresso_db = []
def conectar():
    return sqlite3.connect('ingresso_db.sqlt')

ingresso_app = Blueprint('ingresso_app', __name__)
campos =["id", "tipo_ingresso_id", "sessao_id", "usuario_id","poltrona","data_compra"]
tipos = {"id":int, "tipo_ingresso_id":int, "sessao_id":int, "usuario_id":int, "poltrona":str, "data_compra":str}

#campos2 =["titulo", "data_lancamento", "ano", "duracao", "genero", "diretor", "atores", "sinopse", "classificacao", "idioma","pais","poster","imdb"]
#tipos2 = {"titulo":str, "data_lancamento":str, "ano":int, "duracao":int, "genero":str, "diretor":str, "atores":str, "sinopse":str, "classificacao":int, "idioma":str,"pais":str,"poster":str,"imdb":int}


campos3 =["id" ]
tipos3 = {"id":int}


@ingresso_app.route('/ingresso', methods=['GET'])
def listar():
     with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM ingresso")
        con.commit()
        dict = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(dict)
      
  
@ingresso_app.route('/ingresso/<int:id>', methods=['GET'])
def localizar(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM ingresso  WHERE id = ?",(id,))
        con.commit()
        lista = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(lista)
  

@ingresso_app.route('/ingresso/criar', methods=['POST'])
def criar():
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        acabou=False
        while not acabou:
            if not validar_campos(dados,campos,tipos):
               return jsonify({'erro':'valor(es) inválido(s)'}),422
            try:
                cur.execute("Insert into ingresso (tipo_ingresso_id,sessao_id,usuario_id,poltrona,data_compra)values(?,?,?,?,?)",(dados['tipo_ingresso_id'],dados['sessao_id'],dados['usuario_id'],dados['poltrona'],dados['data_compra'],))
                con.commit()
                return jsonify({'Mensagem':'sucesso'}),200                
            except Exception as inst:
                return jsonify({'Mensagem': inst.args}),400

@ingresso_app.route('/ingresso/update/<int:id>', methods=['PUT'])
def update(id):
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos,tipos):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("UPDATE ingresso set tipo_ingresso_id=?,sessao_id=?,usuario_id=?,poltrona=?,data_compra=? where id=?",(dados['tipo_ingresso_id'],dados['sessao_id'],dados['usuario_id'],dados['poltrona'],dados['data_compra'],id,))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400


@ingresso_app.route('/ingresso/delete/<int:id>', methods=['POST'])
def delete(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not (type(id)):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("delete from ingresso where id=?",(id,))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400
    








