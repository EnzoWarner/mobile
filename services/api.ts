
import axios from "axios";
// usar seu ipv4 local
// http://192.168.15.14:3333 /create
export const api = axios.create({
  baseURL: "http://192.168.15.14:3333"
})


/*Continue utilizando o IP 192.168.15.14, 
já que ele aponta para o seu computador na rede local.

localhost não funcionará no contexto de comunicação cliente-servidor 
entre dispositivos diferentes.

Certifique-se de que o servidor está acessível na rede local:

Garanta que seu servidor (porta 3333) está rodando e acessível.

Verifique se o firewall não está bloqueando o acesso.*/