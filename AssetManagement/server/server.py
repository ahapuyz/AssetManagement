# server.py
from flask import Flask, request, jsonify
from process_data import process_data

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    data = request.json['data']
    result = process_data(data)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
