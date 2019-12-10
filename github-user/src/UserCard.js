import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import FollowersCard from './FollowersCard'

function UserCard (props) {
    return(
        <div>
           <Card>
                <Image src={props.profile.avatar_url} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.profile.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>GitHub Name : {props.profile.login}</span>
                    </Card.Meta>
                    <Card.Description>
                        {props.profile.bio}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href = 'a'>
                        <Icon name='user' />
                        Followers : {props.profile.followers}
                    </a>
                    {props.followers.map(follower => {
                        return  <FollowersCard follower = {follower} key = {follower}/>
                    })}
                   
                </Card.Content>
            </Card>
        </div>
    )
}

export default UserCard;