from app.extensions import db
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from app.models.user import User, UserSchema
from app.models.product import Product, ProductSchema
from flask_cors import cross_origin

bp_sign = Blueprint('sign', __name__, url_prefix='/sign')

user_schema = UserSchema
users_schema = UserSchema(many=True)
products_schema = ProductSchema(many=True)

@bp_sign.route('/in', methods=['POST'])
@cross_origin()
def sign_in():

    email = request.json['email']
    password = request.json['password']

    if not password or not password.strip() or len(password) < 1:
        return jsonify({"error": "You didnt input valid password"},401)
    elif not email or not email.strip() or len(email) < 3:
        return jsonify({"error": "You didnt input valid email"},401)

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"error": "Bad email"},401)

    if user.verified == "pending":
        return jsonify({"error": "You are still in process of verification. Please be patiant"},401)

    if user.verified == "denied":
        return jsonify({"error": "You have been denied access to this site!"},401)

    users = User.query.all()
    products = Product.query.all()

    the_user = users_schema.dump(
            filter(lambda t: t.email == email, users)
        )

    if user.role == "creator":
        the_products = products_schema.dump(
            filter(lambda t: t.owner_id == user.account_id, products)
            )
    else:
        the_products = products_schema.dump(products)
    
    if user and user.verify_password(password):
        additional_claims = {"role": user.role}
        token = create_access_token(identity=email,additional_claims = additional_claims)
        response = jsonify({'token': token, 'user': the_user, 'products': the_products}, 200)
        return response
    else:
        response = jsonify({"error": "Bad password"}, 401)
        return response


@bp_sign.route('/up', methods=['POST'])
@cross_origin()
def sign_up():
    name = request.json['name']
    last_name = request.json['last_name']
    email = request.json['email']
    password = request.json['password']
    birthday = request.json['birthday']
    type = request.json['type']
    password_again = request.json['password_again']
    
    if not name or not name.strip() or len(name) < 1:
        return jsonify({"error": "You didnt input valid name "},401)
    elif not last_name or not last_name.strip() or len(last_name) < 1:
        return jsonify({"error": "You didnt input valid last_name"},401)
    elif not email or not email.strip() or len(email) < 1:
        return jsonify({"error": "You didnt input valid email"},401)
    elif not birthday :
        return jsonify({"error": "You didnt input valid birthday"},401)
    elif not type or type == "admin":
        return jsonify({"error": "You will be baned if you try to manipulate with request fileds"},401)
    elif type != "creator" and type != "customer":
        return jsonify({"error": "You will be baned if you try to manipulate with request fileds"},401)
    elif password != password_again:
        return jsonify({"error": "Your password doesn't match!"},401)

    old_user = User.query.filter_by(email=email).first()

    if old_user:
        return jsonify({"error": "User email already exists"}, 400)

    verified = "customer"
    if type == "creator":
        verified = "pending"

    new_user = User(name, last_name, birthday, email, type, password, verified)

    db.session.add(new_user)
    db.session.commit()
    return jsonify({"registered": "New user succesfuly registered"}, 201)