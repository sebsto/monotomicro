from flask import request
from flask_restful import Resource

class Cart(Resource):
    cart = []
    def get(self):
        return { "status" : "success", "cart" : self.cart }

    def put(self):
        # no attempt made to interpret the data, storing the string as-is
        jsonData = request.json

        # check if item.id already exist in cart, when it does just add quantity 
        item = list(filter(lambda c: jsonData['item']['id'] == c['item']['id'], self.cart))
        if len(item) == 1:
            item[0]['quantity'] += jsonData['quantity'] 
        else:
            self.cart.append(jsonData)

        # return the current cart
        return { "status" : "success", "cart" : self.cart }
