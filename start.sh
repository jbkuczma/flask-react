#!/bin/sh

source bin/activate

pip install -r requirements.txt

export FLASK_DEBUG=1
export FLASK_APP=server.py

flask run
