
//metodos: index, show, update, store, destroy

/*

index: listagem de sessões
store: Criar uma sessão
show: Listar uma única sessão
update: Quando queremos alterar alguma sessao
destroy: Quando queremos deletar uma sessao

*/

import User from '../models/User';

class SessionController{

  async store(req, res){
    const { email } = req.body;
    //Verificando se esse usuario já exite no banco
    let user = await User.findOne({ email });

    if(!email){
      user = await User.create({ email })
    }
    return res.json(user);
  }

}

export default new SessionController();