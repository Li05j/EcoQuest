from flask import Flask, request, jsonify
import requests

app = Flask(__name__)
API_KEY = 'IBfGoXLBVKXsM10L0SSA'


@app.route('/auth')
def auth_test():
    api_key = API_KEY
    headers = {
        'Authorization': f'Bearer {api_key}',
    }
    response = requests.get("https://www.carboninterface.com/api/v1/auth", headers=headers)
    return response.json()

@app.route('/estimate/electricity', methods=['POST'])
def estimate_electricity():
    data = request.json
    response = requests.post(
        "https://www.carboninterface.com/api/v1/estimates",
        headers = {
            'Authorization': f'Bearer {API_KEY}',
            'Content-Type': 'application/json',
        },
        json={
            "type": "electricity",
            "electricity_unit": data.get("electricity_unit"),
            "electricity_value": data.get("electricity_value"),
            "country": data.get("country"),
            "state": data.get("state")
        }
    )
    return jsonify(response.json())

@app.route('/estimate/flight', methods=['POST'])
def estimate_flight():
    data = request.json
    return jsonify({"message": "Flight estimate route not implemented yet"})

if __name__ == '__main__':
    app.run(debug=True)
