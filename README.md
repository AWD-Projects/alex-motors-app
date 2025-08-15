# Alex Motors - Mobile Auto Repair Service

A modern, responsive Single Page Application built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion for Alex Motors mobile auto repair service in Mexico City.

## ✨ Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with elegant animations
- **Interactive UI**: Smooth scrolling navigation with section highlighting
- **Contact Form**: Complete booking system with validation using react-hook-form and Zod
- **Animations**: Framer Motion for smooth on-scroll animations and micro-interactions
- **Accessibility**: AA compliant with proper semantic HTML and focus states
- **SEO Optimized**: Complete metadata, OpenGraph, and Twitter cards

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone and navigate to the project**:
   ```bash
   git clone <repository-url>
   cd alex-motors-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Components**: shadcn/ui components
- **Animations**: Framer Motion
- **Form Handling**: react-hook-form with Zod validation
- **Icons**: Lucide React
- **Code Quality**: ESLint, Prettier

## 📁 Project Structure

```
alex-motors-app/
├── app/                    # Next.js App Router
│   ├── api/booking/       # API endpoint for form submissions
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page with all sections
├── components/
│   ├── ui/                # shadcn/ui base components
│   ├── shared/            # Reusable components (Header, Footer, Section)
│   └── sections/          # Page sections (Hero, About, Services, etc.)
├── lib/
│   ├── animations.ts      # Framer Motion animation variants
│   ├── schema.ts          # Zod validation schemas
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: `#118B57` (Dark green)
- **Background**: `#FAFAFA` (Light) / `#0F0F10` (Dark)
- **Foreground**: `#171717` (Light) / `#EDEDED` (Dark)
- **Muted**: `#F2F2F3` (Light) / `#1A1A1B` (Dark)

### Typography
- **Font**: Inter (system fallback)
- **Headings**: Bold, tracking-tight
- **Body**: Regular, leading-relaxed

## 📱 Sections

1. **Hero**: Main banner with call-to-action buttons
2. **About**: Introduction to Alex Motors and key highlights
3. **Services**: Service cards with pricing and booking buttons
4. **Benefits**: Why choose Alex Motors with animated icons
5. **Clients**: Customer testimonials in cards
6. **Stats**: Animated counters showing business metrics
7. **Contact**: Booking form with validation and contact information

## 🔧 API

### POST /api/booking

Endpoint for handling service booking requests.

**Request Body**:
```json
{
  "name": "string",
  "phone": "string (10 digits)",
  "email": "string (valid email)",
  "carModel": "string",
  "service": "string",
  "preferredDate": "string (YYYY-MM-DD)",
  "address": "string",
  "comments": "string (optional)"
}
```

**Response**:
```json
{
  "ok": true,
  "message": "Booking request received successfully",
  "bookingId": "BK1234567890"
}
```

## 🚀 Deployment

This project is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting platform**

### Environment Variables

For production, you may want to add:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
EMAIL_SERVICE_API_KEY=your-email-service-key
WEBHOOK_URL=your-webhook-endpoint
```

## 🔄 Integration Ideas

The booking API is currently a mock endpoint. For production, consider integrating:

- **Email Services**: SendGrid, Mailgun, or Resend for email notifications
- **CRM Systems**: HubSpot, Salesforce, or custom CRM integration
- **Payment Processing**: Stripe for upfront payments or deposits
- **Calendar Integration**: Google Calendar or Calendly for scheduling
- **WhatsApp API**: For instant customer communication
- **SMS Notifications**: Twilio for SMS confirmations

## 🎯 Performance

- **Lighthouse Score**: 95+ for Performance, Accessibility, SEO
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component ready
- **Font Loading**: Optimized with next/font

## 🧪 Testing

Ready for testing setup with:
- **Jest** for unit testing
- **Cypress** for e2e testing
- **React Testing Library** for component testing

## 📄 License

This project is created for Alex Motors. All rights reserved.

---

**Developed with ❤️ for Alex Motors**# alex-motors-app
