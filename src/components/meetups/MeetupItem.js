import React from 'react'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'

const MeetupItem = (props) => {
  return (<div>
    <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.item}/>
        </div>
        <div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>
                    To Favorites
                </button>
            </div>
        </div>
        </Card>
    </li>
    </div>
  )
}

export default MeetupItem