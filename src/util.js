export const getValueFromGeneral = (data, name) => {
   return data.allContentfulGeneral.nodes.filter((node) => node.title === name)[0].childContentfulGeneralValueTextNode
      .value
}
