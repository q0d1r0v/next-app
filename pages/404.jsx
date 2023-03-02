// imports
import router from 'next/router'

// methods
function goToHomePage() {
    router.push('/')
}

// page
const NotFoundPage = () => {
    return (
        <div className='pageName'>
            <div>
                <div>
                    404 PAGE
                </div>

                <div className="back-to-home-button" onClick={() => goToHomePage()} style={{marginTop: '10px'}}>
                    Back to home
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage