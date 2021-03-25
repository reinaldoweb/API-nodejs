
//metodos: index, show, update, store, destroy

/*

index: listagem de sessões
store: Criar uma sessão
show: Listar uma única sessão
update: Quando queremos alterar alguma sessao
destroy: Quando queremos deletar uma sessao

*/

import User from '../models/User';
import * as Yup from 'yup';
import { string } from 'yup/lib/locale';

class SessionController {

  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    const { email } = req.body;
    
    //Verifica validação
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na autenticação.' });
    }

    //Verificando se esse usuario já exite no banco
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });//Cria novo usuario
    }
    return res.json(user);
  }

}

export default new SessionController();