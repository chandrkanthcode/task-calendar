# task-calendar

A **full-stack task management application** rebuilt with **React + Vite** for the frontend and **Node.js + Express + MongoDB** for the backend. It integrates **to-do lists** with **calendar scheduling**, enabling efficient planning, tracking, and managing of tasks in one unified interface.

---

## ✨ Features

- ✅ **Task CRUD** (create, edit, delete, mark complete).
- 📅 **Interactive drag-and-drop calendar** (react-big-calendar).
- 🧩 **Subtasks & dependencies** (block Task B until Task A finishes).
- 🔄 **Recurring tasks** (daily, weekly, monthly).
- 🔔 **Reminders & notifications** (push + email).
- 🔐 **User authentication** (Auth0 / Firebase).
- 📊 **Analytics dashboard** (Recharts).
- 🌙 **Dark mode & responsive UI** (Tailwind + shadcn/ui).
- 📡 **Google Calendar integration**.
- 📶 **Offline mode with caching**.

---

## 🛠️ Tech Stack

**Frontend**

- React + Vite
- TypeScript
- TailwindCSS + shadcn/ui
- React Hook Form + Zod (forms & validation)
- React Big Calendar + date-fns-tz
- TanStack Query (API fetching/caching)

**Backend**

- Node.js
- Express.js
- Mongoose

**Database**

- MongoDB (Atlas or local)

**Other Tools**

- Auth0 / Firebase Auth
- EmailJS / Web Push API
- Postman (API testing)
- Git + GitHub
- Vercel / Render (deployment)

---

## 📂 Project Structure

```
task-calendar/
│── frontend/               # React + Vite app
│   ├── src/
│   │   ├── components/     # UI components (Header, Sidebar, etc.)
│   │   ├── pages/          # Routes (Calendar, Tasks, Dashboard, Settings)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utils (auth, api client, query setup)
│   │   └── App.tsx         # Root app
│   └── index.html
│
│── backend/                # Node.js + Express API
│   ├── routes/             # API routes
│   ├── models/             # Mongoose schemas
│   ├── controllers/        # Logic
│   └── server.js           # Entry point
│
│── README.md               # Documentation
│── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/task-calendar.git
cd task-calendar
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env`:

```env
PORT=5002
MONGO_URI=your_mongodb_connection_string
AUTH0_DOMAIN=your_auth0_domain
AUTH0_CLIENT_ID=your_auth0_client_id
AUTH0_CLIENT_SECRET=your_auth0_secret
EMAILJS_USER_ID=your_emailjs_user
```

Run backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend → `http://localhost:5173/`
Backend API → `http://localhost:5002/api`

---

## ✅ Testing

- Unit tests → **Vitest + React Testing Library**
- E2E tests → **Playwright**
- Backend tests → **Jest**
- Mock API → **MSW**

---

## 🚀 Roadmap

- [x] App shell with routes (Header/Sidebar).
- [x] Auth + protected routes.
- [x] Task CRUD + Calendar view.
- [ ] Subtasks + dependencies.
- [ ] Reminders + push notifications.
- [ ] Analytics dashboard.
- [ ] Performance tuning (lazy-loading, Lighthouse ≥90).
- [ ] Deployment on Vercel + MongoDB Atlas.

---

## 📜 License

Developed as part of **CO7201 Individual Project (Rebuild)** – MSc Advanced Computer Science, University of Leicester.
