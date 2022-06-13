import { VideoCardModal, key as videoCardKey } from './VideoCardModal';
import { BannerCardModal, key as bannerCardKey } from './BannerCardModal';
import { SetNameModal, key as setNameKey } from './SetNameModal';

export const modalCollector = {
  [videoCardKey]: <VideoCardModal />,
  [bannerCardKey]: <BannerCardModal />,
  [bannerCardKey]: <BannerCardModal />,
  [setNameKey]: <SetNameModal />,
};
