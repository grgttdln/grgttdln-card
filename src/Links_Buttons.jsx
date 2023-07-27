import './Links_Buttons.css'

export default function Links_Buttons() {
    return (
        <>
            <div className='lb--col-btn'>
                <a href="mailto:georgettedalen@gmail.com">
                    <button className='lb--email'>
                        Email
                    </button>
                </a>
                <a href="https://github.com/grgttdln" target='_blank'>
                    <button className='lb--btn'>
                        GitHub
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/georgettedalen/" target='_blank'>
                    <button className='lb--btn'>
                        LinkedIn
                    </button>
                </a>
            </div>
        </>
    )
}