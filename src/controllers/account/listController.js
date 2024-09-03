import { listAccounts } from "../../model/accountModel.js"

const list = async (req, res) => {

    const account = await listAccounts()
    return res.json({
        message: "Contas listadas com sucesso!",
        account
    })
}

export default list