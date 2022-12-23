from flask import Flask
from config import Config
from app.extensions import db, migrate
from app.models.user import User #jako bitno da se klase importaju da migracije mogu biti prepoznate
from app.models.product import Product
from flask_jwt_extended import JWTManager
from flask_cors import CORS


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)
    # app.use(CORS({credentials: true, origin: 'http://localhost:3000'}))
    # app.options('*', CORS())
    jwt = JWTManager(app)
    db.init_app(app)
    migrate.init_app(app, db)
    
    #routes
    from app.routes.sign import bp_sign
    app.register_blueprint(bp_sign)

    from app.routes.products import bp_products
    app.register_blueprint(bp_products)

    return app