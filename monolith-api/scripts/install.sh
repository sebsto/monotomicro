#!/bin/sh

# installtion sequence on Amazon Linux 2

yum update -y 
yum install git -y 
pip3 install pipenv 
git clone https://github.com/sebsto/monotomicro.git
cd monotomicro/monolith-api/
pipenv shell --python /usr/bin/python3
pipenv install
python3 api.py 

# test from remote
# 1. find public ip address in the EC2 console 
# 2. from my laptop : curl -v http://<public_ip_address>:8888/products/