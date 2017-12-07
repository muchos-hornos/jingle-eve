from eve import Eve
from flask import send_from_directory
from flask_sentinel import ResourceOwnerPasswordCredentials, oauth
from oauth2 import BearerAuth

app = Eve(__name__, static_url_path="/static", static_folder="frontend/dist")

# app = Eve(__name__, auth=BearerAuth, static_folder="static")
# ResourceOwnerPasswordCredentials(app)

@app.route('/endpoint')
@oauth.require_oauth()
def restricted_access():
    return "You made it through and accessed the protected resource!"


@app.route('/')
def index():
    return send_from_directory("frontend", 'index.html')

if __name__ == '__main__':
    app.run()