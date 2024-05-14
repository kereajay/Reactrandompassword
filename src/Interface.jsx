import { useState } from "react";
import useGrneratepassword from "./Hook";
import { toast } from "react-toastify";

const InterFace = () => {
    const [inputval, setInputval] = useState(8)
    const [selectval, setSelectval] = useState([
        {
            id: 1, title: "Includes Uppercase", ckecked: false,
        },
        { id: 3, title: "Numbers", ckecked: false },
        { id: 4, title: "Symbols", ckecked: false },
    ])
    const [copied, setCopied] = useState(false)

    const handlecopy = () => {
        if (!password) {
            toast.error("Please generate password first", {
                position: "top-center",
                autoClose: 1500
            })

            return
        }
        navigator.clipboard.writeText(password);
        setCopied(true)
        toast.success("copied to clipboard", {
            position: "top-center",
            autoClose: 1500
        })
        setTimeout(() => setCopied(false), 2000)
        setPassword("");


    }

    const handlechecked = (index) => {
        const updatedchecked = [...selectval]
        updatedchecked[index].ckecked = !updatedchecked[index].ckecked;
        setSelectval(updatedchecked);
    }
    const { generatepassword, password, setPassword } = useGrneratepassword();
    return (
        <>
            <div className="text-center">
                <h1 className="text-2xl font-semibold">Password Generator</h1>
                <br />
                <input type="number" min={8} max={50} value={inputval} onChange={(e) => setInputval(e.target.value)} className="w-1/6 border-2 border-black" />
                <br />
                {
                    selectval.map((ele, idx) => {
                        return (
                            <>
                                <div key={ele.id}>
                                    <input type="checkbox" checked={ele.ckecked} onChange={() => handlechecked(idx)} />
                                    <label >{ele.title}</label>
                                </div>
                                <br />

                            </>
                        )

                    })
                }
                <button className="w-1/4 p-2 bg-blue-400" onClick={() => (generatepassword(selectval, inputval))}>Generate Password</button>
                <br />
                <br />
                <h3 className="text-xl">Generated Password 👇</h3>
                <br />
                <div className="text-center items-center ">
                    <div className="items-center w-full"><br /><h1 className="w-1/5  border-2 h-7 border-black  m-auto">{password}</h1></div>
                    <br />
                    <br />
                    <button className="p-2 bg-blue-400" onClick={ handlecopy}>{copied ? "copied" : "copy"}</button>
                </div>

            </div>

        </>
    )
}
export default InterFace;