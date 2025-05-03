# Todos App

A ServiceNow Fluent application for managing todo lists and tasks with category organization.

## Features

- Create and manage multiple todo lists
- Organize lists by categories (Work, Personal, Health/Fitness, etc.)
- Track tasks with different states (To do, In progress, Done, Canceled)
- Automatic list closure when all tasks are completed
- Task duration logging
- Client-side task summary display

## Architecture

The application is built using ServiceNow's Fluent API and consists of:

- **Schema**: Defines three main tables (List, Task, Category) with their relationships and fields
- **Security**: Role-based access control for users and administrators
- **Business Rules**: Handles task state changes and list updates
- **Client Scripts**: Displays task summaries and handles UI interactions
- **UI Components**: Custom list views and menu structure

## Development Setup

### Local Development with ServiceNow CLI

1. Install the ServiceNow CLI
   ```bash
   npm install -g @servicenow/cli
   ```

2. Clone the repository
   ```bash
   git clone <repository-url>
   cd todos-app
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Build the application
   ```bash
   npm run build
   ```

5. Deploy to your ServiceNow instance
   ```bash
   npm run install
   ```

### Development with ServiceNow IDE

1. Open ServiceNow IDE

2. Clone the repository
   - Click on View > Command Palette (or press Cmd/Ctrl + Shift + P)
   - Type "Git: Clone" and select it
   - Enter the repository URL
   - Select a local directory for the repository
   - If prompted, sign in to your Git provider

3. Build and Deploy
   - Right-click on the project in the Explorer view
   - Select "Build Application" to build
   - Select "Deploy Application" to deploy to your instance
   - Or use the Command Palette and search for "ServiceNow: Build Application" or "ServiceNow: Deploy Application"

## Documentation

For more information about ServiceNow development:
- [ServiceNow SDK Documentation](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/concept/servicenow-sdk-landing.html)
- [ServiceNow Fluent API Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/servicenow-fluent-api-reference.html)
- [ServiceNow IDE Guide](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-ide/concept/servicenow-ide-landing.html)