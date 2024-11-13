import { Outlet, useNavigation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

export const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="flex h-dvh w-screen items-center justify-center">
      <div className="flex h-full w-full max-w-4xl flex-col justify-center bg-background">
        <Outlet />

        {(navigation.state === 'submitting' ||
          navigation.state === 'loading') && (
          <div className="absolute inset-0 flex items-center justify-center">
            <HashLoader color={'#F58D3D'} />
          </div>
        )}
        {/** TODO: loading 중일때 체크 애니메이션 넣기 */}
      </div>
    </div>
  );
};
