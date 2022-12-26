from app.extensions import db
from marshmallow import Schema, fields

class Announcement(db.Model):
    announcement_id = db.Column(db.Integer, primary_key=True)
    heading = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(700), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.product_id'), nullable=False)
    picture = db.Column(db.String(256), nullable=False)

    def __init__(self, heading, description, product_id, picture):
        self.heading = heading
        self.description = description 
        self.product_id = product_id
        self.picture = picture

class AnnouncementSchema(Schema):
    announcement_id = fields.Number()
    heading = fields.Str()
    description = fields.Str()
    product_id = fields.Number()
    picture = fields.Str()