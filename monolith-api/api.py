from flask import Flask, request
from flask_restful import Resource, Api

from cart import Cart 
from products import Product, ProductList

app = Flask(__name__)
api = Api(app)

api.add_resource(Cart, '/cart/')
api.add_resource(ProductList, '/products/')
api.add_resource(Product, '/products/<product_id>')

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Authorization,*')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

if __name__ == '__main__':
    app.run(debug=True, port=8888)