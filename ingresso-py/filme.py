import sqlite3
from flask import Blueprint, jsonify, request
from flask_api import status
from infra.validar import validar_campos
from contextlib import closing
from infra.to_dict import rows_to_dict, row_to_dict ,to_dict_list

filme_db = []
def conectar():
    return sqlite3.connect('ingresso_db.sqlt')

filme_app = Blueprint('filme_app', __name__)
campos =["id", "titulo", "data_lancamento", "ano", "duracao", "genero", "diretor", "atores", "sinopse", "classificacao", "idioma","pais","poster","imdb", "em_cartaz", "banner", "trailer_url"]
tipos = {"id": int, "titulo":str, "data_lancamento":str, "ano":int, "duracao":int, "genero":str, "diretor":str, "atores":str, "sinopse":str, "classificacao":int, "idioma":str,"pais":str,"poster":str,"imdb":int, "em_cartaz": bool, "banner": str, "trailer_url": str }

#campos2 =["titulo", "data_lancamento", "ano", "duracao", "genero", "diretor", "atores", "sinopse", "classificacao", "idioma","pais","poster","imdb"]
#tipos2 = {"titulo":str, "data_lancamento":str, "ano":int, "duracao":int, "genero":str, "diretor":str, "atores":str, "sinopse":str, "classificacao":int, "idioma":str,"pais":str,"poster":str,"imdb":int}


campos3 =["id" ]
tipos3 = {"id":int}


@filme_app.route('/filme', methods=['GET'])
def listar():
     with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM filme")
        con.commit()
        dict = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(dict)
      
  
@filme_app.route('/filme/<int:id>', methods=['GET'])
def localizar(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM filme  WHERE id = ?",(id,))
        con.commit()
        lista = row_to_dict(cur.description, cur.fetchall())
        return jsonify(lista)
  

@filme_app.route('/filme/criar', methods=['POST'])
def criar():
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
            if not validar_campos(dados,campos,tipos):
               return jsonify({'erro':'valor(es) inválido(s)'}),422
            try:
                cur.execute("Insert into filme (titulo,data_lancamento,ano,duracao,genero,diretor,atores,sinopse,classificacao,idioma,pais,poster,imdb)values(?,?,?,?,?,?,?,?,?,?,?,?,?)",(dados['titulo'],dados['data_lancamento'],dados['ano'],dados['duracao'],dados['genero'],dados['diretor'],dados['atores'],dados['sinopse'],dados['classificacao'],dados['idioma'],dados['pais'],dados['poster'],dados['imdb'],))
                con.commit()
                return jsonify({'Mensagem':'sucesso'}),200                
            except Exception as inst:
                return jsonify({'Mensagem': inst.args}),400

@filme_app.route('/filme/update/<int:id>', methods=['PUT'])
def update(id):
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos,tipos):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("UPDATE filme set titulo=?,data_lancamento=?,ano=?,duracao=?,genero=?,diretor=?,atores=?,sinopse=?,classificacao=?,idioma=?,pais=?,poster=?,imdb=? where id=?",(dados['titulo'],dados['data_lancamento'],dados['ano'],dados['duracao'],dados['genero'],dados['diretor'],dados['atores'],dados['sinopse'],dados['classificacao'],dados['idioma'],dados['pais'],dados['poster'],dados['imdb'],id,))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400


@filme_app.route('/filme/delete/<int:id>', methods=['POST'])
def delete(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not (type(id)):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        try:
            cur.execute("delete from filme where id=?",(id,))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200                
        except Exception as inst:
            return jsonify({'Mensagem': inst.args}),400

    








