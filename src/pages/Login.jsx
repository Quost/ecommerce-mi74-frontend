import { useState } from "react";
import InputText from "../components/InputText";
import ContinueLogIn from "../components/ContinueLogIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
    const [login, setLogin] = useState(true);

    return (
        <div className="overflow-hidden bg-gradient-to-r from-[#4e598c] to-[#545677] w-screen h-screen flex justify-center items-center">
            <div className="bg-[#f5f5f5] rounded-lg shadow-2xl">
                <div className="flex flex-row">
                    <div
                        onClick={() => setLogin(true)}  
                        className={(login ? "bg-[#afc4d0]" : "bg-white " ) +` w-1/2 flex justify-center py-4 rounded-lg cursor-pointer`}
                    >
                        <span>Log in</span>
                    </div>
                    <div
                        onClick={() => setLogin(false)} 
                        className={(!login ? "bg-[#afc4d0]" : "bg-white " ) + ` w-1/2 flex justify-center py-4 rounded-lg cursor-pointer`}>
                        <span>Sign in</span>
                    </div>
                </div>
                <div className="p-8">
                    {login ? 
                        (   
                            <>
                                <h1 className="text-5xl">MI74 - E-Commerce</h1>
                                <form className="mt-8">                    
                                    <InputText placeholder={"Nome do Usuário"} type={"text"}/>
                                    <InputText placeholder={"Senha"} type={"password"} />
                                </form>
                                <div className="mt-8 flex flex-col items-center">
                                    
                                    <ContinueLogIn text={"Continue Google"}/>
                                    <ContinueLogIn text={"Continue Email"}/>
                                    <ContinueLogIn text={"Continue Facebook"}/>

                                </div>
                            </>
                        ) :
                        (
                            <>
                                <div className="flex flex-col items-center">
                                    
                                    <ContinueLogIn text={"Continue Google"}/>
                                    <ContinueLogIn text={"Continue Email"}/>

                                </div>
                                <form className="mt-8">                    
                                    <InputText placeholder={"Nome do Usuário"} />
                                    <InputText placeholder={"Senha"} />
                                </form>
                                
                            </>
                        )
                    }
                    
                </div>
            </div>
        </div>
    );
}