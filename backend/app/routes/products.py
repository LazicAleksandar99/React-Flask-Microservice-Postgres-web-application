from app.extensions import db
from flask import Blueprint, request, jsonify
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from app.models.product import Product, ProductSchema
from app.models.user import User, UserSchema
from flask_cors import cross_origin

bp_products = Blueprint('products', __name__, url_prefix='/product')

product_schema = ProductSchema
products_schema = ProductSchema(many=True)

@bp_products.route('/add', methods=['POST'])
@cross_origin()
@jwt_required()
def add_product():

    current_user = get_jwt_identity()
    #provjera da li je ROLE ADMIN

    name = request.json['name']
    description = request.json['description']
    picture = request.json['picture']
    price = request.json['price']
    ownerid = request.json['owner_id']
    print("KUZ EVERYTHIME WE KILSS SS AAAA WANT THIS TO LAST:  ")
    print(ownerid)
    user = User.query.filter_by(account_id=ownerid).first()
    print(user.account_id)
    #trebaju provjere da li je dobar owner, i ostala polja
    
    new_product = Product(name, description, picture, price, user.account_id)

    db.session.add(new_product)
    db.session.commit()

    return jsonify({"created": "New product succesfuly created"}, 201)