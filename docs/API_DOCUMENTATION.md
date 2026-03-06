# School Management System - API Documentation

## Base URL
```
Production: https://api.school.edu
Development: http://localhost:3000
```

## Authentication
All protected endpoints require JWT Bearer token in the header:
```
Authorization: Bearer <token>
```

## Roles
- `admin` - Full system access
- `teacher` - Class management, grades, attendance
- `parent` - View child information, make payments

---

## Endpoints Overview

### Authentication
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | /api/auth/login | User login | Public |
| POST | /api/auth/register | Register new user | Public |
| POST | /api/auth/refresh | Refresh token | Public |
| POST | /api/auth/logout | Logout | Required |
| POST | /api/auth/forgot-password | Request password reset | Public |
| POST | /api/auth/reset-password | Reset password | Public |

### Academic Years
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/academic/years | List academic years | Required |
| POST | /api/academic/years | Create academic year | Admin |
| GET | /api/academic/years/:id | Get academic year | Required |
| PUT | /api/academic/years/:id | Update academic year | Admin |
| DELETE | /api/academic/years/:id | Delete academic year | Admin |
| POST | /api/academic/years/:id/set-current | Set as current | Admin |

### Classes
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/classes | List classes | Required |
| POST | /api/classes | Create class | Admin |
| GET | /api/classes/:id | Get class details | Required |
| PUT | /api/classes/:id | Update class | Admin |
| DELETE | /api/classes/:id | Delete class | Admin |
| GET | /api/classes/:id/students | Get class students | Teacher |
| POST | /api/classes/:id/subjects | Add subject to class | Admin |

### Subjects
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/classes/subjects | List subjects | Required |
| POST | /api/classes/subjects | Create subject | Admin |
| PUT | /api/classes/subjects/:id | Update subject | Admin |
| DELETE | /api/classes/subjects/:id | Delete subject | Admin |

### Timetable
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/timetable | Get timetable | Required |
| POST | /api/timetable | Create timetable entry | Admin |
| PUT | /api/timetable/:id | Update timetable | Admin |
| DELETE | /api/timetable/:id | Delete timetable | Admin |
| GET | /api/timetable/teacher/:id | Teacher's timetable | Teacher |
| GET | /api/timetable/class/:id | Class timetable | Required |

### Attendance
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/attendance | Get attendance records | Required |
| POST | /api/attendance | Mark attendance | Teacher |
| PUT | /api/attendance/:id | Update attendance | Teacher |
| POST | /api/attendance/bulk | Bulk mark attendance | Teacher |
| POST | /api/attendance/:id/lock | Lock attendance | Admin |
| POST | /api/attendance/:id/unlock | Unlock attendance | Admin |
| GET | /api/attendance/student/:id | Student's attendance | Required |
| GET | /api/attendance/class/:id | Class attendance | Required |

### Grades
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/grades | Get grades | Required |
| POST | /api/grades | Enter grades | Teacher |
| PUT | /api/grades/:id | Update grade | Teacher |
| POST | /api/grades/:id/approve | Approve grade | Admin |
| POST | /api/grades/:id/lock | Lock grade | Admin |
| GET | /api/grades/student/:id | Student grades | Required |
| GET | /api/grades/report-card | Generate report card | Admin |

### Students
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/students | List students | Required |
| POST | /api/students | Enroll student | Admin |
| GET | /api/students/:id | Get student | Required |
| PUT | /api/students/:id | Update student | Admin |
| DELETE | /api/students/:id | Delete student | Admin |
| POST | /api/students/:id/link-parent | Link to parent | Admin |

### Parent Portal
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/parent-portal/children | Get linked children | Parent |
| GET | /api/parent-portal/grades/:studentId | Child's grades | Parent |
| GET | /api/parent-portal/attendance/:studentId | Child's attendance | Parent |
| GET | /api/parent-portal/fees/:studentId | Child's fees | Parent |
| GET | /api/parent-portal/timetable/:studentId | Child's timetable | Parent |

### Payments
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/payments | List payments | Required |
| POST | /api/payments | Initiate payment | Parent |
| GET | /api/payments/:id | Get payment details | Required |
| POST | /api/payments/callback | Payment gateway callback | Public |
| GET | /api/payments/student/:id | Student payments | Required |
| GET | /api/payments/receipt/:id | Download receipt | Required |

### Notifications
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/notifications | List notifications | Required |
| PUT | /api/notifications/:id/read | Mark as read | Required |
| POST | /api/notifications/send | Send notification | Admin |
| DELETE | /api/notifications/:id | Delete notification | Admin |

### Audit Logs
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/audit | List audit logs | Admin |
| GET | /api/audit/user/:id | User's actions | Admin |
| GET | /api/audit/entity | Entity changes | Admin |

### Reports
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/reports/attendance/daily | Daily attendance | Admin/Teacher |
| GET | /api/reports/attendance/summary | Attendance summary | Admin/Teacher |
| GET | /api/reports/attendance/trend | Attendance trends | Admin/Teacher |
| GET | /api/reports/grades/class | Class grades | Admin/Teacher |
| GET | /api/reports/grades/subject | Subject performance | Admin/Teacher |
| GET | /api/reports/grades/student | Student progress | Admin/Teacher |
| GET | /api/reports/fees/summary | Fee collection | Admin |
| GET | /api/reports/fees/payments | Payment history | Admin |
| GET | /api/reports/fees/outstanding | Outstanding fees | Admin |
| GET | /api/reports/teachers/workload | Teacher workload | Admin |
| GET | /api/reports/statistics | School statistics | Admin |
| GET | /api/reports/dashboard | Dashboard data | Admin |
| GET | /api/reports/export | Export to CSV | Admin/Teacher |

### System Administration
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | /api/system/settings | Get settings | Admin |
| PUT | /api/system/settings | Update settings | Admin |
| POST | /api/system/backup | Create backup | Admin |
| GET | /api/system/backup/history | Backup history | Admin |
| POST | /api/system/maintenance/enable | Enable maintenance | Admin |
| POST | /api/system/maintenance/disable | Disable maintenance | Admin |
| GET | /api/system/health | System health | Admin |
| GET | /api/system/stats | Database stats | Admin |
| GET | /api/system/logs | System logs | Admin |
| POST | /api/system/logs/clear | Clear old logs | Admin |

---

## Request/Response Formats

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "meta": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error"
}
```

### Pagination
```json
{
  "success": true,
  "data": [...],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

---

## Common Query Parameters
| Parameter | Description | Example |
|-----------|-------------|---------|
| page | Page number | ?page=1 |
| limit | Items per page | ?limit=20 |
| sort | Sort field | ?sort=created_at |
| order | Sort order | ?order=desc |
| search | Search term | ?search=john |
| filter | Filter by field | ?status=active |

---

## Status Codes
| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

*Document Version: 1.0*
*Last Updated: February 2026*

