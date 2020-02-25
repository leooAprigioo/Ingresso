import sqlite3
from flask import Flask, jsonify, request
from flask_cors import CORS
from usuario import usuario_app, usuario_db
from filme import filme_app, filme_db
from sala import sala_app, sala_db
from telefone import telefone_app, telefone_db
from sessao import sessao_app, sessao_db
from tipo_ingresso import tipo_ingresso_app, tipo_ingresso_db
from ingresso import ingresso_app, ingresso_db


database = {
        "usuario":usuario_db,
        "filme":filme_db,
        "sala":sala_db,
        "telefone":telefone_db,
        "sessoa":sessao_db,
        "tipo_ingresso":tipo_ingresso_db,
        "ingresso":ingresso_db,
            

}

app = Flask(__name__)
app.register_blueprint(usuario_app)
app.register_blueprint(filme_app)
app.register_blueprint(sala_app)
app.register_blueprint(telefone_app)
app.register_blueprint(sessao_app)
app.register_blueprint(tipo_ingresso_app)
app.register_blueprint(ingresso_app)
CORS(app)

def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    if request.method == 'OPTIONS':
        response.headers['Access-Control-Allow-Methods'] = 'DELETE, GET, POST, PUT'
        headers = request.headers.get('Access-Control-Request-Headers')
        if headers:
            response.headers['Access-Control-Allow-Headers'] = headers
    return response
app.after_request(add_cors_headers)

@app.route('/')
def all():
    return jsonify(database)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)




