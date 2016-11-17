

export default setupSessionStore;
import inject from '../utils/inject';
function setupSessionStore(registry) {
  inject(registry, 'service:session', 'session', 'session:main');
}