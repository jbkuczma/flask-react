import os
from flask import Flask, render_template, jsonify, request

templateDirectory = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app/backend/templates')
staticDirectory = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app/backend/static')

app = Flask(
    __name__,
    template_folder = templateDirectory,
    static_folder = staticDirectory
)

### Routes ###

@app.route('/')
def index():
    return render_template('index.html')

###############

### API ###

###############

@app.errorhandler(404)
def pageNotFound(error):
    return render_template('404.html')

###############