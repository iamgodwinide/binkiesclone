import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'
import './faq.css'

const FAQ = () => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section id='faq' className='acc-wrap'>
            <h2>FAQ</h2>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem className='item'>
                    <AccordionHeader className='header' targetId="1">
                        <h3>How many NFTs will there be?</h3>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <p>
                            The Binkies collection will feature 10,000 hand-drawn NFTs generated from 250+ traits. Punk rockers, sparkle babies, bloodthirsty zombies – the whole fam.
                        </p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem className='item'>
                    <AccordionHeader className='header' targetId="2">
                        <h3>How many NFTs will there be?</h3>
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <p>
                            The Binkies collection will feature 10,000 hand-drawn NFTs generated from 250+ traits. Punk rockers, sparkle babies, bloodthirsty zombies – the whole fam.
                        </p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem className='item'>
                    <AccordionHeader className='header' targetId="3">
                        <h3>How many NFTs will there be?</h3>
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                        <p>
                            The Binkies collection will feature 10,000 hand-drawn NFTs generated from 250+ traits. Punk rockers, sparkle babies, bloodthirsty zombies – the whole fam.
                        </p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </section>
    )
}

export default FAQ