import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ header, subheader, name, avatar, href, children }) {
    return (
        <div>
            <div className='card bg-light'>
                <h4 className='header-lg center-text'>
                    {header}
                </h4>
                <img
                    className='avatar'
                    src={avatar}
                    alt={`Avatar for ${name}`}
                />
                {subheader && (
                    <h4 className='center-text'>
                        {subheader}
                    </h4>
                )}
                <h2 className='center-text'>
                    <a className='link' href={href}>
                        {name}
                    </a>
                </h2>
                {children}
            </div>
        </div>
    )
}

Card.propTypes = {
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

