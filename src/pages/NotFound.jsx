import { Button } from '../components/common';
import './NotFound.scss';

function NotFound() {
  return (
    <section className="section not-found">
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1>Page not found</h1>
        <p className="text-muted">The page you are looking for does not exist or has been moved.</p>
        <Button to="/">Back to Home</Button>
      </div>
    </section>
  );
}

export default NotFound;
