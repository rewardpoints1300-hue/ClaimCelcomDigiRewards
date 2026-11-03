import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowUpRight, ExternalLink, ShieldCheck, WalletCards } from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="wordmark" data-testid="text-brand-name">CelcomDigi</div>
        <div className="topbar-note" data-testid="status-official-handoff">Official payment hand-off</div>
      </header>

      <main className="main-content">
        <section className="copy-column" aria-labelledby="page-title">
          <p className="eyebrow"><span className="eyebrow-line" />A clear, secure next step</p>
          <h1 className="headline" id="page-title">
            Pay your bill,<br />
            <span className="headline-accent">the official way.</span>
          </h1>
          <p className="intro">
            We’ll take you straight to CelcomDigi’s official bill-payment service. This page is only a signpost — your payment details stay between you and CelcomDigi.
          </p>

          <div className="handoff-card">
            <p className="handoff-label"><ShieldCheck size={15} strokeWidth={2.2} /> You’re heading to</p>
            <div className="destination" data-testid="text-destination-host">
              <span className="destination-mark"><ExternalLink size={15} /></span>
              <span>
                get.celcomdigi.com
                <small>Official CelcomDigi bill-payment page</small>
              </span>
            </div>
            <a
              className="primary-link"
              href="https://get.celcomdigi.com/bill-payment/en"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-official-bill-payment"
            >
              <span>Continue to bill payment</span>
              <span className="link-end"><span>Opens in a new tab</span><ArrowUpRight aria-hidden="true" /></span>
            </a>
            <p className="handoff-footnote">
              You’ll enter any account or payment details only on the official CelcomDigi page.
            </p>
          </div>
        </section>

        <aside className="art-column" aria-label="A secure route to official bill payment">
          <div className="art-halo" aria-hidden="true" />
          <span className="orbit-dot" aria-hidden="true" />
          <div className="portal-card">
            <div className="portal-top">
              <span className="portal-chip">CelcomDigi service</span>
              <span className="portal-number">01 / 01</span>
            </div>
            <div className="portal-icon"><WalletCards aria-hidden="true" /></div>
            <h2 className="portal-title">A direct route to your bill.</h2>
            <p className="portal-copy">No details collected here. Your payment journey continues on CelcomDigi’s official service.</p>
            <div className="portal-track" aria-hidden="true"><i /><i /><i /><i /></div>
          </div>
        </aside>
      </main>

      <footer className="trust-strip">
        <strong>CelcomDigi bill payment</strong>
        <span className="trust-right"><ShieldCheck size={15} /> Details are entered on the official destination</span>
      </footer>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
