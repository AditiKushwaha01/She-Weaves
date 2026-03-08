import { Outlet, useLocation } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { ScrollThread } from './components/ScrollThread';
import { CrochetCharacter } from './components/CrochetCharacter';

export default function Root() {
  const location = useLocation();
  
  // Don't show scroll thread and character on auth page
  const showScrollEffects = location.pathname !== '/auth';

  const handleScrollToTop = () => {
    if ((window as any).scrollToTopWithThread) {
      (window as any).scrollToTopWithThread();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {showScrollEffects && (
        <>
          <ScrollThread />
          <CrochetCharacter onClick={handleScrollToTop} />
        </>
      )}
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}