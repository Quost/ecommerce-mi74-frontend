import HeaderButton from "../components/HeaderButton";
import SearchSm from "../components/SearchSm";

export default function HeaderVendedor() {
    return <>
    
    <header className="w-full bg-[#4E598C] text-[#F5F5F5] flex flex-row justify-between px-16 pt-3 pb-5 items-center" >
                <h1 className="text-3xl" >MI74 E-Commerce</h1>
                
                <div className="gap-4 flex items-center" >

                    <HeaderButton link={"/home"} displayText={ "Home" }/>
                    <HeaderButton link={"/categorias"} displayText={ "Categorias" }/>
                    <SearchSm/>

                </div>

    </header>

    </>
}