import { Link } from '@/components/Link';
import { SwitchButton } from '@/components/SwitchButton';
import { usePlayToken } from '@global/selectors/user';
import { toggleBannerById } from '@global/slices/pull';
import { PullBanner } from '@shared/interfaces/Banner';
import { useDispatch, useSelector } from 'react-redux';

import { BANNER_BASEURL } from '../../../global/constants/web';
import { RootState } from '../../../store';
import styles from './style.module.scss';

export const BannerCardModal: React.FC = () => {
  const dispatch = useDispatch();
  const banner = useSelector<RootState, PullBanner>((state) =>
    state.pull.banners.find((v) => v.id === state.modal.params.bannerId),
  );
  const token = usePlayToken();

  if (!banner) return null;

  // eslint-disable-next-line no-restricted-globals
  const baseUrl = process.browser ? location.origin : null;
  const bannerUrl = `${BANNER_BASEURL}${banner.url}`;
  const playerUrl = `${baseUrl}/player/banner/${banner.slot}/${token}`;

  const onToggleBanner = () => {
    dispatch(toggleBannerById(banner.id));
  };

  return (
    <div className={styles.bannerModal}>
      <div>
        <p>{banner.company?.name}</p>
        <p className={styles.title}>{banner.title}</p>
        <p className={styles.description}>description</p>
        <p className={styles.linkTitle}>Ссылка для отображения в чате</p>
        <Link text={bannerUrl} accent />
        {banner.slot && (
          <>
            <p className={styles.linkTitle}>Ссылка для отображения баннера на стриме</p>
            <Link text={playerUrl} border accent />
          </>
        )}
        <p className={styles.payout}>{Math.floor(banner.payout * 1000)} рублей за 1000 просмотров</p>
      </div>
      <div>
        <img src={bannerUrl} alt="" className={styles.banner} />
        <SwitchButton onChange={onToggleBanner} checked={banner.status === 'active'} />
      </div>
    </div>
  );
};

BannerCardModal.displayName = 'BannerCardModal';

export const key: string = 'BannerCard';
