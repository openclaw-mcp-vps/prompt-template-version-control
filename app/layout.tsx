import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptVCS – Git for AI Prompt Templates',
  description: 'Version control system for AI prompts with A/B testing, rollback, and performance tracking across iterations. Built for AI product teams and prompt engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9801dffe-fca5-4427-a38a-37ff1e4ff495"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
