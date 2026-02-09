# Playwright Testing Framework

A comprehensive Playwright testing framework for automated browser testing with BrowserStack integration and visual regression testing using Percy.

## Overview

This repository contains automated test suites that run on scheduled intervals to ensure continuous quality assurance. All tests run on BrowserStack infrastructure and include visual regression testing capabilities.

## Scheduled Jobs

All jobs run daily on automated schedules and can also be triggered manually via GitHub Actions workflow dispatch.

### Job Schedule

| Job Name | Schedule (UTC) | Schedule (America/New_York) | Description |
|----------|----------------|----------------------------|-------------|
| **BS Marketing Params tests** | `0 0 * * *` (12:00 AM UTC) | 8:00 PM ET (Standard Time) | Tests marketing parameter functionality |
| **BS Analytics Events tests** | `0 1 * * *` (1:00 AM UTC) | 9:00 PM ET (Standard Time) | Tests analytics event tracking |
| **BS Visual DESKTOP tests** | `0 2 * * *` (2:00 AM UTC) | 10:00 PM ET (Standard Time) | Visual regression tests for desktop viewports |
| **BS Visual MOBILE tests** | `0 3 * * *` (3:00 AM UTC) | 11:00 PM ET (Standard Time) | Visual regression tests for mobile viewports |
| **BS Login/Registration Functionality tests** | `0 4 * * *` (4:00 AM UTC) | 12:00 AM ET (Standard Time) | Tests user authentication flows |
| **BS Navigation Functionality tests** | `0 5 * * *` (5:00 AM UTC) | 1:00 AM ET (Standard Time) | Tests navigation functionality (header, footer) |

### Schedule Summary

All jobs run once per day (`* * *` = every day, every month, every day of week):
- Jobs are staggered by 1 hour intervals starting at midnight UTC
- Complete test cycle runs from 12:00 AM to 5:00 AM UTC
- In America/New_York timezone, tests run from 8:00 PM to 1:00 AM ET

> **Note:** The actual time may vary by 1 hour during Daylight Saving Time transitions between Standard Time and Daylight Time.

## Manual Execution

All workflows can be triggered manually:
1. Go to the [Actions tab](../../actions) in GitHub
2. Select the desired workflow from the left sidebar
3. Click "Run workflow" button
4. Select the branch and click "Run workflow"

## Test Suites

### Marketing Parameters
- **File:** `marketing-params.spec.ts`
- **Purpose:** Validates marketing parameter tracking and functionality

### Analytics Events
- **File:** `analytics-events.spec.ts`
- **Purpose:** Ensures proper analytics event firing and tracking

### Login/Registration Functionality
- **File:** `login-registration-functionality.spec.ts`
- **Purpose:** Tests user authentication, login, and registration flows

### Navigation Functionality
- **File:** Multiple navigation test files
  - `tests/footer.spec.ts`
  - `tests/header-individuals.spec.ts`
  - `tests/header-plan-sponsors.spec.ts`
  - `tests/header-financial-professionals.spec.ts`
- **Purpose:** Validates navigation elements across different user types

### Visual Regression Tests
- **File:** `visual.spec.ts`
- **Configurations:** 
  - Desktop: `bs-visual-DESKTOP.yml`
  - Mobile: `bs-visual-MOBILE.yml`
- **Purpose:** Captures and compares screenshots to detect visual regressions using Percy

## Configuration

### Environment Variables
Required secrets in GitHub Actions:
- `AUTH_USER` - Authentication username
- `AUTH_PASS` - Authentication password
- `BASE_URL` - Base URL for testing
- `BROWSERSTACK_USERNAME` - BrowserStack account username
- `BROWSERSTACK_ACCESS_KEY` - BrowserStack access key
- `PERCY_TOKEN` - Percy.io token for visual testing

### BrowserStack Configuration
Each test suite has its own BrowserStack configuration file:
- `bs-analytic-events.yml`
- `bs-marketing-params.yml`
- `bs-navigation-functionality.yml`
- `bs-visual-DESKTOP.yml`
- `bs-visual-MOBILE.yml`
- `login-registration-functionality.spec.yml`

## Technologies

- **Playwright** - Modern web testing framework
- **BrowserStack** - Cloud-based cross-browser testing platform
- **Percy** - Visual testing and review platform
- **TypeScript** - Type-safe test development
- **Node.js** - Runtime environment

## Development

### Install Dependencies
```bash
npm ci
```

### Environment Setup
Create a `.env` file with required variables:
```
AUTH_USER=your_username
AUTH_PASS=your_password
BASE_URL=https://your-test-url.com
```

### Running Tests Locally
```bash
# Run specific test
npx playwright test [test-file-name]

# Run with BrowserStack
npx browserstack-node-sdk playwright test [test-file-name]

# Run visual tests with Percy
npx percy exec -- npx browserstack-node-sdk playwright test visual.spec.ts
```

## Artifacts

When tests fail, the following artifacts are automatically uploaded:
- `test-results/` - Detailed test execution results
- `playwright-report/` - HTML test report

Access these from the GitHub Actions run summary page.
