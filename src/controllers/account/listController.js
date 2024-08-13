import router from "./createController"

const list = (req, res) => {
    res.json({message: "Rota de GET Account/List",})
}

export default list