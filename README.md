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

1. Install the ServiceNow CLI and IDE
   ```bash
   npm install -g @servicenow/cli
   ```

2. Clone the repository in ServiceNow IDE
   - Open ServiceNow IDE
   - Go to File > Clone Git Repository
   - Enter repository URL
   - Select workspace location

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
   npm run deploy
   ```

## Documentation

For more information about ServiceNow Fluent development:
- [ServiceNow SDK Documentation](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/concept/servicenow-sdk-landing.html)
- [ServiceNow Fluent API Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/servicenow-fluent-api-reference.html)
- [ServiceNow IDE Guide](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-ide/concept/servicenow-ide-landing.html)

## License

UNLICENSED