import json


def json_response(data, status_code):
    headers = {'ContentType': 'application/json'}
    return json.dumps(data), status_code, headers
