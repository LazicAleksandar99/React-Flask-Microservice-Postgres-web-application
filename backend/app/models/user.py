from app.extensions import db
from marshmallow import Schema, fields
from werkzeug.security import generate_password_hash, check_password_hash
#//customer, creator, admin

class User(db.Model):
    account_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique= True)
    birthday = db.Column(db.DateTime, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    role = db.Column(db.String(10), nullable=False)
    verified = db.Column(db.String(10), nullable=False)
    products = db.relationship('Product', backref='user', cascade = 'all, delete-orphan')

    def __init__(self, name, last_name, birthday, email, role, password, verified):
        self.name = name
        self.last_name = last_name        
        self.birthday = birthday
        self.email = email
        self.role = role
        self.password = generate_password_hash(password)
        self.verified = verified


    def verify_password(self, password):
        return check_password_hash(self.password, password)


class UserSchema(Schema):
    #account_id = fields.Number()
    name = fields.Str()
    last_name = fields.Str()
    email = fields.Str()
    birthday = fields.DateTime()
    #password = fields.Str()
    role = fields.Str()
    verified = fields.Str()
