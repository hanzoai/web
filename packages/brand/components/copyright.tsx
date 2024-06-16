import React from 'react'

const FIRST = 2020

const Copyright: React.FC<{
  className?: string
}> = ({
  className='' 
}) => {

  const year = new Date().getFullYear()
  const yearString = (year > FIRST) ? `${FIRST} - ${year}` : FIRST.toString()

  return (
    <div className={className}>
      {`Copyright © ${yearString}`}&nbsp;<br className='sm:hidden'/>Hanzo Partners Ltd.&nbsp;<br className='md:hidden'/>&nbsp;All rights reserved.
    </div> 
  )
}

export default Copyright
