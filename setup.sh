#!/bin/sh
#
# Setup and install dependencies for frontend and backend
#

current_directory=$PWD

# Prepare React app
cd $current_directory/app/

# install frontend dependencies
npm install

# run React dev server
echo "Frontend dependencies installed. Run 'npm start' in a seperate tab to start the development server."

# Prepare Flask backend
cd $current_directory/backend/

# start virtualenv
source $current_directory/bin/activate

# install backend dependencies
pip install -r requirements.txt

echo "Backend dependencies installed."

# prepare Flask app
export FLASK_DEBUG=1
export FLASK_APP=server.py

echo "Starting Flask server."
# run Flask app
flask run
