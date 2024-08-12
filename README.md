# iNotebook Frontend

This is the frontend repository for the **iNotebook** application, a secure and cloud-based note-taking app. The backend of the application is available at [iNotebook Backend Repository](https://github.com/hiteshchinu/inotebook-backend).

## Features

- **User Authentication:** Users can sign up, log in, and log out securely.
- **Create, Edit, Delete Notes:** Users can create new notes, edit existing ones, and delete them.
- **Responsive Design:** The application is responsive and works well on both mobile and desktop devices.
- **Alert System:** Users are notified of successful actions or errors through alerts.
- **Secure:** Only authenticated users can access their notes.

## Tech Stack

- **React**: For building the user interface.
- **Bootstrap**: For styling the application.
- **React Router**: For navigation between pages.
- **Context API**: For managing global state (notes, user authentication).

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- Backend server for iNotebook running. You can find the backend repository [here](https://github.com/hiteshchinu/inotebook-backend).

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hiteshchinu/inotebook.git
   cd inotebook
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm start
   ```

   The app will start on `http://localhost:3000`.

## Usage

- **Sign Up/Login:** Users can create an account or log in if they already have one.
- **Create a Note:** Use the form on the home page to add a new note.
- **Edit a Note:** Click on the edit icon next to any note to modify it.
- **Delete a Note:** Click on the delete icon next to any note to remove it.
- **Logout:** Click on the logout button to end the session.

## Folder Structure

```bash
iNotebook/
├── public/
├── src/
│   ├── components/
│   │   ├── AddNote.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Noteitem.js
│   │   ├── Notes.js
│   │   ├── Signup.js
│   ├── context/
│   │   ├── notes/
│   │   │   ├── NoteState.js
│   │   │   ├── noteContext.js
│   ├── App.js
│   ├── index.js
│   ├── ...
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.
