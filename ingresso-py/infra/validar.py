def validar_campos(obj, campos_obrigatorios, tipos):
    if type(obj) != dict:
        print('no dict')
        return False
    for k in obj:
        if k not in campos_obrigatorios:
            print('without fields: ' + k)
            return False
    for k in campos_obrigatorios:
        if k not in obj:
            print('without fields 2: ' + k)
            return False
    for item in obj:
        if type(obj[item]) != tipos[item]:
            if type(obj[item])==float and tipos[item]==int:
                return True
            else:
                print('error type: ' + item)
                return False
    return True
