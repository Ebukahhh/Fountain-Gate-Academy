# 🚀 Quick Setup Guide

## Fix "Missing Supabase Environment Variables" Error

### Step 1: Create your `.env` file

1. In the root directory of your project, create a new file named `.env`
2. Copy the contents from `.env.example` and paste them into `.env`

### Step 2: Get your Supabase credentials

1. **If you already have a Supabase project:**
   - Go to [https://app.supabase.com](https://app.supabase.com)
   - Select your project
   - Go to **Settings** → **API**
   - Copy your **Project URL** and **anon/public key**

2. **If you don't have a Supabase project yet:**
   - Go to [https://supabase.com](https://supabase.com)
   - Sign up for a free account (if you don't have one)
   - Click **New Project**
   - Fill in your project details and wait for it to be created
   - Once created, go to **Settings** → **API**
   - Copy your **Project URL** and **anon/public key**

### Step 3: Fill in your `.env` file

Open your `.env` file and replace the placeholder values:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Example:**
```env
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Step 4: Set up your database

1. Go to your Supabase project dashboard
2. Click on **SQL Editor** in the left sidebar
3. Open the `database_schema.sql` file from this project
4. Copy and paste the entire SQL script into the SQL Editor
5. Click **Run** to create all the necessary tables

### Step 5: Restart your dev server

1. Stop your current dev server (Ctrl+C)
2. Run `npm run dev` again
3. The website should now load without errors!

---

## 🔍 Troubleshooting

### Still getting the error?

1. **Check that `.env` file exists** in the root directory (same level as `package.json`)
2. **Check for typos** in variable names:
   - Should be `VITE_SUPABASE_URL` (not `VITE_SUPABASE_URLS`)
   - Should be `VITE_SUPABASE_ANON_KEY` (not `VITE_SUPABASE_KEY`)
3. **Restart your dev server** after creating/modifying `.env`
4. **Check for spaces** around the `=` sign (should be `VARIABLE=value`, not `VARIABLE = value`)

### Need help?

- Check the [README.md](./README.md) for more detailed setup instructions
- Visit [Supabase Documentation](https://supabase.com/docs) for help with Supabase

