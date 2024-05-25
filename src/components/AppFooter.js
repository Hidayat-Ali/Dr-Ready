import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <>
      <div className="text-center">
        <span className="me-1">Developed by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          HIDAYAT ALI
        </a>
      </div>
    </>
  )
}

export default React.memo(AppFooter)
