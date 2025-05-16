import { Link } from 'react-router'
import Button from '../components/Button'

const Error = () => {
  return (
    <>
    <section>
        <div className="container">
            <p className='text-[14px] pt-[80px]'><Link to="/">Home</Link> / 404 Error</p>
            <div className='text-center pt-[140px]'>
                <h2 className='text-[110px] font-medium pb-10 '>404 Not Found</h2>
                <p className='text-[16px] pb-20'>Your visited page not found. You may go home page.</p>
                <Button TagName={Link} to="/">Back to home page</Button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Error
