from app.extensions import db
from flask import Blueprint, request, jsonify
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from app.models.product import Product, ProductSchema
from app.models.announcement import Announcement, AnnouncementSchema
from app.models.user import User
from flask_cors import cross_origin

bp_announcements = Blueprint('announcements', __name__, url_prefix='/announcement')

announcement_schema = AnnouncementSchema
announcements_schema = AnnouncementSchema(many=True)

@bp_announcements.route('/add', methods=['POST'])
@cross_origin()
@jwt_required()
def add_product():

    current_user = get_jwt_identity()
    #provjera da li je ROLE CREATOR
    name = request.json['name']
    heading = request.json['heading']
    description = request.json['description']

    product = Product.query.filter_by(name=name).first()
    
    new_announcement = Announcement(heading, description, product.product_id, product.picture)

    db.session.add(new_announcement)
    db.session.commit()

    return jsonify({"created": "New announcement succesfuly created"}, 201)


@bp_announcements.route('/all', methods=['GET'])
@cross_origin()
@jwt_required()
def get_all_announcements():

    current_user = get_jwt_identity()
    #dalje s ovim treba provjera da li customer ili admin.... 
    announcements = Announcement.query.all()
  #  print(products.length)
    all_announcements = announcements_schema.dump(announcements) # mora shema jer preko query.all ne moze jesinify
    return jsonify(announcements = all_announcements)