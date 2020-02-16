import jsons

def to_dict(obj):
    return jsons.dump(obj, strip_privates = True)

def to_dict_list(lista):
    resultado = []
    for item in lista:
        resultado.append(to_dict(item))
    return resultado

def row_to_dict(description, row):
    dict = {}
    for i in range(0, len(row)):
        dict[description[i][0]] = row[i]
    return dict

# Converte uma lista de linhas em um lista de dicionários.
def rows_to_dict(description, rows):
    result = []
    for row in rows:
        result.append(row_to_dict(description, row))
    return result

