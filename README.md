# 📖 React-Mini-Blog  

React-Mini-Blog is a **mini blogging platform** built with **React.js**, **Tailwind CSS**, and **Appwrite** as the backend.  
It allows users to **create, edit, delete, and view posts**, with authentication and file upload support.  
A rich text editor (**TinyMCE**) is integrated for better blog writing experience.  

---

## 🚀 Features  

- ✅ **User Authentication (Signup / Login / Logout)** using Appwrite  
- ✅ **Create, Edit, Delete, and View Blog Posts**  
- ✅ **Upload and Manage Images** using Appwrite Storage  
- ✅ **Rich Text Editing** with TinyMCE  
- ✅ **State Management** using Redux Toolkit (Auth Slice)  
- ✅ **Responsive UI** with Tailwind CSS  

---

## 🛠️ Tech Stack  

| Frontend | Backend  | State Management | Editor   |
|----------|----------|------------------|----------|
| React.js | Appwrite | Redux Toolkit    | TinyMCE  |

---

## 📂 Folder Structure  
```text
React-Mini-Blog/
│── components/ # Reusable UI components
│── pages/ # Application pages (Home, Login, Signup, Post etc.)
│── conf/ # Appwrite configuration (conf.js)
│── appwrite/ # Appwrite services (auth, post, file functions)
│ ├── config/ # Post & File handling functions
│── store/ # Redux store (authSlice for login/logout)
│── .env.sample # Environment variables sample
│── package.json
│── README.md

```


yaml
Copy
Edit

---

## 🔧 Appwrite Configuration (`conf/conf.js`)  

const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
};

export default conf;

## ⚙️ Environment Variables
Create a .env file in the project root and add:

ini
Copy
Edit
VITE_APPWRITE_URL=your_appwrite_url
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
Refer to .env.sample for the exact structure.

## 📦 Installation
bash
Copy
Edit
# Clone the repository
git clone https://github.com/your-username/React-Mini-Blog.git

# Go to project folder
cd React-Mini-Blog

# Install dependencies
npm install

# Add .env file based on .env.sample

# Run the project
npm run dev
🔐 Authentication & Data Flow
AuthSlice (Redux) → Handles user login/logout state

Appwrite Services → Manage authentication & database actions

Config Functions → Handle post CRUD & file upload/delete

## 📝 Features in Detail
🔹 Authentication: Signup, Login, Logout using Appwrite Auth

🔹 Post Management: Create, Edit, Delete, Fetch Posts

🔹 File Storage: Upload, Preview, Delete Files

🔹 Editor: Rich text content using TinyMCE

🔹 State Management: Redux Toolkit

## 🎨 UI & Styling
Built with Tailwind CSS for a responsive and modern UI.

🚀 Future Improvements
🔹 Add categories/tags for posts

🔹 Like & Comment system

🔹 User profile pages

## 🤝 Contributing
Feel free to fork this repo and contribute via pull requests.