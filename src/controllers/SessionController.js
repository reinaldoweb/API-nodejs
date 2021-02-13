
//metodos: index, show, update, store, destroy

/*

index: listagem de sessões
store: Criar uma sessão
show: Lisar uma unica sessão
update: Quando queremos alterar alguma sessao
destroy: Quando queremos deletar uma sessao

*/

import User from '../models/User';

class SessionController{

  async store(req, res){
    const { email } = req.body;

    let user = await User.create({ email });

    return res.json(user);
  }

}

export default new SessionController();