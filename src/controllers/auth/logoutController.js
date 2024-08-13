import router from "./singupControlller"

const logout =  (req, res) => {
    res.json({message: "Rota de Auth/logout",})
}

export default router