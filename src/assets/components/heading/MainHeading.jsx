import React from 'react'

const MainHeading = ({
  Text = "Heading Text",
  fontSize = "text-xl",
  color = "text-black",
  extraClass = ""
}) => {
  return (
   <h1
  className={`text-center font-fold text-gray-800 ${fontSize} ${color} ${extraClass}`}
>
  {Text}
</h1>

  )
}

export default MainHeading;
