import ButtonPrimary from "../ButtonPrimary";

export default function DialogInfo(){
    return(
        <div className="dsc-dialog-background">
            <div className="dsc-dialog-box">
                <h2>Operação de Sucesso!</h2>
                <ButtonPrimary text="OK"/>
            </div>
        </div>
    )
}