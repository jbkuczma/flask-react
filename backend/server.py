import json
from flask import Flask, request, Response, jsonify

app = Flask(__name__)

notes = {
    0: 'Frontend is using React',
    1: 'Backend is using Flask',
    2: 'Have fun!'
}

@app.route('/api/v1/notes', methods=['GET','POST'])
def serve():
    if request.method == 'GET':
        return Response(
            json.dumps(notes),
            mimetype='application/json',
            headers={
                'Cache-Control': 'no-cache',
                'Access-Control-Allow-Origin': '*'
            }
        )

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=3001,
        debug=True
    )