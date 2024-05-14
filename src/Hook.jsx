import { useState } from "react"
import { toast } from "react-toastify"
const useGrneratepassword = () => {
    const [password, setPassword] = useState("")

    function generatepassword(selectval, inputval) {
        let charset = "", generatedpassword = "";
        if(inputval<8 || inputval>50){
            toast.error("Password length should be between 8 to 50",{
                position: "top-center",
                autoClose:1500
            });
           
            return
        }
        let selectedtype = selectval.filter(checking => checking.ckecked)
        if (selectedtype.length === 0) {
            toast.error("Please select atleast one checkbox",{
                position: "top-center",
                autoClose:1500
            });
            setPassword("")
            return
        }
        // console.log(selectedtype.length)
        selectedtype.forEach((selectedcheck) => {
            switch (selectedcheck.title) {
                case "Includes Uppercase":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Numbers":
                    charset += "0123456789";
                    break;
                case "Symbols":
                    charset += "!@#$%^&*()_+";
                default:
                    break;

            }

        })
        // console.log(charset);
        // console.log(inputval)
        for (let i = 0; i < inputval; i++) {
            let randompass = Math.floor(Math.random() * charset.length)
            generatedpassword += charset[randompass]

        }
       
        setPassword(generatedpassword)
       
    }


    return { generatepassword, password, setPassword }
}
export default useGrneratepassword;