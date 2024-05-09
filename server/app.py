from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# This is a test API KEY with limited usage.
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

@app.route('/estimate/shipping', methods=['POST'])
def estimate_shipping():
    data = request.json
    response = requests.post(
        "https://www.carboninterface.com/api/v1/estimates",
        headers = {
            'Authorization': f'Bearer {API_KEY}',
            'Content-Type': 'application/json',
        },
        json={
            "type": "shipping",
            "weight_value": data.get("weight_value"),
            "weight_unit": data.get("weight_unit"),
            "distance_value": data.get("distance_value"),
            "distance_unit": data.get("distance_unit"),
            "transport_method": data.get("transport_method"),
        }
    )
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
