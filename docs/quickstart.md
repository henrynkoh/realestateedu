# RealEstateEdu Quick Start Guide

This guide will help you get RealEstateEdu up and running quickly.

## Prerequisites

Before you begin, make sure you have the following:

- Node.js 18.x or higher installed
- npm or yarn package manager
- Git installed (optional, for cloning the repository)

## Step 1: Clone or Download the Repository

```bash
git clone https://github.com/yourusername/realestateedu.git
cd realestateedu
```

Or download and extract the ZIP file from the GitHub repository.

## Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

## Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_NWMLS_API_BASE_URL=your_nwmls_api_url
NWMLS_API_KEY=your_nwmls_api_key
```

Note: The application will work without these keys, but authentication and real API data functionality will be limited.

## Step 4: Start the Development Server

```bash
npm run dev
# or
yarn dev
```

## Step 5: Open the Application

Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

## Key Features to Explore

1. **Listings Page**: Browse and filter real estate listings at `/listings`
2. **Analysis Page**: Conduct investment feasibility studies at `/analysis`
3. **Education Module**: Learn real estate concepts through interactive modules at `/education`

## Authentication

For development purposes, the application uses mock authentication. In a production environment, Supabase authentication would be used.

## Working Without API Keys

If you don't have NWMLS API credentials:

- The application will use mock data for listings
- All analysis features will work with the mock data
- Education modules are fully functional without any API keys

## Next Steps

After getting started:

1. Customize the mock data in the services files if needed
2. Explore the codebase to understand the project structure
3. Refer to the main README for more detailed information

## Troubleshooting

- **Port Conflicts**: If port 3000 is already in use, modify the `dev` command in `package.json` to use a different port (e.g., `next dev -p 3001`)
- **Dependency Issues**: Make sure you're using Node.js 18 or higher with `node -v`

## Getting Help

If you encounter any issues, please check the main README or open an issue on the GitHub repository. 