import json 
import base64 

class Cart():
    cart = []
    def get(self):
        return { "status" : "success", "cart" : self.cart }

    def put(self,body):
        # no attempt made to interpret the data, storing the string as-is
        jsondata = {}
        try:
            jsonData = json.loads(body)
            print(jsonData)
        except ValueError:
            # when data are sent through HttpApi gateway, it is base64 encoded 
            bString = body.encode('ascii') # binary representation of the base64 string 
            jsonData = json.loads(base64.b64decode(bString))
            print(jsonData)

        # check if item.id already exist in cart, when it does just add quantity 
        item = list(filter(lambda c: jsonData['item']['id'] == c['item']['id'], self.cart))
        if len(item) == 1:
            item[0]['quantity'] += jsonData['quantity'] 
        else:
            self.cart.append(jsonData)

        # return the current cart
        return { "status" : "success", "cart" : self.cart }
