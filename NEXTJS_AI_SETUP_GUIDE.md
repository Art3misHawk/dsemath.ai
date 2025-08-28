# AI Question Generator Setup Guide (Next.js)

This guide will help you set up the AI Question Generator with real AI functionality using OpenAI and Supabase in a Next.js application.

## Prerequisites

1. **OpenAI API Account** - for AI question generation
2. **Supabase Account** - for database storage
3. **Node.js 18+** - for running the application

## Step 1: Environment Configuration

1. Create environment files:
   ```bash
   # For local development
   touch .env.local
   
   # For production (optional)
   touch .env.production
   ```

2. Fill in your environment variables in `.env.local`:

### OpenAI Setup
1. Go to [OpenAI API](https://platform.openai.com/api-keys)
2. Create a new API key
3. Add it to your `.env.local` file:
   ```
   OPENAI_API_KEY=sk-your-openai-api-key-here
   NEXT_PUBLIC_OPENAI_API_KEY=sk-your-openai-api-key-here
   ```

### Supabase Setup
1. Go to [Supabase](https://supabase.com) and create a new project
2. Wait for the project to be ready (usually takes 2-3 minutes)
3. Go to **Settings** → **API** in your Supabase dashboard
4. Copy the **Project URL** and **anon/public key**
5. Add them to your `.env.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

## Step 2: Database Setup

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste the entire content from `database/schema.sql`
4. Click **Run** to create the database tables

This will create:
- `questions` table for storing example questions
- `generated_questions` table for storing AI-generated questions
- Necessary indexes and policies

## Step 3: Next.js API Routes Setup

### Create API Routes for AI Generation

1. Create the API route for question generation:
   ```typescript
   // pages/api/ai/generate-questions.ts or app/api/ai/generate-questions/route.ts
   import { NextApiRequest, NextApiResponse } from 'next';
   // or for App Router: import { NextRequest, NextResponse } from 'next/server';
   ```

2. Create the API route for saving questions:
   ```typescript
   // pages/api/questions/save.ts or app/api/questions/save/route.ts
   ```

### Environment Variable Access
- **Client-side**: Use `NEXT_PUBLIC_` prefix for variables accessible in the browser
- **Server-side**: Use regular environment variables (without prefix) for API keys in API routes

## Step 4: Install Required Dependencies

```bash
# OpenAI SDK
npm install openai

# Supabase client
npm install @supabase/supabase-js

# Additional utilities (if needed)
npm install uuid
npm install @types/uuid --save-dev
```

## Step 5: Test the Setup

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

2. Navigate to the AI Generator page
3. Add an example question with solution
4. Click "Generate Questions" to test the AI integration

## How It Works (Next.js Architecture)

### Client-Side Flow
1. User interacts with the React components
2. Client makes API calls to Next.js API routes
3. Results are displayed in the UI

### Server-Side API Routes
1. `/api/ai/generate-questions` - Handles OpenAI API calls
2. `/api/questions/save` - Handles Supabase database operations
3. `/api/questions/get` - Retrieves saved questions

### Security Benefits
- API keys are kept secure on the server-side
- Client never has direct access to sensitive credentials
- CORS and rate limiting can be implemented

## Example Implementation

### API Route Structure (App Router)
```typescript
// app/api/ai/generate-questions/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { examples, difficulty, count } = await request.json();
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a DSE Math question generator..."
        },
        {
          role: "user",
          content: `Generate ${count} questions based on these examples...`
        }
      ],
    });

    return NextResponse.json({ 
      questions: completion.choices[0].message.content 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate questions' }, 
      { status: 500 }
    );
  }
}
```

### API Route Structure (Pages Router)
```typescript
// pages/api/ai/generate-questions.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { examples, difficulty, count } = req.body;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a DSE Math question generator..."
        },
        {
          role: "user",
          content: `Generate ${count} questions based on these examples...`
        }
      ],
    });

    res.status(200).json({ 
      questions: completion.choices[0].message.content 
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate questions' });
  }
}
```

## Features

### Current Features
- ✅ Example question management
- ✅ Real AI question generation with OpenAI
- ✅ Supabase database integration
- ✅ Secure API routes for sensitive operations
- ✅ Configurable difficulty levels
- ✅ Batch question generation (5-20 questions)
- ✅ Error handling and fallback modes

### Planned Features
- 🔄 Question history and favorites
- 🔄 Topic categorization
- 🔄 Export to PDF/Word
- 🔄 Collaborative question sharing
- 🔄 Advanced AI analysis of mathematical concepts
- 🔄 User authentication with NextAuth.js

## Troubleshooting

### Common Issues

1. **"OpenAI API error: 401"**
   - Check your API key is correct in `.env.local`
   - Ensure you have credits in your OpenAI account
   - Verify the API key is accessible in your API route

2. **"Failed to save to database"**
   - Check your Supabase URL and key in `.env.local`
   - Ensure the database schema was created correctly
   - Check your internet connection

3. **Environment variables not loading**
   - Ensure file is named `.env.local` (not `.env`)
   - Restart your Next.js development server
   - Check that variables have `NEXT_PUBLIC_` prefix for client-side access

4. **API route not found**
   - Verify your file structure matches Next.js conventions
   - Check if you're using App Router vs Pages Router
   - Ensure API routes are in the correct directory

### Error Logs
- Check the browser console (F12) for client-side errors
- Check the terminal/server logs for API route errors
- Use Next.js built-in error handling

## Security Notes

### Production Deployment
- Never commit `.env.local` to version control
- Use environment variables in your hosting platform (Vercel, Netlify, etc.)
- Consider implementing user authentication with NextAuth.js
- Review and adjust Supabase Row Level Security policies
- Implement rate limiting on API routes

### API Key Management
- Keep OpenAI API keys on server-side only
- Use `NEXT_PUBLIC_` prefix only when necessary
- Monitor API usage and set spending limits
- Rotate keys regularly

### Next.js Security Best Practices
- Validate inputs in API routes
- Implement CORS if needed
- Use HTTPS in production
- Add rate limiting to prevent abuse

## Cost Estimation

### OpenAI Costs
- GPT-4: ~$0.03-0.06 per generation (20 questions)
- GPT-3.5-turbo: ~$0.001-0.002 per generation (much cheaper)
- Monthly cost for moderate usage: $5-20

### Supabase Costs
- Free tier includes 500MB database + 2GB bandwidth
- Paid plans start at $25/month for production use

### Hosting Costs
- Vercel: Free tier for personal projects, $20/month for teams
- Netlify: Similar pricing structure
- Other platforms: Variable pricing

## Support

If you encounter issues:
1. Check this documentation
2. Review the browser console and server logs
3. Check your API keys and network connection
4. Verify database setup in Supabase
5. Consult Next.js documentation for framework-specific issues

## API Documentation

### Next.js API Routes

#### `/api/ai/generate-questions`
- **Method**: POST
- **Body**: `{ examples, difficulty, count }`
- **Response**: `{ questions: string }`

#### `/api/questions/save`
- **Method**: POST
- **Body**: `{ questions: Question[] }`
- **Response**: `{ success: boolean }`

#### `/api/questions/get`
- **Method**: GET
- **Response**: `{ questions: Question[] }`

### Client-Side Services
- `questionService.ts` - Handles API calls to Next.js routes
- `supabaseClient.ts` - Client-side Supabase operations
- Error handling and loading states

The system is designed to work with Next.js best practices, keeping sensitive operations on the server while maintaining