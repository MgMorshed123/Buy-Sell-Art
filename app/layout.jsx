
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
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout