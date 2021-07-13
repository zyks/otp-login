from flask import Flask, request
from flask_cors import CORS
from auth import validate_credentials, validate_authentication_code, is_otp_auth_required, generate_auth_token
from utils import json_response

app = Flask(__name__)
CORS(app)


@app.route("/auth/login/", methods=["POST"])
def credentials_login():
    response = {
        "message": "Invalid credentials",
    }
    status_code = 400

    body = request.get_json()
    email = body.get("email")
    password = body.get("password")

    if validate_credentials(email, password):
        response["message"] = "Credentials are valid"
        status_code = 200

    if is_otp_auth_required(email):
        response["otp_required"] = True
    else:
        response["token"] = generate_auth_token()

    return json_response(response, status_code)


@app.route("/auth/login/otp/", methods=["POST"])
def otp_login():
    response = {
        "message": "Invalid authentication code",
    }
    status_code = 400

    otp = request.get_json().get("otp")

    if validate_authentication_code(otp):
        response["message"] = "Authentication code is valid"
        response["token"] = generate_auth_token()
        status_code = 200

    return json_response(response, status_code)
