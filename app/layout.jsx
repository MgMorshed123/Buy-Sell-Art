
import Provider from "@components/Provider"
import { ChildCare } from "@mui/icons-material"
import "@styles/global.css"
import { Children } from "react"

export const metadata = {

    title : "Art",
    description : "Discover and Share Art",
}



const layout = ({children}) => {
  return (
    <html>
        <body>
           <Provider>
           <main>
                {children}
            </main>
           </Provider>
        </body>
    </html>
  )
}

export default layout