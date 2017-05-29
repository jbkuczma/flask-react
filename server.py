import os
from flask import Flask, render_template, jsonify, request

templateDirectory = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app/backend/templates')
staticDirectory = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app/backend/static')

app = Flask(
    __name__,
    template_folder = templateDirectory,
    static_folder = staticDirectory
)

testData = {
    1: {
        'userid': 1,
        'username': 'james',
        'posts': [
            'Hello!',
            'Flask + React is awesome',
            'Go Bills'
        ]
    },
    2: {
        'userid': 2,
        'username': 'yeezy',
        'posts': [
            'Pablo',
            'Yeezus',
            '808s'
        ]
    },
    3: {
        'userid': 3,
        'username': 'user246',
        'posts': [
            'Reddit'
        ]
    }
}

testDataNameToID = {
    'james': 1,
    'yeezy': 2,
    'user246': 3
}

### Routes ###

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<username>', methods=['GET'])
def userPage(username):
    userid = getUserIDFromUsername(username)
    data = getUserInfo(userid)
    print(data)
    return data

@app.route('/<username>/posts', methods=['GET'])
def userPosts(username):
    userid = getUserIDFromUsername(username)
    data = getUserPosts(userid)
    return data

###############

### API ###

# retrieve user info for a provided userid
@app.route('/api/1.0/user/<int:userid>', methods=['GET'])
def getUserInfo(userid):
    data = testData[userid]
    return jsonify({'userData': data})

@app.route('/api/1.0/user/<int:userid>/posts', methods=['GET'])
def getUserPosts(userid):
    posts = testData[userid]['posts']
    return jsonify({'posts': posts})

@app.errorhandler(404)
def pageNotFound(error):
    return render_template('404.html')

###############

### Helpers ###

def getUserIDFromUsername(username):
    return testDataNameToID[username]

###############