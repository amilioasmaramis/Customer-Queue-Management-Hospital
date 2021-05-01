# Customer-Queue-Management-Hospital
A "Customer Queue Management" for walk-in customer. 

CUSTOMER QUEUE MANAGEMENT is app app untuk mendaftarkan seorang pasien yang ingin berobat ke rumah sakit, and all the data is stored / fetched via REST API to backend server.

## Live Url
Deploying on Amazon AWS Client and Server
- Client : http://customer-queue-app-amilio.s3-website-ap-southeast-1.amazonaws.com/
```
for example user account:
- username : user@mail.com
- password : user
```
- Server (API) : http://13.229.72.244:8001


# Customer Queue Management App Server 

This is a CUSTOMER QUEUE MANAGEMENT Server using Nodejs ExpressJs Framework, jwt, bcryptjs etc


## Base Url
http://localhost:8001/

## Usage For Development
```
# Step:
1. npm install
2. npm run dev

# using:
1. npm run dev -> for running on development

# Run on http://localhost:8001
```

# Customer Queue Management App Client 

This is a CUSTOMER QUEUE MANAGEMENT Client using React Framework and HTML CSS

## Base Url
http://localhost:3000/

## Usage For Development
```
# Step:
1. npm install (important)
2. npm start

# using:
1. npm start

# Information:
1. Admin Input Data, List Data run on : http://localhost:3000 (login required)
2. Antrian : http://localhost:3000/antrian

# Run on http://localhost:3000
```
