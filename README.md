# Github-CI-CD-bot-sandbox

Sandbox and test repository for Github CI/CD bot

It contains a small TypeScript calculator web application used to test CI/CD workflows, pull requests, and bot failure analysis for [`sfuosdev/Github-CI-CD-bot`](https://github.com/sfuosdev/Github-CI-CD-bot).

---

### 1. Install Dependencies

Install exact locked dependencies cleanly from `package-lock.json`:

```bash
npm ci
```

_(If you ever edit `package.json`, run `npm install` once to update `package-lock.json`, then run `npm ci` to verify.)_

### 2. Run Formatting, Lint, Tests, and Build

```bash
npm run format:write
npm run lint
npm test
npm run build
```

You can also check formatting without modifying files using:

```bash
npm run format:check
```

### 3. Open the Calculator Page in a Browser

```bash
npx --yes http-server . -p 8080 -o /static/index.html
```

Then enter operands, choose an operator (`+`, `-`, `*`, `/`, `^`, `%`), and click **Calculate** to verify the result updates.
