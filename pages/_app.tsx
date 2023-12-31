import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'



export default function App({ Component, pageProps }: AppProps) {

    // Create a new supabase browser client on every first render.
    const [supabaseClient] = useState(() => createPagesBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL))

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
