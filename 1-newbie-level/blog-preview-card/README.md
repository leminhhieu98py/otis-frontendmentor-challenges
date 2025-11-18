# Blog Preview Card (Frontend Mentor Challenge)

Solution for the [Frontend Mentor Blog Preview Card challenge](https://www.frontendmentor.io/challenges/blog-preview-card-nwyNvwNrm).

## Table of Contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Features & Tech Stack](#features--tech-stack)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Troubleshooting](#troubleshooting)
- [Author](#author)

## Overview

### Screenshot

![](./assets/images/screenshot.png)

### Links

- [Solution URL](https://github.com/leminhhieu98py/otis-frontendmentor-challenges/tree/main/1-newbie-level/blog-preview-card)
- [Live Site URL](https://leminhhieu98py.github.io/otis-frontendmentor-challenges/1-newbie-level/blog-preview-card/)

## Features & Tech Stack

- Semantic HTML5 markup
- CSS custom properties & Flexbox
- Scalable CSS architecture
- Apply `Variable fonts`
- [Webpack](https://webpack.js.org/guides/) for bundling
- Prettier, Husky, lint-staged for code quality
- Custom GitHub Actions for CI/CD

## Getting Started

### Prerequisites

- Node.js v24 or newer
- npm

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run start
   ```
   The app will be available at [http://localhost:7979/](http://localhost:7979/).

## Development Workflow

- **Prettier, Husky, lint-staged**: Pre-commit hook auto-formats staged files. If not triggered, ensure `.husky/pre-commit` is executable and contains:
  ```sh
  #!/bin/sh
  . "$(dirname "$0")/_/husky.sh"
  npx --no-install lint-staged
  ```
- **CI/CD**: Automated deployment to GitHub Pages via custom GitHub Action.

## Troubleshooting

- **Dev server not running**: Make sure you run `npm install` before starting the dev server.
- **Pre-commit hook not triggered**: Run `chmod +x .husky/pre-commit` and ensure Husky is installed (`npx husky install`).

## Author

- **Otis**: [LinkedIn](https://www.linkedin.com/in/hi%E1%BA%BFu-l%C3%AA-minh-7996bb153/)
- **Otis**: [Frontend Mentor](https://www.frontendmentor.io/profile/leminhhieu98py)
