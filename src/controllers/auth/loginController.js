import router from "./singupControlller"

const login = (req, res)=> {
    res.json({message: "Rota de Auth/login",})
}

export default router