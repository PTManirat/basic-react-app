import React from 'react'
import PropTypes from 'prop-types'

const FooterV1 = props => {

    const {title, website, postcode, isOpen} = props // destructurig assign

    return (
        <div>
            <h3 style={styles.title}>{title} &copy; {new Date().getFullYear()}</h3>
            <p>{website} {postcode} is open = {isOpen.toString()}</p>
            <p style={styles.title}>Test System</p>
        </div>
    )

}

const styles = {
    title : {
        color: 'red'
    }
}

Footer.propTypes = {
    title: PropTypes.string,
    website: PropTypes.string,
    postcode: PropTypes.number,
    isOpen: PropTypes.bool
};

export default FooterV1
