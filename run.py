from eve import Eve
from flask import Flask, request, send_from_directory

app = Eve(__name__, static_folder="static")

@app.route('/')
def index():
    return send_from_directory("static", 'base.html')

if __name__ == '__main__':
    app.run()