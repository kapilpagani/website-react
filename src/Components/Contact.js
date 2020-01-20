import React, { Component } from 'react'
import './Contact.scss'
import ScrollToNext from './ScrollToNext'
import ScrollToPrevious from './ScrollToPrevious'

class Contact extends Component {
    render() {
        const {sectionOrder, positionOrder} = this.props;
        return(
            <section id="contact">
                <ScrollToPrevious
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
                <div className="contactContent">
                    <p>Contact</p>
                </div>
                <ScrollToNext
                    sectionOrder={sectionOrder}
                    positionOrder={positionOrder}
                />
            </section>
        )
    }
}

export default Contact