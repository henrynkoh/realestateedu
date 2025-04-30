# RealEstateEdu

RealEstateEdu is a web application designed to empower users with data-driven real estate purchasing decisions. By integrating the NWMLS API, n8n, and MCP, it provides daily listing analysis, feasibility studies for investment scenarios (e.g., buy-to-rent, flip), and customized education modules with interactive quizzes.

## Features

- **Daily NWMLS Listings**: Browse, filter, and analyze real estate listings
- **Feasibility Analysis**: Evaluate properties based on ROI, cash flow, expenses, and profit for different investment scenarios
- **Interactive Education**: Learn real estate investing concepts through modules and quizzes with progress tracking
- **Data Integration**: Connect with NWMLS, n8n workflows, and MCP for comprehensive market analysis

## Tech Stack

- **Framework**: Next.js 14.x
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React hooks
- **Authentication**: Supabase (with email/password and social login options)
- **Charts**: Recharts
- **API Integration**: NWMLS API, n8n, MCP

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Supabase account (for authentication and database)
- NWMLS API credentials (for real estate data)
- n8n instance (for workflow automation)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/realestateedu.git
cd realestateedu
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_NWMLS_API_BASE_URL=your_nwmls_api_url
NWMLS_API_KEY=your_nwmls_api_key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
realestateedu/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app router pages
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and client libraries
│   ├── services/        # API service functions
│   └── types/           # TypeScript types and interfaces
├── .env.local           # Environment variables (not in repo)
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Deployment

This project can be deployed on Vercel, Netlify, or any other Next.js-compatible hosting platform.

```bash
npm run build
# or
yarn build
```

## API Integration

### NWMLS API

To fully utilize the real estate listing features, you need NWMLS API credentials. Contact the Northwest Multiple Listing Service for access.

### n8n Integration

For workflow automation (e.g., daily listing updates, email notifications), set up an n8n instance and configure the API key in your environment variables.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Northwest Multiple Listing Service (NWMLS) for real estate data
- n8n for workflow automation capabilities
- Supabase for authentication and database services 