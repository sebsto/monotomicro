import json
import boto3 

from cart import Cart

def lambda_handler(event, context):
    print(event)
    print(context)

    cart = Cart()
    result = {}

    # this is blocked by the API Gateway, but we never know
    # the / at the end is there to enforce flask-rest behaviour that was used by the monolith
    if not event['rawPath'].startswith('/cart'):
        result = {
            "statusCode": 404,
            "body": json.dumps({
                "message": f"Invalid path : {event['rawPath']}"
            })
        }
    else:

        # default response 
        result = {
            "statusCode": 405,
            "body": json.dumps({
                "message": f"Invalid method : {event['requestContext']['http']['method']}"
            })
        }

        # handle get 
        if event['requestContext']['http']['method'] == 'GET':
            result = {
                "statusCode": 200,
                "body": json.dumps(cart.get())
            }

        # handle put     
        if event['requestContext']['http']['method'] == 'PUT':
            result = {
                "statusCode": 200,
                "body": json.dumps(cart.put(event['body']))
            }

    return result