
#
# product interface on the frontend
#
# export class Item {
#     id : string = ""
#     name: string = ""
#     desc: string = ""
#     price: number = 0.0
#     stock : number = 0
#     image: string = ""
# }


from flask import request
from flask_restful import Resource

PRODUCTS = [
    {
        "id" : "001",
        "name": "Unicorn Saddle",
        "desc": "Unique saddle for unique unicorns",
        "price": 250,
        "stock": 15,
        "image": "saddle.png"
    },
    {
        "id" : "002",
        "name": "Unicorn brush",
        "desc": "Your unicorn deserves the softest brushes",
        "price": 15,
        "stock": 23,
        "image": "brush.png"
    },        
]

class ProductList(Resource):

    def get(self):
        return { "items" : PRODUCTS }


class Product(Resource):

    def get(self, product_id):
        print(product_id)
        return { "items" : list(filter(lambda item: item['id'] == product_id, PRODUCTS)) }