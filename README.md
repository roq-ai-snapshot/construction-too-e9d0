## Welcome to Construction tool rental

Construction tool rental is a B2B SaaS application that was generated using [ROQ.ai](https://roq.ai/)

- Documentation: https://docs.roq.tech
- License: MIT

## Running locally

### (0) Prerequisites

Make sure these tools are installed and up-to-date:

- Node
- NPM (or Yarn)

### (1) Clone the repository

### (2) Setup environment variables

- Login to [ROQ Console](https://console.roq.tech) (opens in a new tab) and go to "Project Details"
- In the environment named "Local Environment", click the "Copy Env File" button and copy the entire output.
- Important: If your application is **not** running on `http://localhost:3000/`, change the URL in the environment's setting page before copying the output.
- Create a new file called .env in the root of your project and paste the content in.

```bash
cp .env.example .env
```

### (3) Install dependencies and start the application

```bash
# With npm
npm install
npm run dev
```

or

```bash
# With Yarn
yarn
yarn dev
```

Now you can open your app at [http://localhost:3000](http://localhost:3000).

## Further documentation

To learn more about ROQ UI components and APIs, take a look at [ROQ Documentation](https://docs.roq.tech)
