from flask import Flask, send_file, make_response, session, render_template
from flask import request, jsonify
from flask_cors import CORS, cross_origin
from AnagramLogic_BackendModule import isAnagram, mydict

app = Flask(__name__)
app.config["DEBUG"] = True
cors = CORS(app)

## Homepage Route
@app.route('/', methods = ["GET"])
def home():
    return 'Hello'

## Form Connection and Data Delivery API Route
@app.route("/send", methods = ["GET", "POST"])
def send():
    if request.method == "POST":
        word1 = str(request.json["word1"])
        word2 = str(request.json["word2"])
        result = isAnagram(word1, word2)
        # print("Send API Result: ", result)
        return jsonify(result)

## Form Connection and Data Delivery API Route
@app.route("/top", methods = ["GET", "POST"])
def top():
    if request.method == "POST":
        new_mydict = dict(sorted(mydict.items(), key=lambda item: item[1], reverse=True)) ## Sort Dictionary
        data = list(new_mydict.keys())[:9] ## Fetch Top 10 Elements from dictionary
        # print("Top API Data: ", data)
        return jsonify(data)

app.run(debug=True, port=5000) 