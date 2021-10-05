import Evento from "../../core/Evento";
import EventoRepositorio from "../../core/EventoRepositorio";
import firebase from "../config";

export default class ColecaoEvento implements EventoRepositorio {

    #conversor = {
        toFirestore(evento: Evento) {
            return {
                nome: evento.nome,
                descricao: evento.descricao,
                inicio: evento.inicio,
                fim: evento.fim,
                horaInicio: evento.horaInicio,
                horaFim: evento.horaFim,
                email: evento.email
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Evento {
            const dados = snapshot.data(options)
            return new Evento(dados.nome, dados.descricao, dados.inicio, dados.fim, dados.horaInicio, dados.horaFim, dados.email, snapshot.id)
        }
    }

    async salvar(evento: Evento): Promise<[Evento,string]> {
        
        const snapshot = await this.colecao().where("email","==",evento?.email).where("nome","==",evento?.nome).get()
        console.log(snapshot)
        if (snapshot.empty) {
            console.log('No matching documents. Saving');
            if (evento?.id) {
                await this.colecao().doc(evento.id).set(evento)
                return [evento,"sucesso"]
            } else {
                const docRef = await this.colecao().add(evento)
                const doc = await docRef.get()
                return [doc.data(),"sucesso"]
            }
        } else {
            console.log("Já existem registros iguais!")
            return [evento,"falha"]
        }
    }

    async excluir(evento: Evento): Promise<void> {
        return this.colecao().doc(evento.id).delete()
    }

    async obter(): Promise<Evento[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase
            .firestore().collection("eventos")
            .withConverter(this.#conversor)
    }

    // private usuarioRetorno(): string {
    //     const { user } = useUser()
    //     return user
    // }

}