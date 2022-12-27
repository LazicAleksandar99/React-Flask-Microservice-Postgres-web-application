from app.extensions import db
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from app.models.user import User, UserSchema
from flask_cors import cross_origin

bp_user = Blueprint('user', __name__, url_prefix='/user')

user_schema = UserSchema
users_schema = UserSchema(many=True)

@bp_user.route('/all', methods=['GET'])
@cross_origin()
@jwt_required()
def get_users():

    current_user = get_jwt_identity()
    #dalje s ovim treba provjera da li customer ili admin.... 
    users = User.query.all()

    the_users = users_schema.dump(
            filter(lambda t: t.role != "admin", users)
        )
  #  print(products.length)
    all_users = users_schema.dump(users) # mora shema jer preko query.all ne moze jesinify
    return jsonify(users = the_users)


@bp_user.route('/update', methods=['PUT'])
@cross_origin()
@jwt_required()
def update_user():
    
    email = request.json['email']
    action = request.json['action']
    user = User.query.filter_by(email=email).first()

    user.verified = action

    db.session.commit()
    return jsonify({"Verified": "New user succesfuly verified"}, 201)