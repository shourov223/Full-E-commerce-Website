import React from 'react'

const ListItems = ({text , TagName, ...props}) => {
  return <TagName {...props} className='text-[16px] leading-[24px] text-[#FAFAFA] pb-[16px]'>{text}</TagName>
}

export default ListItems
