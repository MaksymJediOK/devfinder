import styles from './UserCard.module.scss'
import { UserStat } from '../UserStat'
import { LocalGithubUser } from '../../types'
import { UserTitle } from '../UserTitle'
import { UserInfo } from '../UserInfo'

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
	return (
		<div className={styles.userCard}>
			<img src={props.avatar} alt={props.login} className={styles.avatar} />
			<UserTitle login={props.login} name={props.name} created={props.created} />
			<p className={`${styles.bio}${!props.bio ? '' : ` ${styles.empty}`}`}>
				{props.bio || 'no bio'}
			</p>
			<UserStat repos={props.repos} followers={props.followers} following={props.following} />
			<UserInfo
				blog={props.blog}
				company={props.company}
				location={props.location}
				twitter={props.twitter}
			/>
		</div>
	)
}
