const express = require("express");
const cors = require("cors");
const userRoutes = require("./modules/users/user.routes");
const academicYearRoutes = require("./modules/academic-years/academic-year.routes");
const classRoutes = require("./modules/classes/class.routes");
const timetableRoutes = require("./modules/timetable/timetable.routes");
const attendanceRoutes = require("./modules/attendance/attendance.routes");
const gradesRoutes = require("./modules/grades/grades.routes");
const studentsRoutes = require("./modules/students/students.routes");
const parentPortalRoutes = require("./modules/parent-portal/parent-portal.routes");
const paymentsRoutes = require("./modules/payments/payments.routes");
const notificationsRoutes = require("./modules/notifications/notifications.routes");
const auditRoutes = require("./modules/audit/audit.routes");
const reportsRoutes = require("./modules/reports/reports.routes");
const systemAdminRoutes = require("./modules/system-admin/system-admin.routes");
const { errorMiddleware, notFoundHandler } = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });
}

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.use("/api/auth", userRoutes);
app.use("/api/academic", academicYearRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/grades", gradesRoutes);
app.use("/api/students", studentsRoutes);
app.use("/api/parent-portal", parentPortalRoutes);
app.use("/api/payments", paymentsRoutes);
app.use("/api/notifications", notificationsRoutes);
app.use("/api/audit", auditRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/system", systemAdminRoutes);

app.use(notFoundHandler);
app.use(errorMiddleware);

module.exports = app;

