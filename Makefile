# Global Variables
FRONTEND_WEB=frontend/web
FRONTEND_MOBILE=frontend/mobileApp
BACKEND_WEB_BFF=backend/web-bff
BACKEND_MOBILE_BFF=backend/mobile-bff
BACKEND_SHARED=backend/shared

# Install dependencies for all projects
install:
	@echo "Installing dependencies for all projects..."
	cd $(FRONTEND_WEB) && yarn install
	cd $(FRONTEND_MOBILE) && yarn install
	cd $(BACKEND_WEB_BFF) && yarn install
	cd $(BACKEND_MOBILE_BFF) && yarn install
	cd $(BACKEND_SHARED) && yarn install

# Clean all node_modules
clean:
	@echo "Cleaning all node_modules..."
	rm -rf $(FRONTEND_WEB)/node_modules
	rm -rf $(FRONTEND_MOBILE)/node_modules
	rm -rf $(BACKEND_WEB_BFF)/node_modules
	rm -rf $(BACKEND_MOBILE_BFF)/node_modules
	rm -rf $(BACKEND_SHARED)/node_modules

# Clean Yarn cache
cache-clean:
	@echo "Cleaning Yarn cache globally..."
	yarn cache clean

# Start specific projects
start-web:
	@echo "Starting frontend web project..."
	cd $(FRONTEND_WEB) && yarn dev

start-mobile:
	@echo "Starting frontend mobile project..."
	cd $(FRONTEND_MOBILE) && yarn start

start-backend-web-bff:
	@echo "Starting backend web-bff project..."
	cd $(BACKEND_WEB_BFF) && yarn dev

start-backend-mobile-bff:
	@echo "Starting backend mobile-bff project..."
	cd $(BACKEND_MOBILE_BFF) && yarn dev

start-shared:
	@echo "Starting backend shared project..."
	cd $(BACKEND_SHARED) && yarn dev

# Combined starts using concurrently
start-backends:
	@echo "Starting shared and backend BFF projects concurrently..."
	yarn concurrently "make start-shared" "make start-backend-web-bff" "make start-backend-mobile-bff"

start-frontends:
	@echo "Starting frontend projects concurrently..."
	yarn concurrently "make start-web" "make start-mobile"

# Help command
help:
	@echo "Available commands:"
	@echo "  install                Install dependencies for all projects"
	@echo "  clean                  Clean all node_modules"
	@echo "  cache-clean            Clean Yarn cache globally"
	@echo "  start-web              Start the frontend web project"
	@echo "  start-mobile           Start the frontend mobile project"
	@echo "  start-backend-web-bff  Start the backend web-bff project"
	@echo "  start-backend-mobile-bff Start the backend mobile-bff project"
	@echo "  start-shared           Start the backend shared project"
	@echo "  start-backends         Start all backend services concurrently"
	@echo "  start-frontends        Start all frontend services concurrently"
