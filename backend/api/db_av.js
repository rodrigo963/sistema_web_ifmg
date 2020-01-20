
var os = require('os');
module.exports = app => {
    const { exists } = app.api.validation



    const save_av = async (req, res) => {

        const user = { ...req.body }
        console.log(user) 

        try {
            exists(user.conforto, 'Conforto não informado')
            exists(user.ref_car, 'Automóvel não informado')
            exists(user.sexo, 'Sexo não informado')
            exists(user.idade, 'Idade não informada')
            exists(user.peso, 'Peso não informada')
            exists(user.altura, 'Altura não informada')
            exists(user.comp_p, 'Comprimento da perna não informado')
            exists(user.comp_b, 'Comprimento do braço não informado')


        } catch (msg) {

            return res.status(400).send(msg)
        }

        app.db('avaliação')
            .insert(user)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }



    const get_av = (req, res) => {
        app.db('avaliação')
            // .select('marca', 'descrição')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }


   



    return {save_av, get_av }
}