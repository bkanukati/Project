## Project Description
```markdown
Heal & Cure – Health Information Management System
Empowering Patients. Streamlining Healthcare.

Heal & Cure is a health information management system designed to address the challenges patients face when managing medical data across multiple platforms and healthcare providers. The fragmented nature of modern healthcare often results in repeated tests, miscommunication, and treatment delays—ultimately affecting patient outcomes.

This project aims to provide an integrated, user-friendly solution that centralizes health information. By improving communication among healthcare professionals and giving patients control over their appointments, prescriptions, and health records, Heal & Cure enhances care coordination, reduces inefficiencies, and promotes better health outcomes.

🚀 Key Features
Schedule and manage patient appointments (date & time)

Upload and view prescriptions (PDFs or images)

Access a complete list of upcoming appointments

RESTful API built with Gin (Go)

Clean, modular user interface developed with Angular

🧰 Technology Stack
Frontend: Angular

Backend: Go (Golang)

Database: SQLite

Testing: Cypress, Jasmine, Go test

⚙️ System Requirements
Backend:

Go 1.16 or higher

SQLite3

Frontend:

Node.js (v14 or above)

Angular CLI (npm install -g @angular/cli)


```
## 🛠️ Running the Application

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/health-info-system.git
cd health-info-system
```

### 2. Run the Backend

```bash
cd backend
go run main.go
```

This starts the API server at `http://localhost:8080`.

### 3. Run the Frontend

```bash
cd frontend
npm install
ng serve
```

The frontend will be available at `http://localhost:3000`.

---

## 🎯 API Endpoints

| Method | Endpoint               | Description                |
|--------|------------------------|----------------------------|
| POST   | `/book-appointment`    | Book a new appointment     |
| GET    | `/appointments`        | List all appointments      |
| POST   | `/upload-prescription` | Upload a prescription file |
| GET    | `/prescriptions`       | List uploaded prescriptions|

---

## 🧪 Testing

### Frontend Unit Tests

```bash
ng test
```

### Cypress E2E Tests

```bash
npx cypress open
```

### Backend Tests (Go)

```bash
go test
```

---

## 📁 Folder Structure

```
health-info-system/
├── backend/          → Golang API
│   ├── main.go
│   └── uploads/
├── frontend/         → Angular UI
│   ├── src/
│   └── package.json
├── README.md
```

---

## 🧑‍💻 Contributors

- Bharath Kanukati
- Vinay Batra
- Aalap Bhoiwala
- Vaibhav Maru
