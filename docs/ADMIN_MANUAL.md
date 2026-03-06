# School Management System - Administrator Manual

## Table of Contents
1. [Getting Started](#getting-started)
2. [User Management](#user-management)
3. [Academic Management](#academic-management)
4. [Class Management](#class-management)
5. [Attendance Management](#attendance-management)
6. [Grade Management](#grade-management)
7. [Fee & Payments](#fee--payments)
8. [Reports & Analytics](#reports--analytics)
9. [System Administration](#system-administration)
10. [Troubleshooting](#troubleshooting)

---

## 1. Getting Started

### 1.1 Login
1. Navigate to the school management system URL
2. Enter your admin credentials
3. Click "Login"

### 1.2 Dashboard Overview
The admin dashboard provides:
- Total students, teachers, parents count
- Today's attendance summary
- Recent payments
- Pending fees alerts
- Quick action buttons

---

## 2. User Management

### 2.1 Creating Users
1. Navigate to **Users** → **Add User**
2. Fill in required fields:
   - First Name, Last Name
   - Email (unique)
   - Role (Admin/Teacher/Parent)
   - Phone number
3. Set temporary password
4. Click "Create User"

### 2.2 Managing Roles
- **Admin**: Full system access
- **Teacher**: Class management, attendance, grades
- **Parent**: View child's progress, make payments

### 2.3 Parent-Student Linking
1. Go to **Users** → **Parent Links**
2. Select parent account
3. Search and select student(s)
4. Set relationship (Father/Mother/Guardian)
5. Mark as primary contact if needed

---

## 3. Academic Management

### 3.1 Creating Academic Year
1. Navigate to **Academic** → **Years**
2. Click "New Academic Year"
3. Enter:
   - Year name (e.g., "2025-2026")
   - Start date
   - End date
4. Click "Create"

### 3.2 Managing Terms
1. Go to **Academic** → **Terms**
2. Select academic year
3. Add terms with:
   - Term name
   - Start/End dates
   - Term number (1, 2, 3)

### 3.3 Setting Current Year
1. Go to **Academic** → **Years**
2. Click "Set Current" on the desired year
3. Confirm the action

---

## 4. Class Management

### 4.1 Creating Classes
1. Navigate to **Classes** → **Add Class**
2. Enter:
   - Class name (e.g., "Grade 1A")
   - Level (Grade 1-8)
   - Section (A, B, etc.)
   - Capacity
3. Assign class teacher
4. Click "Create"

### 4.2 Managing Subjects
1. Go to **Classes** → **Subjects**
2. Add new subject:
   - Subject name
   - Subject code
   - Description
3. Assign teachers to subjects

### 4.3 Class-Subject Mapping
1. Select class
2. Add subjects
3. Assign teacher for each subject
4. Save mappings

---

## 5. Attendance Management

### 5.1 Taking Daily Attendance
1. Go to **Attendance** → **Mark Attendance**
2. Select class and date
3. Mark status for each student:
   - Present (P)
   - Absent (A)
   - Late (L)
   - Excused (E)
4. Click "Save"

### 5.2 Locking Attendance
1. After marking, click "Lock Attendance"
2. Locked attendance cannot be edited
3. Only admin can unlock (if needed)

### 5.3 Attendance Reports
1. Go to **Reports** → **Attendance**
2. Select:
   - Date range
   - Class
   - Academic year
3. View/Export reports

---

## 6. Grade Management

### 6.1 Grade Components
1. Go to **Grades** → **Components**
2. Add components:
   - Homework (20%)
   - Class Work (20%)
   - Mid-term (20%)
   - Final Exam (40%)

### 6.2 Entering Grades
1. Navigate to **Grades** → **Enter Grades**
2. Select:
   - Class
   - Subject
   - Term
3. Enter scores for each student
4. Submit for approval

### 6.3 Grade Approval Workflow
1. Teacher submits grades
2. Admin reviews grades
3. Admin can:
   - Approve grades (publishes to parent portal)
   - Request changes
   - Lock grades

### 6.4 Generating Report Cards
1. Go to **Grades** → **Report Cards**
2. Select class and term
3. Click "Generate Report Cards"
4. Review and finalize

---

## 7. Fee & Payments

### 7.1 Fee Structure
1. Navigate to **Fees** → **Fee Structure**
2. Create fee items:
   - Tuition fee
   - Transport fee
   - Uniform
   - Books
3. Set amounts and due dates

### 7.2 Fee Assignment
1. Select class
2. Assign fee structure
3. System generates student fees automatically

### 7.3 Payment Processing
1. Go to **Payments** → **Process Payment**
2. Select student
3. Enter amount
4. Select payment method (Cash/M-Pesa/Bank Transfer)
5. Generate receipt

### 7.4 Payment Reports
1. Go to **Reports** → **Fees**
2. View:
   - Collection summary
   - Outstanding fees
   - Payment history

---

## 8. Reports & Analytics

### 8.1 Attendance Reports
- Daily attendance
- Class-wise summaries
- Trend analysis

### 8.2 Grade Reports
- Subject performance
- Class-wise grades
- Student progress

### 8.3 Fee Reports
- Collection summary
- Outstanding balances
- Payment history

### 8.4 Teacher Workload
- Classes per teacher
- Subjects assigned
- Periods scheduled

### 8.5 Exporting Reports
1. Generate report
2. Click "Export"
3. Choose format (CSV/PDF)
4. Download

---

## 9. System Administration

### 9.1 Backup Management
1. Go to **System** → **Backups**
2. Click "Create Backup"
3. View backup history

### 9.2 Maintenance Mode
1. Go to **System** → **Maintenance**
2. Enable maintenance mode
3. Add reason message
4. System will show maintenance page

### 9.3 System Health
1. Go to **System** → **Health**
2. View:
   - Database status
   - Active users
   - Last backup time

### 9.4 Audit Logs
1. Go to **System** → **Audit Logs**
2. View all system activities
3. Filter by:
   - User
   - Action type
   - Date range

---

## 10. Troubleshooting

### Common Issues

#### Cannot Login
- Check credentials
- Clear browser cache
- Reset password

#### Payment Not Processing
- Verify payment gateway configuration
- Check internet connection
- Contact support

#### Grade Not Saving
- Check all required fields
- Verify teacher permissions
- Clear form and retry

#### Report Not Generating
- Ensure data exists for selected filters
- Check date range
- Try different filters

---

## Support
For technical support:
- Email: support@school.edu
- Phone: +254-XXX-XXXX
- Hours: Mon-Fri, 8am-5pm

---

*Document Version: 1.0*
*Last Updated: February 2026*

