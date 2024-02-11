import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const RouteLogger = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Route changed:', location.pathname);
  }, [location]);

  return null; // Since this component only logs, it doesn't render anything
};

export default RouteLogger;
