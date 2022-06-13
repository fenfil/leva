import { Link } from '@/components/Link';
import { getVideoRequest } from '@global/api/video';
import { errorLogger } from '@global/utils/errorLogger';
import { useEffect, useState } from 'react';

import { VIDEO_BASEURL } from '../../../global/constants/web';
import { useTypedSelector } from '../../../store';
import styles from './style.module.scss';

export const VideoCardModal: React.FC = () => {
  const { videoId, token } = useTypedSelector((state) => ({
    videoId: state.modal.params.videoId,
    token: state.user.playToken,
  }));
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (!video) {
      getVideoRequest({ videoId })
        .then(({ data }) => {
          setVideo(data);
        })
        .catch(errorLogger('Cant get video'));
    }
  }, [video]);

  if (!video) return null;

  // eslint-disable-next-line no-restricted-globals
  const baseUrl = process.browser ? location.origin : null;
  const videoUrl = `${VIDEO_BASEURL}${video.url}`;
  const playerUrl = `${baseUrl}/player/video/${token}`;

  return (
    <div className={styles.videoModal}>
      <div>
        <p>{video.company?.name}</p>
        <p className={styles.title}>{video.title}</p>
        <p className={styles.description}>description</p>
        <p className={styles.linkTitle}>Ссылка для отображения в чате</p>
        <Link text={videoUrl} accent />
        <p className={styles.linkTitle}>Ссылка для отображения видео на стриме</p>
        <Link text={playerUrl} border accent />
        <p className={styles.payout}>{Math.floor(video.payout * 1000)} рублей за 1000 просмотров</p>
      </div>
      <video
        className={styles.video}
        src={videoUrl}
        poster={video.poster && `${VIDEO_BASEURL}${video.poster}`}
        controls
      />
    </div>
  );
};

VideoCardModal.displayName = 'VideoCardModal';

export const key: string = 'VideoCard';
