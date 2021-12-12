

from flask import request
from flask_restful import Resource

class Healthcheck(Resource):

    def get(self):
        return { "status" : "ok" }
