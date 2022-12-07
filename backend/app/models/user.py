from app import db
from marshmallow import Schema, fields
#//customer, creator, admin

class User(db.Model):
    account_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique= True)
    birthday = db.Column(db.DateTime, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(10), nullable=False, default="customer")

    def __init__(self, name, last_name, birthday, email, password):
        self.name = name
        self.last_name = last_name        
        self.birthday = birthday
        self.email = email
        self.password = password


class UserSchema(Schema):
    account_id = fields.Number()
    name = fields.Str()
    last_name = fields.Str()
    email = fields.Str()
    birthday = fields.DateTime()
    password = fields.Str()
    role = fields.Str()
