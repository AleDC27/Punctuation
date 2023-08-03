import { Icon } from 'semantic-ui-react';
import s from './nav.module.scss';

export default function Nav() {
  return (
    <nav className={s.nav}>
        <Icon name='bars'/>
        <>
        <span>{`i m e n ú `}<Icon name='cloud' className={s.cloud} /></span>
        </>
        <Icon name='user outline'/>
    </nav>
  )
}
