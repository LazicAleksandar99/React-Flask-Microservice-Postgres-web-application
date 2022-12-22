from app.extensions import db
from marshmallow import Schema, fields

class Product(db.Model):
    product_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    picture = db.Column(db.String(256), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.account_id'), nullable=False)

    def __init__(self, name, description, picture, price, owner):
        self.name = name
        self.description = description        
        self.picture = picture        
        self.price = price
        self.owner = owner


class ProductSchema(Schema):
    product_id = fields.Number()
    name = fields.Str()
    description = fields.Str()
    picture = fields.Str()
    price = fields.Number()
    owner = fields.Number()
