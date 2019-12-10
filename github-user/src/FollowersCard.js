import React from 'react'

function FollowersCard (props){
    return(
        <div>
            {props.follower.login}
        </div>
    )
}

export default FollowersCard;