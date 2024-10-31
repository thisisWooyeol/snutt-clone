import {
  LayoutPanelLeft,
  MessageSquare,
  MoreHorizontal,
  Search,
  Users,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="sticky bottom-0 bg-background">
      <div className="flex justify-around p-2">
        {[
          { icon: LayoutPanelLeft, name: '/' },
          { icon: Search, name: '/search' },
          { icon: MessageSquare, name: '/message' },
          { icon: Users, name: '/users' },
          { icon: MoreHorizontal, name: '/mypage' },
        ].map(({ icon: Icon, name }) => (
          <Button
            key={name}
            variant="ghost"
            size="icon"
            className={`h-auto flex-col gap-1 py-2 ${
              location.pathname === name ? 'text-black' : 'text-gray-500'
            }`}
            onClick={() => {
              // FIXME: ad-hoc path resolution
              if (name === '/mypage' || name === '/') {
                navigate(name);
              }
            }}
          >
            <Icon
              className={`h-6 w-6 ${location.pathname === name ? 'fill-current' : ''}`}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};
