import React from 'react'
import { Link } from 'react-router-dom'
import { GrHomeRounded } from 'react-icons/gr'
import './_error.scss'
import { Location } from '../../components'
const Error = () => {
  return (
    <>
    <section className="error">
      <div className="error-page">
        <div className="error-page_direction">
          <Link to='/' className="error-page_direction-link">
            <GrHomeRounded color='inherit'/> Home</Link>
        </div>
        <div className="error-page_content">
          <h1 className='text-center text-danger'>Ooops! This page not found</h1>
        </div>
      </div>
    </section>
    <Location/>
    </>
  )
}
export default Error