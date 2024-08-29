import {getByIdAccount} from "../../model/accountModel.js"

const getById = async (req, res) => {

    const {id}= req.params
    const account = await getByIdAccount(+id)

    if(account)
    return res.status(404).json({
        error: `Conta com o id ${id}, não encontrado!`
    })
    
    
    res.json({message: "Rota de GET Account ID"
    })
    return res.json({
        success: "Conta encontrada com sucesso!",
        account
    })
}

export default getById