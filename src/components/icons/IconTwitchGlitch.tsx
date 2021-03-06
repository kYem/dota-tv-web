import React from 'react'

const defaultProps = ({
  fill: '#6441a4',
  fillRule: 'evenodd' as 'evenodd',
  height: '16px',
})

const IconTwitchGlitch = (props: React.SVGProps<SVGSVGElement>) => {
  const mergedProps = { ...defaultProps, ...props }
  return (
    <svg
      viewBox='0 0 128 134'
      {...mergedProps}
      className={'twitch-logo'}
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill={props.fill}
        fillRule={props.fillRule}
        className='cls-1'
        d='M89,77l-9,23v94h32v17h18l17-17h26l35-35V77H89Zm107,76-20,20H144l-17,17V173H100V89h96v64Zm-20-41v35H164V112h12Zm-32,0v35H132V112h12Z'
        transform='translate(-80 -77)'
      />
    </svg>
  )
}

export default IconTwitchGlitch
