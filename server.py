import os
from flask import Flask, render_template

templateDirectory = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app/backend/templates')
staticDirectory = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app/backend/static')

app = Flask(
    __name__,
    template_folder = templateDirectory,
    static_folder = staticDirectory
)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/user/<userid>')
def userPage(userid):
    return 'your page!'

@app.route('/user/<userid>/posts')
def userPosts(userid):
    return 'your posts!'

@app.errorhandler(404)
def pageNotFound(error):
    return render_template('404.html')