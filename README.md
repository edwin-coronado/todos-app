# Todos Application

A simple task management application built with ServiceNow SDK for organizing and tracking tasks in a structured, hierarchical way.

## Application Overview

The Todos Application is built on the ServiceNow platform using the ServiceNow SDK, the Fluent language, and ServiceNow scoped application development.

### Key Features

- **Task Management**: Create, organize, and track tasks with state transitions
- **List Organization**: Group related tasks into lists
- **Category System**: Organize lists by categories
- **Automatic State Management**: Automatic handling of task and list states
- **Duration Tracking**: Track time spent on tasks from creation to completion
- **Enhanced UI**: Client-side enhancements for better usability

### Technology Stack

- **ServiceNow Platform**: Foundation for the application
- **ServiceNow SDK**: Provides declarative, type-safe development patterns
- **TypeScript**: Ensures type safety and modern development practices
- **Moment.js**: For date and time calculations

### Key Components

- **Data Model**: Three main tables (Tasks, Lists, Categories) with relationships
- **Business Rules**: Server-side automation for state management
- **Client Scripts**: Enhanced UI interactions
- **Security Model**: Role-based access control with record-level security
- **Automated Tests**: ATF tests for validating functionality

## Installation & Setup

### Prerequisites

#### Using the ServiceNow IDE
1. **ServiceNow Instance** - Access to a ServiceNow instance with admin role and with the [ServiceNow IDE application](https://store.servicenow.com/store/app/281a23e21b246a50a85b16db234bcbea) installed

#### Local development
1. **ServiceNow Instance** - Access to a ServiceNow instance with admin role
2. **Node.js** - Version v18.16.1 (npm v8.19.3)
3. **ServiceNow CLI** - Command-line interface for ServiceNow development

### Installation Steps

#### Using the ServiceNow IDE
- Clone this repository in the ServiceNow IDE by following the instructions listed [here](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-ide/task/clone-git-repository-servicenow-ide.html?state=seamless).

#### Local development

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd todos-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build and Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

### Configuration

The application's scope and other settings are configured in `now.config.json`:

```json
{
    "scope": {
        "id": "x_snc_todos",
        "name": "Todos",
        "display": "Todos"
    }
}
```

For detailed configuration options, see the [Development Guide](./docs/development.md).

## Usage Guide

Once deployed, you can access the Todos Application through the ServiceNow interface.

### Basic Usage

1. **Navigate to the Application**
   - Find "Todo's app" in the application navigator
   - Use the modules for Lists, Tasks, and Categories

2. **Create a Category** (optional)
   - Navigate to the Categories module
   - Click "New" to create a category
   - Enter a name for the category

3. **Create a List**
   - Navigate to the Lists module
   - Click "New" to create a list
   - Enter a name and description
   - Select a category (optional)

4. **Create Tasks**
   - Navigate to the Tasks module
   - Click "New" to create a task
   - Enter a title and description
   - Select the parent list
   - Set the initial state (defaults to "To do")

### Managing Tasks

Tasks follow a state-based lifecycle:

1. **To do**: Initial state for new tasks
2. **In progress**: Tasks currently being worked on
3. **Done**: Completed tasks
4. **Canceled**: Tasks that have been abandoned

When a task is marked as done or canceled:
- The task is automatically marked as inactive
- Its closure timestamp is recorded
- If all tasks in a list are now inactive, the list is also marked as inactive

When a task is reopened (moved from done/canceled to another state):
- The task is marked as active again
- Its parent list is also marked as active


## Documentation

### Application Documentation

- [Schema Documentation](./docs/schema.md) - Database tables, fields, and relationships
- [Features Documentation](./docs/features.md) - Detailed feature explanations
- [Architecture Documentation](./docs/architecture.md) - System architecture and components
- [Development Guide](./docs/development.md) - Setup, development workflow, and configuration
- [API Reference](./docs/api-reference.md) - ServiceNow SDK API usage, patterns, and troubleshooting

### ServiceNow SDK References

- [ServiceNow SDK Documentation](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/concept/servicenow-sdk.html)
- [ServiceNow SDK CLI Documentation](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/servicenow-sdk-cli-commands.html)
- [ServiceNow Fluent API Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/servicenow-fluent-api-reference.html)
- [Table API Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/table-api-now-ts.html)
- [Business Rule API Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/business-rule-api-now-ts.html)
- [Client Script API Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/client-script-api-now-ts.html)
- [ACL API Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/acl-api-now-ts.html)

## Development

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| build | `npm run build` | Builds the application |
| deploy | `npm run deploy` | Deploys to ServiceNow instance |
| transform | `npm run transform` | Transforms source files |
| types | `npm run types` | Generates type definitions |

### Development Workflow

1. Make changes to source files
2. Run `npm run build` to build the application
3. Run `npm run deploy` to deploy to your ServiceNow instance
4. Test the changes in the ServiceNow UI
5. Repeat as needed

### Testing Approach

The application uses ServiceNow's Automated Test Framework (ATF) for testing:

1. Tests are defined in `src/fluent/atf-tests/`
2. Each test verifies specific functionality
3. Tests run within the ServiceNow instance
4. Tests include setup, actions, verification, and cleanup

For a complete guide to development and testing, see the [Development Guide](./docs/development.md).