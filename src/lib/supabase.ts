import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create a singleton Supabase client for use throughout the app
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// In a real app, these values would be set in your environment variables
// For development, you can create a .env.local file with:
// NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
// NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

// Helper functions for authentication
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  
  if (error) {
    throw error
  }
  
  return data
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  if (error) {
    throw error
  }
  
  return data
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    throw error
  }
}

export const getCurrentUser = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  return session?.user
}

// Helper functions for user progress
export const getUserProgress = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
  
  if (error) {
    throw error
  }
  
  return data
}

export const updateUserProgress = async (userId: string, moduleId: string, score: number) => {
  const { data, error } = await supabase
    .from('user_progress')
    .upsert(
      { user_id: userId, module_id: moduleId, score },
      { onConflict: 'user_id, module_id' }
    )
  
  if (error) {
    throw error
  }
  
  return data
} 