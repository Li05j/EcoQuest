from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/auth')
def auth_test():
    api_key = 'IBfGoXLBVKXsM10L0SSA'  # Replace with your actual API key
    headers = {
        'Authorization': f'Bearer {api_key}',
    }
    response = requests.get("https://www.carboninterface.com/api/v1/auth", headers=headers)
    return response.json()

if __name__ == '__main__':
    app.run(debug=True)
