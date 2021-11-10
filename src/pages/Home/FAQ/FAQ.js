import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        //FAQ Section
        <>
            <div id='faq' className='mx-auto mt-5' style={{ width: '60%' }}>
                <h2>Frequently Asked Questions (FAQ)</h2>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Who Are We?</Accordion.Header>
                        <Accordion.Body>
                            This website is a Travel planners hub, where people can easily choose their favourite travel place according to budget.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What Is Our Goal?</Accordion.Header>
                        <Accordion.Body>
                            This website is a Travel planners hub, where people can easily choose their favourite travel place according to budget.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How Much We Charge?</Accordion.Header>
                        <Accordion.Body>
                            This website is a Travel planners hub, where people can easily choose their favourite travel place according to budget.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Where Is Our Branches?</Accordion.Header>
                        <Accordion.Body>
                            This website is a Travel planners hub, where people can easily choose their favourite travel place according to budget.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
};

export default FAQ;