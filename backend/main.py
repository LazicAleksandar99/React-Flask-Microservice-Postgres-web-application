from app import app, db
from app.models.user import User

@app.route('/')
def hello_world():
    return "<p>HELLOO</p"


    
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    app.debug = True
    app.run()