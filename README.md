# Dataku Glide - Backend system

## Description
- A revamp of the legacy backend system for **glide.dataku.io**

## Features:
- User authentication/authorization (JWT,Bcrypt)
- User access control (Role access)
- CRUD for:

| COMPONENTS | ENDPOINTS | METHODS |
| --------------- | --------------- | --------------- |
| Auth login | /auth | POST |
| Auth logout | /auth/logout | POST |
| User | /api/users | POST, GET |
| User | /users/:user_id | GET, PATCH, DELETE |
| Monitor tank | /api/monitor-tanks | POST, GET |
| Monitor tank | /api/monitor-tanks/:mt_id | GET, PATCH, DELETE |
| Monitor tank log | /api/monitor-tank-logs | POST, GET |
| Monitor tank log | /api/monitor-tank-logs/:mlt_id | GET |
| Monitor tank log | /api/monitor-tank-logs/date/:mtl_year/:mtl_month | GET |
| Monitor tank log | /api/latest/monitor-tank-logs | GET |

- MQTT data store and retrieval capability

## Prerequisites:
- Typescript
- Postgresql

## Procedures:
1. Open the *.npmrc* file, and add the authorization key
> Token must be requested from the npm module author @harrypoggers25
2. Run `npm run install` to install all the required packages
> Typescript must be installed prior to this script. Run `npm install -g typescript` to install it globally
3. Run `npm run senvbr` to initialize the *.env* file
4. Configure the *.env* file accordingly
5. Run `npm run sdbbr` to initialize the database schemas and tables
> The database must be created prior to this script. DB_NAME from the *.env* configuration must match the name of the database
6. Import the previous database data via sql script (must request from author)
7. Run `npm run br` to start the system
