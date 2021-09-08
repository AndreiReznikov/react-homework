import * as React from 'react';
import { MenuButton } from './MenuButton/MenuButton';
import styles from './card.css';
import { KarmaCounter } from './KarmaCounter/KarmaCounter';
import { CommentsButton } from './CommentsButton/CommentsButton';
import { Actions } from './Actions/Actions';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img 
              className={styles.avatar}
              src={require('../../img/user.jpg')}
              alt="avatar"
            />
            <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
          </span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель организационной деятельности
          </a>
        </h2>
      </div>

      <div className={styles.preview}>
        <img 
          className={styles.previewImg}
          src={require('../../img/photo.jpg')}
        />
      </div>

      <MenuButton />

      <div className={styles.controls}>
        <KarmaCounter />
        <CommentsButton />
        <Actions />
      </div>
    </li>
  );
}