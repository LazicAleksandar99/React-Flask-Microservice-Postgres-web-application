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
    user = User.query.filter_by(email=current_user).first()

    if user.role != "creator":
         return jsonify({"error": "You are not allowed to perform this acction"}, 401)

    name = request.json['name']
    heading = request.json['heading']
    description = request.json['description']

    if not name or not name.strip() or len(name) < 1:
        return jsonify({"error": "You didnt input valid name "},401)
    elif not heading or not heading.strip() or len(heading) < 1:
        return jsonify({"error": "You didnt input valid heading"},401)
    elif not description or not description.strip() or len(description) < 1:
        return jsonify({"error": "You didnt input valid description"},401)

    product = Product.query.filter_by(name=name).first()
    
    if not product:
        return jsonify({"error": "Name doesn't match any product"},401)

    new_announcement = Announcement(heading, description, product.product_id, user.account_id, product.picture)

    db.session.add(new_announcement)
    db.session.commit()

    return jsonify({"created": "New announcement succesfuly created"}, 201)


@bp_announcements.route('/all', methods=['GET'])
@cross_origin()
@jwt_required()
def get_all_announcements():

    current_user = get_jwt_identity()
    user = User.query.filter_by(email = current_user).first()
    announcements = Announcement.query.all()
 
    if user.role == "creator":
        all_announcements = announcements_schema.dump(
            filter(lambda t: t.owner_id == user.account_id, announcements)
            ) 
    else:
        all_announcements = announcements_schema.dump(announcements)
    
    return jsonify(announcements = all_announcements)


@bp_announcements.route('/delete/<id>', methods=['DELETE'])
@cross_origin()
@jwt_required()
def delete_announcement(id):

    current_user = get_jwt_identity()

    user = User.query.filter_by(email=current_user).first()

    if user.role != "creator":
         return jsonify({"error": "You are not allowed to perform this acction"}, 401)

    announcement = Announcement.query.get(id)

    if user.account_id != announcement.owner_id:
         return jsonify({"error": "You are not authorized to delete this announcement"},401)

    db.session.delete(announcement)
    db.session.commit()

    return jsonify({"deleted" : "Announcement succesfuly deleted"})