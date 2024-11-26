### Backend-for-Frontend (BFF) Architecture

<p align="center">
    <img src="https://github.com/jsdeveloperr/backend-for-frontend-architecture/blob/main/frontend/web/src/assets/backend-for-frontend.jpg" width="500" alt="Backend-for-Frontend (BFF) Architecture" />
</p>

---

## 📚 **Project Overview**

**`backend-for-frontend`** is a architecture project structured to implement the **Backend-for-Frontend (BFF)** pattern. This architecture is designed to support separate backends for different frontend clients (web, mobile, etc.), ensuring tailored responses and performance optimization.

This monorepo manages:
- **Web frontend** (`frontend/web`)
- **Mobile frontend** (`frontend/mobileApp`)
- **Web BFF** (`backend/web-bff`)
- **Mobile BFF** (`backend/mobile-bff`)
- **Shared services** (`backend/shared`)

The project leverages `Makefile` for build and dependency management and utilizes `yarn` workspaces for dependency handling.

---

## 🚀 **Features**

- **BFF Architecture**: Separate backend layers for Web and Mobile clients.
- **Frontend Clients**: React.js for web and React Native for mobile.
- **Shared Services**: Common utilities shared between BFFs.
- **Isolated Dependency Management**: Each project manages its own dependencies via `yarn` and `Makefile`.
- **Concurrent Development**: Ability to run multiple services simultaneously using `concurrently`.
- **Makefile Automation**: Simplified commands for managing all services.

---

## 🗂 **Project Structure**

```plaintext
📦 backend  
 ┣ 📂 _data  
 ┃ ┗ 📜 db.json        # JSON file for mock data  
 ┣ 📂 mobile-bff       # BFF tailored for the mobile client  
 ┣ 📂 web-bff          # BFF tailored for the web client  
 ┣ 📂 shared           # Shared backend code (e.g., validation, error handling)  
 ┗ 📜 package.json     # Backend dependencies  

📦 frontend  
 ┣ 📂 mobileApp        # React Native application  
 ┃ ┣ 📂 app  
 ┃ ┃ ┣ 📂 Components   # UI components (following atomic design principles)  
 ┃ ┃ ┣ 📂 Screens      # Login, RecipeList, RecipeDetail  
 ┃ ┃ ┣ 📂 Context      # Global states (e.g., AuthContext)  
 ┃ ┃ ┗ 📂 Navigation   # React Navigation setup  
 ┣ 📂 web              # React (web) application  
 ┃ ┣ 📂 Components     # Atomic components  
 ┃ ┣ 📂 Pages          # Login, RecipeList, RecipeDetail  
 ┃ ┣ 📂 Context        # Web global states  
 ┃ ┗ 📜 index.tsx      # Entry point for the React application  
 ┗ 📜 package.json     # Frontend dependencies  

📦 node_modules         # Project dependencies  
📜 Makefile             # Automation scripts  
📜 package.json         # Root dependencies  
📜 README.md            # Project documentation  
📜 yarn.lock            # Dependency version locking
```

---

## ⚙️ **Setup Instructions**

### 1. Prerequisites
Make sure the following are installed:
- **Node.js** (>= 18.x)
- **Yarn** (1.22.x)
- **Make** (for running commands)

---

### 2. Install Dependencies

Project Clone:
```bash
git clone https://github.com/jsdeveloperr/backend-for-frontend-architecture.git
cd backend-for-frontend-architecture
   ```
Run the following command to install dependencies for all projects:
```bash
yarn install:all
```
This executes:
```bash
make install
```
which installs dependencies for each subproject (web, mobile, shared, etc.).

---

### 3. Clean Project

To clean all `node_modules` and reset the project:
```bash
yarn clean:all
```
This runs:
```bash
make clean
```

To clean the yarn cache:
```bash
yarn cache:clean
```

---

## 🛠 **Development**

### Start All Services

#### 1. Backend Services
```bash
yarn start:backend
```
This runs:
```bash
make start-backends
```
It starts:
- `shared`
- `web-bff`
- `mobile-bff`

#### 2. Frontend Services
```bash
yarn start:frontend
```
This runs:
```bash
make start-frontends
```
It starts:
- `web`
- `mobile`

##### Special Notes for Android
React Native Debugging with Android

When running the mobile application on an Android device or emulator, API requests might fail due to localhost connectivity issues. To resolve this, you need to set up adb reverse commands.

Run the following commands:

```bash
adb reverse tcp:5000 tcp:5000  # Map Shared BFF API
adb reverse tcp:3001 tcp:3001  # Map Mobile BFF API
```

#### Start Specific Services

| Service            | Command                 |
|--------------------|-------------------------|
| Web Frontend       | `yarn start:web`       |
| Mobile Frontend    | `yarn start:mobile`    |
| Web BFF Backend    | `yarn start:wbff`      |
| Mobile BFF Backend | `yarn start:mbff`      |
| Shared Services    | `yarn start:shared`    |

---

## 🧹 **Cleaning**

| Command         | Description                                  |
|-----------------|----------------------------------------------|
| `yarn clean:all`| Cleans all `node_modules` and resets project |
| `yarn cache:clean` | Cleans the yarn cache                     |

---

## 📖 **Makefile Commands**

For advanced users, all functionality is centralized in the `Makefile`. Below are the available commands:

| Command                  | Description                                  |
|--------------------------|----------------------------------------------|
| `make install`           | Installs dependencies for all projects      |
| `make clean`             | Cleans all `node_modules` directories       |
| `make cache-clean`       | Cleans yarn cache                           |
| `make start-web`         | Starts the web frontend                     |
| `make start-mobile`      | Starts the mobile frontend                  |
| `make start-shared`      | Starts the shared services                  |
| `make start-backend-web-bff` | Starts the Web BFF backend               |
| `make start-backend-mobile-bff` | Starts the Mobile BFF backend         |
| `make start-backends`    | Starts all backend services                 |
| `make start-frontends`   | Starts all frontend services                |

---

## 🛡 **Troubleshooting**

### Common Issues

1. **`concurrently not found`**
   - Run `yarn add concurrently -D` in the root directory.

2. **Missing `node_modules`**
   - Ensure `yarn install:all` was executed.

3. **React Native Build Errors**
   - Ensure the correct setup for React Native by running:
     ```bash
     npx react-native doctor
     ```

4. **Port Conflicts**
   - Make sure no other process is using the default ports (e.g., 3000, 5000).

---

## 💡 **Future Improvements**

- Add **Docker** support for easier environment setup.
- Implement CI/CD pipelines.
- Enable remote caching for builds with TurboRepo.

---

## ✨ **Contributing**

We welcome contributions! Feel free to submit issues or pull requests to improve this project.

---

## 📄 **License**

This project is licensed under the MIT License.