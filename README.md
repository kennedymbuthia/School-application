# School Management Web System

A comprehensive web-based application for managing primary school operations including student records, teacher assignments, timetables, grading, online fee payments, reports, and notifications.

## 📋 Project Overview

### Technology Stack
- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Authentication**: JWT-based with Role-Based Access Control (RBAC)
- **Payment Gateway**: M-Pesa integration ready

### Key Features
- 👥 User Management (Admin, Teacher, Parent, Student roles)
- 📚 Academic Year & Term Management
- 🏫 Class & Subject Management
- 📅 Timetable Management with conflict detection
- ✅ Attendance Tracking & Locking
- 📊 Grading & Assessment with approval workflow
- 💳 Online Fee Payments
- 📈 Reports & Analytics
- 🔔 Notifications System
- 📝 Audit Logging
- 🛡️ System Administration

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- Docker (optional)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd School-application/School-application
```

2. **Backend Setup**
```bash
cd backend
cp .env.example .env
# Edit .env with your database credentials

npm install
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

### Using Docker

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

---

## 📁 Project Structure

```
School-application/
├── backend/
│   ├── src/
│   │   ├── config/          # Database & environment config
│   │   ├── middleware/       # Auth & error handling
│   │   ├── modules/         # Feature modules
│   │   │   ├── academic-years/
│   │   │   ├── attendance/
│   │   │   ├── audit/
│   │   │   ├── classes/
│   │   │   ├── grades/
│   │   │   ├── notifications/
│   │   │   ├── parent-portal/
│   │   │   ├── payments/
│   │   │   ├── reports/        # NEW: Reporting & Analytics
│   │   │   ├── students/
│   │   │   ├── system-admin/   # NEW: System Administration
│   │   │   ├── timetable/
│   │   │   └── users/
│   │   └── utils/            # Helpers & utilities
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   ├── Dockerfile
│   └── package.json
├── docs/
│   ├── ADMIN_MANUAL.md
│   ├── USER_MANUAL.md
│   └── API_DOCUMENTATION.md
├── docker-compose.yml
├── .github/
│   └── workflows/
│       └── ci-cd.yml
└── README.md
```

---

## 🔐 User Roles & Permissions

| Feature | Admin | Teacher | Parent |
|---------|-------|---------|--------|
| User Management | ✅ | ❌ | ❌ |
| Academic Years | ✅ | ❌ | ❌ |
| Classes | ✅ | 👁️ | 👁️ |
| Subjects | ✅ | 👁️ | 👁️ |
| Timetable | ✅ | ✏️ | 👁️ |
| Attendance | ✅ | ✏️ | 👁️ |
| Grades | ✅ | ✏️ | 👁️ |
| Payments | ✅ | ❌ | ✏️ |
| Reports | ✅ | ✅ | ❌ |
| System Admin | ✅ | ❌ | ❌ |

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Register user
- `POST /api/auth/logout` - Logout
- `POST /api/auth/refresh` - Refresh token

### Core Modules
- `/api/academic` - Academic years & terms
- `/api/classes` - Class management
- `/api/timetable` - Timetable
- `/api/attendance` - Attendance
- `/api/grades` - Grades & assessments
- `/api/students` - Student management
- `/api/parent-portal` - Parent portal
- `/api/payments` - Payments & fees
- `/api/notifications` - Notifications
- `/api/audit` - Audit logs

### New Modules
- `/api/reports` - Reports & Analytics
- `/api/system` - System Administration

> Full API documentation available in `docs/API_DOCUMENTATION.md`

---

## 🧪 Testing

### Run Backend Tests
```bash
cd backend
npm test
```

### Run Frontend Tests
```bash
cd frontend
npm test
```

---

## 🔄 CI/CD Pipeline

The project includes GitHub Actions workflow for:
- Backend unit tests
- Frontend build & lint
- Docker image building
- Production deployment

See `.github/workflows/ci-cd.yml` for details.

---

## 📚 Documentation

- [Administrator Manual](docs/ADMIN_MANUAL.md)
- [User Manual](docs/USER_MANUAL.md)
- [API Documentation](docs/API_DOCUMENTATION.md)

---

## 🛠️ Environment Variables

### Backend (.env)
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=schooluser
DB_PASSWORD=your_password
DB_NAME=schooldb
JWT_SECRET=your_jwt_secret
PORT=3000
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000
VITE_APP_TITLE=School Management System
```

---

## 📄 License

ISC License

---

## 👤 Author

titus mwangi 
---

## 🙏 Acknowledgments

- Node.js & Express
- PostgreSQL
- React & Vite
- Tailwind CSS

