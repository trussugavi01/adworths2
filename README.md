# AdWorths Advertising Limited

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/trussugavi01/generated-app-20251023-084524)

A modern, professional, and high-performing digital platform for AdWorths Advertising Limited to showcase their creative excellence, services, and portfolio.

This project is a complete redesign of the AdWorths Advertising Limited website. The primary objective is to create a visually stunning, modern, and professional single-page application (SPA) that accurately reflects the agency's premium positioning and creative excellence. The website will serve as a high-performing digital platform to showcase services, display a portfolio of work, build credibility through testimonials, and drive lead generation.

## Key Features

- **Stunning Visual Design:** A modern, professional aesthetic that aligns with the AdWorths premium brand identity.
- **Responsive & Mobile-First:** Flawless user experience across all devices, from mobile phones to desktops.
- **High-Performance:** Built for speed and optimized for fast load times, running on Cloudflare's edge network.
- **Interactive UI:** Smooth animations and micro-interactions to create a delightful user experience.
- **Component-Driven:** Built with a robust set of reusable components for consistency and maintainability.
- **SEO Optimized:** Structured for search engine visibility to attract organic traffic.

## Technology Stack

- **Frontend:** [React](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/adworths_website.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd adworths_website
    ```

3.  **Install dependencies:**
    ```sh
    bun install
    ```

## Development

To start the local development server, run the following command:

```sh
bun run dev
```

The application will be available at `http://localhost:3000`. The server will automatically reload when you make changes to the code.

## Building for Production

To create a production-ready build of the application, run:

```sh
bun run build
```

This command bundles the application into the `dist` directory, optimized for deployment.

## Deployment

This project is configured for seamless deployment to Cloudflare Pages/Workers.

To deploy the application, run the following command:

```sh
bun run deploy
```

This will build the project and deploy it using the Wrangler CLI.

Alternatively, you can deploy directly from your GitHub repository.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/trussugavi01/generated-app-20251023-084524)

## Project Structure

-   `src/`: Contains all the frontend source code, including components, pages, hooks, and styles.
-   `src/components/`: Reusable React components, with UI primitives from shadcn/ui in `src/components/ui`.
-   `src/pages/`: Top-level page components that correspond to different routes.
-   `worker/`: Contains the Cloudflare Worker server-side logic.
-   `public/`: Static assets that are served directly.

## Linting

To run the linter and check for code quality issues, use the following command:

```sh
bun run lint
```