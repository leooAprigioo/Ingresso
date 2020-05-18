import sqlite3
from flask import Blueprint, jsonify, request
from flask_api import status
from infra.validar import validar_campos
from contextlib import closing
from infra.to_dict import rows_to_dict, row_to_dict ,to_dict_list


pedido_db = []
def conectar():
    return sqlite3.connect('ingresso_db.sqlt')

pedido_app = Blueprint('pedido_app', __name__)
campos =["id", "tipo_ingresso_id", "sessao_id", "usuario_id","poltrona","data_compra"]
tipos = {"id":int, "tipo_ingresso_id":int, "sessao_id":int, "usuario_id":int, "poltrona":str, "data_compra":str}

#campos2 =["titulo", "data_lancamento", "ano", "duracao", "genero", "diretor", "atores", "sinopse", "classificacao", "idioma","pais","poster","imdb"]
#tipos2 = {"titulo":str, "data_lancamento":str, "ano":int, "duracao":int, "genero":str, "diretor":str, "atores":str, "sinopse":str, "classificacao":int, "idioma":str,"pais":str,"poster":str,"imdb":int}


campos3 =["id" ]
tipos3 = {"id":int}

@pedido_app.route('/pedido/criar', methods=['POST'])
def criar():
    dados = request.get_json()
    with closing(conectar()) as con, closing(con.cursor()) as cur:
        try:
            cur.execute("INSERT INTO dados_pagamento (tipo_pagamento_id,nome_pagador,final_cartao,parcelas) VALUES (?,?,?,?)",(dados['dadosPagamento']['tipoPagamento']['id'],dados['dadosPagamento']['nomePagador'],dados['dadosPagamento']['finalCartao'],dados['dadosPagamento']['parcelas'],))
            dadosPagamentoId = cur.lastrowid
            cur.execute("INSERT INTO pedido (total_pagamento,data_pedido,id_usuario,id_dados_pagamento) VALUES (?,?,?,?)",(dados['totalPagamento'],dados['dataPedido'],dados['usuario']['id'],dadosPagamentoId,))
            pedidoId = cur.lastrowid
            ingressosId = [];
            for ingresso in dados['ingressos']:
                cur.execute("INSERT INTO ingresso (tipo_ingresso_id,sessao_id,usuario_id,poltrona, data_compra) VALUES (?,?,?,?,?)",(ingresso['tipo_ingresso']['id'],ingresso['sessao']['id'],dados['usuario']['id'], ingresso['poltrona'],dados['dataPedido'],))
                ingressosId.append(cur.lastrowid)
            for ingressoId in ingressosId:
                cur.execute("INSERT INTO ingresso_pedido (id_ingresso,id_pedido) VALUES (?,?)",(pedidoId,ingressoId,))
            con.commit()
            return jsonify({'Mensagem':'sucesso'}),200
        except Exception as inst:
            con.rollback()
            return jsonify({'Mensagem': inst.args}),400


    #     acabou=False
    #     while not acabou:
    #         if not validar_campos(dados,campos,tipos):
    #            return jsonify({'erro':'valor(es) inválido(s)'}),422
    #         try:
    #             cur.execute("Insert into ingresso (tipo_ingresso_id,sessao_id,usuario_id,poltrona,data_compra)values(?,?,?,?,?)",(dados['tipo_ingresso_id'],dados['sessao_id'],dados['usuario_id'],dados['poltrona'],dados['data_compra'],))
    #             con.commit()
    #             return jsonify({'Mensagem':'sucesso'}),200                
    #         except Exception as inst:
    #             return jsonify({'Mensagem': inst.args}),400


