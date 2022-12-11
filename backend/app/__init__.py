from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# app.use(CORS({credentials: true, origin: 'http://localhost:3000'}))
# app.options('*', CORS())
app.config.from_object(Config)
jwt = JWTManager(app)
db = SQLAlchemy(app)
db.init_app(app)
migrate = Migrate(app, db)