import sqlite3
from flask import Flask, jsonify, request
from flask_cors import CORS
from usuario import usuario_app, usuario_db
from filme import filme_app, filme_db





database = {
        "usuario":usuario_db    
}

app = Flask(__name__)
app.register_blueprint(usuario_app)
app.register_blueprint(filme_app)
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




