from app import app, db
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

bp_sign = Blueprint('sign', __name__, url_prefix='/sign')

@bp_sign.route('/in', methods=['POST'])
def sign_in():
    email = request.json['email']
    password = request.json['password']
    if email != "test@test" or password != "test@test":
        return jsonify({"error": "Bad username or password"}, 401)
    
    token = create_access_token(identity=email)
    return jsonify(token = token)

@bp_sign.route('/up')
def sign_up():
    return "<p>HELLOO UP</p"