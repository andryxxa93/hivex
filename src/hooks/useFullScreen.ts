import { useState } from 'react';

interface IUseFullScreen {
  fullScreen: boolean;
  openFullScreen: () => void;
}

function useOpenFullScreen(): IUseFullScreen {
  const [fullScreen, setFullScreen] = useState(false);

  const openFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    }
    if (document.exitFullscreen && document.fullscreenElement) {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  return { fullScreen, openFullScreen };
}

export default useOpenFullScreen;
