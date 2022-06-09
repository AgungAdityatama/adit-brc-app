import React, { useEffect, useRef, useState } from 'react'

//assets
import { FiChevronDown } from "react-icons/fi";
import './Faq.css'



function Faq() {
    const [active, setActive] = useState(false);

    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <>
            <div className="faq" id='faq'>
                <div className="detail">
                    <p className="title">Frequently Asked Question</p>
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="list">
                    <div>
                        <button
                            className={`question-section ${active}`}
                            onClick={toggleAccordion}
                        >
                            <div>
                                <div className="question-align">
                                    <h4 className="question-style">
                                        Apa saja syarat yang dibutuhkan?
                                    </h4>
                                    <FiChevronDown
                                        className={active ? `question-icon rotate` : `question-icon`}
                                    />
                                </div>
                                <div
                                    ref={contentRef}
                                    className={active ? `answer answer-divider` : `answer`}
                                >
                                    <p>Lorem . . .</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq