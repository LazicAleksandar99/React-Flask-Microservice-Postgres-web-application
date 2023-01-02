from app.extensions import db
from flask import Blueprint, request, jsonify
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from app.models.announcement import Announcement
from app.models.product import Product, ProductSchema
from app.models.user import User, UserSchema
from flask_cors import cross_origin
# import cloudinary

# config = cloudinary.config(secure=True)

bp_products = Blueprint('products', __name__, url_prefix='/product')

product_schema = ProductSchema
products_schema = ProductSchema(many=True)

@bp_products.route('/add', methods=['POST'])
@cross_origin()
@jwt_required()
def add_product():

    current_user = get_jwt_identity()
    
    user = User.query.filter_by(email=current_user).first()

    if not user: 
        return jsonify({"error": "Token not valid"}, 401)

    if user.role != "creator":
        return jsonify({"error": "You are not allowed to perform this acction"}, 401)

    name = request.json['name']
    description = request.json['description']
    picture = request.json['picture']
    price = request.json['price']

    
    if not name or not name.strip() or len(name) < 1:
        return jsonify({"error": "You didnt input valid name "},401)
    elif not description or not description.strip() or len(description) < 1:
        return jsonify({"error": "You didnt input valid description"},401)
    elif not picture or not picture.strip() or len(picture) < 1:
        return jsonify({"error": "You didnt input valid picture"},401)
    elif not price.isnumeric():
        return jsonify({"error": "You didnt input valid price"},401)
    elif 0 > int(price) or int(price) > 10000:
        return jsonify({"error": "You didnt input valid price(min 1 max 10000"},401)
    
    the_product = Product.query.filter_by(name=name).first()

    if the_product:
        return jsonify({"error": "Product with that name already exists"},401)

    new_product = Product(name, description, picture, int(price), user.account_id)
    db.session.add(new_product)
    db.session.commit()

    products = Product.query.all()
    the_products = products_schema.dump(
            filter(lambda t: t.owner_id == user.account_id, products)
            )

    return jsonify({"created": "New product succesfuly created", "products": the_products}, 201)


@bp_products.route('/all', methods=['GET'])
@cross_origin()
@jwt_required()
def get_all_products():

    current_user = get_jwt_identity()

    user = User.query.filter_by(email = current_user).first()
    products = Product.query.all()

    if user.role == "creator":
        all_products = products_schema.dump(
            filter(lambda t: t.owner_id == user.account_id, products)
            )
    else:
        all_products = products_schema.dump(products)

    return jsonify(products = all_products)


@bp_products.route('/all/names', methods=['GET'])
@cross_origin()
@jwt_required()
def get_all_products_name():
   
    current_user = get_jwt_identity()
    
    user = User.query.filter_by(email=current_user).first()
    if user.role != "creator":
         return jsonify({"error": "You are not allowed to perform this acction"}, 401)

    names = Product.query.all()
    
    all_names = products_schema.dump(
            filter(lambda t: t.product_id == user.account_id, names)
            )
            
    return jsonify(names = all_names)



@bp_products.route('/delete/<id>', methods=['DELETE'])
@cross_origin()
@jwt_required()
def delete_product(id):

    current_user = get_jwt_identity() 
    user = User.query.filter_by(email=current_user).first()

    if user.role != "creator":
         return jsonify({"error": "You are not allowed to perform this acction"}, 401)

    # Ovdje moram jos dodati da prvo uzmem sve announcmente pa onda idem redom i za onaj koji ima product_id= id i owner_id = user.account_id..
    # announcement = Announcement.query.get(id)

    # if user.account_id != announcement.owner_id:
    #      return jsonify({"error": "You are not authorized to delete this announcement"},401)

    # product = Product.query.get(id)

    # if user.account_id != product.owner_id:
    #      return jsonify({"error": "You are not authorized to delete this product"},401)    
    #   db.session.delete(product)
    #db.session.delete(announcement)
    Announcement.query.filter_by(product_id=id).delete()
    Product.query.filter_by(product_id=id).delete()
    db.session.commit()

    products = Product.query.all()
    the_products = products_schema.dump(
            filter(lambda t: t.owner_id == user.account_id, products)
            )

    return jsonify({"deleted" : "Product succesfuly deleted", "products": the_products}, 201)