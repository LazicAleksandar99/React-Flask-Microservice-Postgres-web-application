from app import app, db
from app.models.user import User
from app.models.product import Product
from app.routes.sign import bp_sign

app.register_blueprint(bp_sign)

if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run()