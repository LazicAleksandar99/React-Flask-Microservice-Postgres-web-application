from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
jwt = JWTManager(app)
db = SQLAlchemy(app)
db.init_app(app)
migrate = Migrate(app, db)