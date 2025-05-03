# Development Guide

This document provides comprehensive instructions for setting up a development environment, using available scripts, implementing tests, and configuring the Todos Application.

## Development Environment Setup

### Prerequisites

Before starting development, ensure you have:

1. **Node.js** - Version 14 or later recommended
2. **npm** - Usually comes with Node.js
3. **ServiceNow Instance** - Access to a ServiceNow instance with appropriate permissions
4. **ServiceNow CLI** - Command-line interface for ServiceNow development
5. **IDE** - Visual Studio Code recommended for TypeScript and ServiceNow SDK support

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd todos-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure ServiceNow Connection**
   
   Create or update the `.now/credentials.json` file with your ServiceNow instance details:
   ```json
   {
     "instance": {
       "host": "your-instance.service-now.com",
       "username": "your-username",
       "password": "your-password"
     }
   }
   ```

4. **Initialize ServiceNow SDK** (if starting from scratch)
   ```bash
   npx now-sdk init
   ```

### ServiceNow SDK Setup

The ServiceNow SDK provides tools and APIs for developing applications on the ServiceNow platform:

1. **Install ServiceNow SDK Globally** (optional)
   ```bash
   npm install -g @servicenow/sdk
   ```

2. **Configure SDK**
   - Edit `now.config.json` to set your application's scope and other configurations
   - Configure environment-specific settings in `.now/env/dev.json` or equivalent

3. **TypeScript Configuration**
   - The project uses TypeScript for type safety
   - TypeScript configuration is in `tsconfig.json`
   - SDK type definitions are included in the project dependencies

## Available Scripts

The package.json file defines several npm scripts for development, building, and deployment:

### Build Scripts

```bash
# Build the application
npm run build
```

This script runs the `now-sdk build` command, which:
- Compiles TypeScript
- Transforms source files to ServiceNow format
- Prepares deployment artifacts

### Deployment Scripts

```bash
# Deploy to ServiceNow instance
npm run deploy
```

This script runs the `now-sdk install` command, which:
- Authenticates with the ServiceNow instance
- Uploads built files
- Installs/updates the application in ServiceNow

### Transformation Scripts

```bash
# Transform source files
npm run transform
```

This script runs the `now-sdk transform` command, which converts source files to the format required by ServiceNow.

### Type Definition Scripts

```bash
# Generate type definitions
npm run types
```

This script runs the `now-sdk dependencies` command, which generates TypeScript type definitions for dependencies.

### Development Workflow

A typical development workflow:

1. Make changes to source files
2. Run `npm run build` to build the application
3. Run `npm run deploy` to deploy to your ServiceNow instance
4. Test the changes in the ServiceNow UI
5. Repeat as needed

## Testing Strategy

The Todos Application uses ServiceNow's Automated Test Framework (ATF) for testing.

### ATF Tests

ATF tests validate application functionality by simulating user interactions and verifying results.

The application includes tests in the `src/fluent/atf-tests/` directory, such as:
- `test-handle-task-update.now.ts` - Tests task state transitions and list activation/deactivation

### Creating Tests

To create a new ATF test:

1. Create a new file in `src/fluent/atf-tests/` following the naming convention `test-<feature>.now.ts`
2. Use the Test and TestStep APIs from the ServiceNow SDK
3. Define test steps for setup, execution, verification, and cleanup
4. Deploy the application to make the test available in ServiceNow

Example test structure:

```typescript
Test({
    $id: Now.ID['test_id'],
    name: 'Test name',
    description: "Test description",
}, atf => {
    // Test steps go here
    // Example: Create test data, perform actions, verify results, clean up
})
```

### Running Tests

Tests run within the ServiceNow instance:

1. Navigate to **Automated Test Framework** > **Tests**
2. Find the tests for the Todos Application
3. Run individual tests or test suites
4. View test results and debug any failures

### Testing Best Practices

- Create isolated tests that don't rely on existing data
- Include cleanup steps to remove test data
- Test both positive and negative scenarios
- Verify all side effects (e.g., if a task is marked done, verify that its active flag is false)
- Keep tests focused on specific functionality
- Include clear descriptions of what each test is verifying

## Configuration

### ESLint Configuration

The project uses ESLint for code quality enforcement:

**Configuration File**: `.eslintrc`

```json
{
    "extends": ["@servicenow/eslint-plugin-sdk-app-plugin"],
    "rules": {
        // Custom rules would go here
    }
}
```

This extends the ServiceNow SDK ESLint plugin, which provides rules specific to ServiceNow development.

To run ESLint:

```bash
npx eslint .
```

### TypeScript Configuration

**Configuration File**: `tsconfig.json`

```json
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "esModuleInterop": true,
        "resolveJsonModule": true,
        "strict": true
    },
    "ts-node": {
        "esm": true
    }
}
```

Key TypeScript features:
- ES2022 target for modern JavaScript features
- Strict type checking enabled
- ESModule interoperability

### ServiceNow Instance Configuration

**Configuration File**: `now.config.json`

```json
{
    "scope": {
        "id": "x_snc_todos",
        "name": "Todos",
        "display": "Todos"
    }
}
```

This specifies the application's scope in ServiceNow, which isolates its components from other applications.

**Instance Credentials**: `.now/credentials.json` (not committed to version control)

```json
{
  "instance": {
    "host": "your-instance.service-now.com",
    "username": "your-username",
    "password": "your-password"
  }
}
```

### Development Environment Variables

**Configuration Files**: `.now/env/*.json`

These files contain environment-specific variables and settings that can be accessed in your code.

## ServiceNow SDK References

For more information on development with ServiceNow SDK:

- [ServiceNow SDK Documentation](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/concept/servicenow-sdk.html)
- [ServiceNow CLI Reference](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/now-sdk-cli-reference.html)
- [Automated Test Framework Documentation](https://docs.servicenow.com/bundle/vancouver-build-and-automate/page/administer/auto-test-framework/concept/automated-test-framework.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/)

## Related Documentation

- [Architecture Documentation](./architecture.md) - Details on the application architecture
- [Schema Documentation](./schema.md) - Information about the data model
- [Features Documentation](./features.md) - Documentation of application features

