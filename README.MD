# Monolith to micro services demo

A React front end and a monolithic API.

## Local testing 

### Start the front end locally 

```sh 
cd frontend 
npm install 
cp config.json.DEFAULT config.json
npm start run
```

### Start the monolith api locally 

Assuming `pipenv` is installed :

```sh 
cd monolith-api 
pipenv shell
pipenv install 
python api.py
```

## Remote Deployment

### Frontend

I am using Amplify console, connect it to my github repo and let it deploy the app.
Amplify console gives an url like https://main.dld2lvjirxlja.amplifyapp.com (this is an example)

## To do

- add `configuration.json`in frontend to connect to backend
- automatic deployment of the monolithic api version to EC2
- document the demo end-to-end

## Done 

- amplify console to host to deploy the front end (manual)
- add microservice cart with SAM 

## Thank you 

- the front end is largly inspired from [the work](https://github.com/aws-samples/aws-appconfig-feature-flags) of my colleague [Gunnar Grosch](https://github.com/gunnargrosch) 
- to the numerous people asking and answering questions on stackoverflow.com. This knwoledge base is so important to me to learn, improve, and correct my own mistakes.  