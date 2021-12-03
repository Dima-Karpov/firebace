import {FC, memo} from 'react';
import s from './Profile.module.css';
import {ProfilePropsType} from './types/ProfilePropsType';

export const Profile: FC<ProfilePropsType> = memo(({handleLogout}) => {
  return (
    <div className={s.profile}>
      <nav>
        <h2>Welcom</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  )
})