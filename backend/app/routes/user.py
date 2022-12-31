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
    user = User.query.filter_by(email=current_user).first()

    if user.role != "admin":
         return jsonify({"error": "You are not allowed to perform this acction"}, 401)
    
    users = User.query.all()    
    the_users = users_schema.dump(
            filter(lambda t: t.role != "admin", users)
        )
    return jsonify(users = the_users)


@bp_user.route('/update', methods=['PUT'])
@cross_origin()
@jwt_required()
def update_user():
    
    current_user = get_jwt_identity()    
    user = User.query.filter_by(email=current_user).first()

    if user.role != "admin":
         return jsonify({"error": "You are not allowed to perform this acction"}, 401)

    email = request.json['email']
    action = request.json['action']

    if not email or not email.strip() or len(email) < 3:
        return jsonify({"error": "Body of your request has been changed"},401)
    elif not action:
        return jsonify({"error": "Body of your request has been changed"},401)
    elif action != 'verified' and action != 'denied':
        return jsonify({"error": "Body of your request has been changed"},401)

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({"error": "Body of your request has been changed"},401)

    user.verified = action

    db.session.commit()
    return jsonify({"Verified": "New user succesfuly verified"}, 201)


@bp_user.route('/change', methods=['PUT'])
@cross_origin()
@jwt_required()
def change_user_profile():

    current_user = get_jwt_identity()

    name = request.json['name']
    last_name = request.json['last_name']
    email = request.json['email']
    password = request.json['password']
    birthday = request.json['birthday']

    if not email or not email.strip() or len(email) < 3:
        return jsonify({"error": "Body of your request has been changed"},401)
    elif not name or not name.strip() or len(name) < 1:
        return jsonify({"error": "You didnt input valid name "},401)
    elif not last_name or not last_name.strip() or len(last_name) < 1:
        return jsonify({"error": "You didnt input valid lastname "},401)
    elif not birthday:
        return jsonify({"error": "You didnt input valid birthday "},401)
    

    user = User.query.filter_by(email=current_user).first()

    if not user:
        return jsonify({"error": "Token not valid"},401)
    #ovdje sad ifovi, da li ime nesto ima u sebi, prezime isto, email da li vec postoji da li je validan email, password da li se vec podudara b day da li veci manji i 18+ godina

    user.name = name.strip()
    user.last_name = last_name.strip()
    user.email = email.strip()
    if password.strip():
        user.password = User.generete_password(password)

    user.birthday = birthday

    db.session.commit()

    additional_claims = {"role": user.role}
    token = create_access_token(identity=email,additional_claims = additional_claims)
    #the_user = user_schema.dump(user) # mora shema jer preko query.all ne moze jesinify
    return jsonify({'token': token}, 200)