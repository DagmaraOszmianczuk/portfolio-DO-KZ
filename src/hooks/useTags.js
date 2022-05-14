import React, { useCallback, useState } from "react"

const useTags = (nodes) => {
   const initData = [
      {
         name: "Wszystko",
         id: 0,
         active: true,
      },
      ...nodes.map((node, index) => ({
         name: node.name,
         id: index + 1,
         active: false,
      })),
   ]

   const [tagList, setTagList] = useState(initData)

   const toggleActive = useCallback((id) => {
      const copy = [...tagList]

      if (id !== 0) {
         copy[0].active = false
         copy[id].active = !copy[id].active
      } else {
         copy.forEach((tag) => (tag.active = false))
         copy[0].active = true
      }

      setTagList(copy)
   }, [])

   const getActiveTags = useCallback(() => {
      return tagList.map((tag) => tag.active && tag.name).filter((item) => item)
   })

   return [tagList, toggleActive, getActiveTags]
}

export default useTags
