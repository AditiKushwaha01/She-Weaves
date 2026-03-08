import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="text-9xl font-bold text-rose-200">404</div>
        <h1 className="text-4xl font-serif text-gray-900">Page Not Found</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </Link>
          <Link to="/shop">
            <Button size="lg" variant="outline">
              <Search className="w-5 h-5 mr-2" />
              Browse Shop
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
