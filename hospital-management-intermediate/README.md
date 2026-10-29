# Hospital Management System — Intermediate Node.js Project

This project is designed for learning by analyzing a realistic backend structure.

## 1. Install

Open a terminal inside this folder:

```bash
npm install
```

## 2. Run the JavaScript practice

```bash
node app.js
```

Start with `app.js` to revise arrays, objects, loops and functions.

## 3. Run the API

```bash
npm start
```

Server:

http://localhost:5000

Health check:

http://localhost:5000/api/health

## 4. API endpoints

### Patients

GET all:

```text
GET /api/patients
```

Search:

```text
GET /api/patients?name=alex
```

Get one:

```text
GET /api/patients/1
```

Create:

```text
POST /api/patients
```

Example JSON:

```json
{
  "name": "Jack",
  "age": 30,
  "gender": "Male",
  "phone": "9000000010",
  "disease": "Cold",
  "doctorId": 1
}
```

Update:

```text
PUT /api/patients/1
```

Delete:

```text
DELETE /api/patients/1
```

### Doctors

```text
GET /api/doctors
GET /api/doctors/1
```

### Appointments

```text
GET /api/appointments
GET /api/appointments/1
POST /api/appointments
```

Example appointment:

```json
{
  "patientId": 1,
  "doctorId": 1,
  "date": "2026-09-12",
  "time": "14:00"
}
```

## 5. Project architecture

```text
Request
  ↓
Route
  ↓
Controller
  ↓
Service
  ↓
Utility / JSON file
  ↓
Response
```

### What each folder does

- `data/` — temporary JSON database
- `routes/` — API URL definitions
- `controllers/` — handles HTTP request/response
- `services/` — business logic
- `utils/` — reusable helper functions
- `middleware/` — common request/error handling
- `server.js` — Express application entry point
- `app.js` — JavaScript fundamentals practice

## 6. Recommended learning order

Do NOT try to memorize the whole project.

Study in this order:

1. `app.js`
2. Functions
3. Parameters and return
4. `map`, `filter`, `find`
5. JSON
6. `fs/promises`
7. Node modules
8. `server.js`
9. Express routes
10. Controllers
11. Services
12. REST CRUD
13. Postman
14. SQL database
15. Authentication/JWT

The JSON files are used as a simple learning database. In a production application, replace them with a real database.
