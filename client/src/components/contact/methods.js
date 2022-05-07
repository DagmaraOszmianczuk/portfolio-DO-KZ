export const sendEmail = async (bodyData) => {
   const response = await fetch("http://localhost:8800/api/email", {
      method: "POST",
      headers: {
         "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(bodyData),
   })

   const resJSON = await response.json()

   return [response.ok, resJSON]
}
