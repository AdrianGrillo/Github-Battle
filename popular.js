import React from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos } from '../utility/api.js'

export default class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All',
            repos: null,
            error: null
        }

        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage,
            error: null,
            repos: null
        })

        fetchPopularRepos(selectedLanguage)
            .then((repos) => this.setState({
                repos,
                error: null,
            }))
            .catch(() => {
                console.warn('Error fetching repos: ', error)

                this.setState({
                    error: 'There was an error fetching the repositories.'
                })
            })
    }

    render() {
        return (
            <LanguagesNav
                selected={this.state.selectedLanguage}
                onUpdateLanguage={this.updateLanguage}
            />
        )
    }
}

function LanguagesNav({ selected, onUpdateLanguage }) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
        <ul className='flex-center'>
            {languages.map(language => (
                <li key={language}>
                    <button
                        className='btn-clear nav-link'
                        style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
                        onClick={() => onUpdateLanguage(language)}>
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    )
}

LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}