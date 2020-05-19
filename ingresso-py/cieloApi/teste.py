from cieloApi3 import *
from flask import Flask, jsonify, request, render_template
from random import random

import json

# Configure o ambiente
environment = Environment(sandbox=True)
# Configure seu merchant, para gerar acesse: https://cadastrosandbox.cieloecommerce.cielo.com.br/
merchant = Merchant('aac3c3b7-2597-4ce6-9b48-e960194e20bc', 'MELEUYUQPESUWKXAOXRMDWJXWEEULYSYPIDQPFWB')
# Crie uma instância de Sale informando o ID do pagamento
sale = Sale(random())

app = Flask(__name__)

@app.route("/")
def index_template():
    return render_template("pagamento.html")


@app.route("/form", methods=["PUT", "POST"])
def form():
    requestF = request.get_json()
    numeroDoCartao = requestF.form["numero"]
    nomeDoComprador = requestF.form['nome']
    cvv = requestF.form['cvv']
    parcelas = requestF.form['parcelas']
    mes = requestF.form['mes']
    ano = requestF.form['ano']
    valor = requestF.form['valor']
    
    sale.customer = Customer(nomeDoComprador)
    credit_card = CreditCard(cvv, 'Visa')
    credit_card.expiration_date = mes+'/'+ano
    credit_card.card_number = numeroDoCartao
    credit_card.holder = nomeDoComprador
    sale.payment = Payment(valor)
    sale.payment.credit_card = credit_card
    cielo_ecommerce = CieloEcommerce(merchant, environment)
    response_create_sale = cielo_ecommerce.create_sale(sale)
    print ('----------------------response_create_sale----------------------')
    print (json.dumps(response_create_sale, indent=2))
    print ('----------------------response_create_sale----------------------')
    payment_id = sale.payment.payment_id

    if(response_create_sale["Payment"]["ReturnCode"] == "4" or response_create_sale["Payment"]["ReturnCode"] == "6"):
        return response_create_sale["Payment"]["ReturnMessage"]
    return rresponse_create_sale["Payment"]["ReturnMessage"]
   

if __name__ == "__main__":
    app.run(port = 8080, debug = True)







# Crie uma instância de Customer informando o nome do cliente


# Crie uma instância de Credit Card utilizando os dados de teste
# esses dados estão disponíveis no manual de integração
credit_card = CreditCard('344', 'Visa')
credit_card.expiration_date = '12/2020'
credit_card.card_number = '4034007153763191'

credit_card.holder = 'Fulano de Tal'

# Crie uma instância de Payment informando o valor do pagamento
sale.payment = Payment(666)
sale.payment.credit_card = credit_card

# Cria instância do controlador do ecommerce
cielo_ecommerce = CieloEcommerce(merchant, environment)

# Criar a venda e imprime o retorno
response_create_sale = cielo_ecommerce.create_sale(sale)
print ('----------------------response_create_sale----------------------')
print (json.dumps(response_create_sale, indent=2))
print ('----------------------response_create_sale----------------------')

# Com a venda criada na Cielo, já temos o ID do pagamento, TID e demais
# dados retornados pela Cielo
payment_id = sale.payment.payment_id

# Com o ID do pagamento, podemos fazer sua captura,
# se ela não tiver sido capturada ainda
response_capture_sale = cielo_ecommerce.capture_sale(payment_id, 15700, 0)
print ('----------------------response_capture_sale----------------------')
print (json.dumps(response_capture_sale, indent=2))
print ('----------------------response_capture_sale----------------------')

# E também podemos fazer seu cancelamento, se for o caso
response_cancel_sale = cielo_ecommerce.cancel_sale(payment_id, 15700)
print ('---------------------response_cancel_sale---------------------')
print (json.dumps(response_cancel_sale, indent=2))
print ('---------------------response_cancel_sale---------------------')

