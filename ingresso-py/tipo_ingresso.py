import sqlite3
from flask import Blueprint, jsonify, request
from flask_api import status
from infra.validar import validar_campos
from contextlib import closing
from infra.to_dict import rows_to_dict, row_to_dict ,to_dict_list

tipo_ingresso_db = []
def conectar():
    return sqlite3.connect('ingresso_db.sqlt')

tipo_ingresso_app = Blueprint('tipo_ingresso_app', __name__)
campos =["id", "nome", "preco", "observacao"]
tipos = {"id":int, "nome":str, "preco":float, "observacao":str}

#campos2 =["titulo", "data_lancamento", "ano", "duracao", "genero", "diretor", "atores", "sinopse", "classificacao", "idioma","pais","poster","imdb"]
#tipos2 = {"titulo":str, "data_lancamento":str, "ano":int, "duracao":int, "genero":str, "diretor":str, "atores":str, "sinopse":str, "classificacao":int, "idioma":str,"pais":str,"poster":str,"imdb":int}


campos3 =["id" ]
tipos3 = {"id":int}


@tipo_ingresso_app.route('/tipo_ingresso', methods=['GET'])
def listar():
     with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM tipo_ingresso")
        con.commit()
        acabou=False
        while not acabou:
            rows = cur.fetchmany(200)
            acabou = (len(rows) == 0)
            dict = rows_to_dict(cur.description, rows)

            return jsonify(dict)
      
  
@tipo_ingresso_app.route('/tipo_ingresso/<int:id>', methods=['GET'])
def localizar(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        cur.execute("SELECT * FROM tipo_ingresso  WHERE id = ?",(id,))
        con.commit()
        lista = rows_to_dict(cur.description, cur.fetchall())
        return jsonify(lista)
  
'''
@tipo_ingresso_app.route('/filme/criar', methods=['POST'])
def criar():
    listaRetorno={}
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        acabou=False
        while not acabou:
            if not validar_campos(dados,campos,tipos):
                return jsonify({'erro':'valor(es) inválido(s)'}),422
                cur.execute("Insert into filme (titulo,data_lancamento,ano,duracao,genero,diretor,atores,sinopse,classificacao,idioma,pais,poster,imdb)values(?,?,?,?,?,?,?,?,?,?,?,?,?)",(dados['titulo'],dados['data_lancamento'],dados['ano'],dados['duracao'],dados['genero'],dados['diretor'],dados['atores'],dados['sinopse'],dados['classificacao'],dados['idioma'],dados['pais'],dados['poster'],dados['imdb'],))
            con.commit()
            if status==200:
                listaRetorno={"Mensagem":"Criado com sucesso","Status_Code":200}
                
            else:
                listaRetorno={"Mensagem":"Erro ao crirar","Status_Code":201}
                return listaRetorno
'''
@tipo_ingresso_app.route('/tipo_ingresso/criar', methods=['POST'])
def criar():
    listaRetorno={}
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        acabou=False
        while not acabou:
            if not validar_campos(dados,campos,tipos):
               return jsonify({'erro':'valor(es) inválido(s)'}),422
            try:
                cur.execute("Insert into tipo_ingresso (nome,preco,observacao)values(?,?,?)",(dados['nome'],dados['preco'],dados['observacao'],))
                con.commit()
                return jsonify({'Mensagem':'sucesso'}),200                
            except Exception as inst:
                return jsonify({'Mensagem': inst.args}),400

@tipo_ingresso_app.route('/tipo_ingresso/update/<int:id>', methods=['PUT'])
def update(id):
    dados = request.get_json()

    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not validar_campos(dados,campos,tipos):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        cur.execute("UPDATE tipo_ingresso set nome=?,preco=?,observacao=? where id=?",(dados['nome'],dados['preco'],dados['observacao'],id,))
        con.commit()
        return localizar(id)


@tipo_ingresso_app.route('/tipo_ingresso/delete/<int:id>', methods=['POST'])
def delete(id):
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        if not (type(id)):
            return jsonify({'erro':'valor(es) inválido(s)'}),422
        cur.execute("delete from tipo_ingresso where id=?",(id,))
        con.commit()
        return 'sucesso'
    








