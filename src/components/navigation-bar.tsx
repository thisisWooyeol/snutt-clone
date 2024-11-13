import { NavLink, useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes';

export const NavigationBar = () => {
  const location = useLocation();

  const isCurrentPage = (path: string) => location.pathname === path;
  const isNotImplemented = (path: string) => {
    return path === '/search' || path === '/thumbs' || path === '/friends';
  };
  const getOnTabClick = (path: string) => (e: React.MouseEvent) => {
    if (isCurrentPage(path)) {
      e.preventDefault();
      console.debug(`Already on page ${path}`);
    }
    if (isNotImplemented(path)) {
      e.preventDefault();
      console.error(`Page ${path} is not implemented yet`);
    }
  };

  return (
    <>
      <div className="sticky bottom-0 bg-background">
        <div className="flex justify-around p-2.5">
          {[
            { imgName: 'timetable', path: ROUTES.ROOT },
            { imgName: 'search', path: '/search' },
            { imgName: 'thumbs', path: '/thumbs' },
            { imgName: 'friends', path: '/friends' },
            { imgName: 'mypage', path: ROUTES.MYPAGE },
          ].map(({ imgName, path }) => (
            <Button asChild key={imgName} variant="ghost" size="icon">
              <NavLink to={path} end onClick={getOnTabClick(path)}>
                <img
                  src={`/tab/tab_${imgName}_${location.pathname === path ? 'on' : 'off'}.svg`}
                  style={{ width: '1.875rem', height: '1.875rem' }}
                />
              </NavLink>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
