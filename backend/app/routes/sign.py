from app import app, db
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from app.models.user import User, UserSchema
from flask_cors import cross_origin

bp_sign = Blueprint('sign', __name__, url_prefix='/sign')

user_schema = UserSchema
users_schema = UserSchema(many=True)

@bp_sign.route('/in', methods=['POST'])
@cross_origin()
def sign_in():

    email = request.json['email']
    password = request.json['password']
    #mozda provjera email i password
    #  
    user = User.query.filter_by(email=email).first()
    
    if user and user.verify_password(password):
        additional_claims = {"role": user.role}
        token = create_access_token(identity=email,additional_claims = additional_claims)
        response = jsonify({'token': token}, 200)
        return response
    else:
        response = jsonify({"error": "Bad username or password"}, 401)
        return response


@bp_sign.route('/up', methods=['POST'])
@cross_origin()
def sign_up():
    name = request.json['name']
    last_name = request.json['last_name']
    email = request.json['email']
    password = request.json['password']
    birthday = request.json['birthday']
    #neke provjere  
    old_user = User.query.filter_by(email=email).first()

    if old_user:
        return jsonify({"error": "User email already exists"}, 400)

    new_user = User(name, last_name, birthday, email, "customer", password, "customer")

    db.session.add(new_user)
    db.session.commit()
    return jsonify({"registered": "New user succesfuly registered"}, 201)