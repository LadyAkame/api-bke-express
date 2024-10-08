import { create } from "../../model/accountModel.js"

const createController =  async (req, res) => {
    const account = req.body
    const result = await create(account)

    if(!result)
        return res.status(401).json({
            error: "Erro ao criar conta!"
        })

    return res.json({
        sucesso: "Conta criada com sucesso",
        account: result
})
}

export default createController