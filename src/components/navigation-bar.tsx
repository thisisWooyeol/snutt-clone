import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="sticky bottom-0 bg-background">
      <div className="flex justify-around p-2.5">
        {[
          { imgName: 'timetable', path: '/' },
          { imgName: 'search', path: '/search' },
          { imgName: 'thumbs', path: '/thumbs' },
          { imgName: 'friends', path: '/friends' },
          { imgName: 'mypage', path: '/mypage' },
        ].map(({ imgName, path }) => (
          <Button
            asChild
            key={imgName}
            variant="ghost"
            size="icon"
            onClick={() => {
              // FIXME: ad-hoc path resolution
              if (path === '/mypage' || path === '/') {
                navigate(path);
              }
            }}
          >
            <img
              src={`/tab/tab_${imgName}_${location.pathname === path ? 'on' : 'off'}.svg`}
              style={{ width: '1.875rem', height: '1.875rem' }}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};
