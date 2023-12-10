
function randomRange(min, max) {
    return Math.random() * (max - min) + min; 
}


function lerp(a, b, t) {
    return a + (b - a) * t;  
}


class Neuron {
    
    constructor(inputs) {
        
        this.bias = randomRange(-1, 1); 
        

        this.weightList() = new Array(inputs) 
        .fill()
        .map(() => randomRange(-1, 1)); 
    }
}


g(signalList = []); {
    let u =  0;

    
    for (let i = 0; i < this.weightList.lenght; i++)  {
        u += signalList[i] * this.weightList[i]; 
    }

    
    if (Math.tanh(u) > this.bias) return 1; 

    else return 0; 
}

mutate(rate = 1); {
    this.weightList = this.weightList.map((w) => {
    
        return lerp(w, randomRange(-1, 1), rate);
    });


    this.bias = lerp(this.bias, randomRange(-1, 1), rate);
}

/* Vamos criar mais uma classe chamada RNA que vai ser a Rede Neural Artifícial */
/* Vamos criar uma RNA que vai ser vários neurônios em um*/

class RNA{
    /* Como toda classe a gente precisa criar uma cabeça para ela utilizando o constructor*/
    /* inputCount vai ser contagem de inputs*/ /* levelList vai receber uma lista vazia*/
    constructor(inputCount = 1, levelList = []) {
        /* Vamos inicializar a pontuação de RNA com zero*/
        /* A pontuação vai servir pra ver qual foi a melhor RNA, geração e o melhor neurônio dentreo daaquela geração*/
        this.score = 0;


        /* Vamos começar a criar as camadas de neurônios com base nas nossas especifícações*/
        this.levelList = levelList.map((l, i) => {
            /* Aqui dentro vai começar a trabalhar a nossa camada de neurônio*/
            /* Como a gente pode cálcular o tamanho da nossa camada pra saber quantos neurônios a gente ainda tem*/
            const inputSize = i === 0 ? inputCount : levelList[i - 1] 

            /* Estamos chamando a class Neuron para dentro, então vai executar todos os códigos anteriores da Neuron*/
            /* A gente só pode passar um parâmetro que é o inputSize que é o tamanho do nosso input/camada*/
            return new Array(l).fill().map(() => new Neuron(inputSize)); /* O .map sempre vai receber uma callback function (())*/

        });
    }

    /* Agora vamos fazer uma função que vai calcular a saída da nossa RNA com base nas entradas */
    /* Então toda saída que o RNA tiver/ output que a RNA tiver, a gente vai utilizar ela como uma saída, como
    output de fato, como uma saída de ativação ou não ativação*/
    compute(list = []){
        /* Dentro da nossa função a gente vai criar algo parecido com o que a gente tinha criado antes*/
        /* Nosso for que ele vai receber toda vez que ele vai receber toda vez que a variável "i" vai ser zero for menor
        que, this.levelList.lenght, for menor que o tamanho total da nossa lista, ele vai i plusplus*/
        for (let i = 0; i < this.levelList.length; i++){
            /* Aqui dentro a gente vai colocar uma variável tempList(lista temporária)*/
            /* Estamos colocando várias listas vazias porque elas vão ser preenchidas com alguma coisa
            por isso elas precisam estar vazias*/
            const tempList = []

            /* Esse neuron é uma variável, não é a mesma class Neuron*/
            /* Esse neuron vai receber os neurônios um de cada vez*/
            for (const neuron of this.levelList[i]){


                /* Aqui vamos criar uma condicional*/
                /* Essa condicional vai servir pra sempre disparar um aviso pra quando uma entrada tiver invalida
                da nossa I.A, então ela vai saber identificar o que é inválida e o que não é*/
                if(list.length !== neuron.weightList.length) throw new Error("Entrada inválida"); /* Ele vai atirar um error */
                tempList.push(neuron.g(list))
            }

            /* A gente vai colocar o list que vai receber a nossa tempList (lista temporâria*/
            list = tempList; /* Agora ele vai sempre atualizar os sinais pra próxima camada*/
        }
        /* Pra gente sempre retornar a saída final da nossa RNA*/
        return list;
    }
}


/* Vamos aplicar agora a nossa função mutate*/
/* Ele vai receber os parametros rate*/
mutate(rate = 1);{
    for(const level of this.levelList){
        for(const neuron of level) neuron.mutate(rate) /* Essa função aplicada vai pegar um rate que vai receber
        um número aleatório, ele vai mudar o nosso neurônio, então toda vez que a nossa RNA vai ser mudada*/
    }
}

/* Última função pra carregar a configuração da nossa RNA, toda vez que ela for mutada a gente vai carregar
a nossa RNA anterior*/

load(rna);{
    /* Vamos criar uma condicional*/
    /* Se for o contrário de rna retornando falso, ele vai retornar pra gente*/
    if (!rna) return;
    try {
        /* O .map ele vai ser sempre pra gente criar uma nova lista utilizando uma informação
        de uma lista já original*/
        this.levelList = rna.map((neuronList) => {
            /* Retorno do nosso neurônio*/
            return neuronList.map((neuron) => {
                /* Aqui dentro vamos criar um novo neurônio com base nos dados da RNA já carregados, pra que
                toda vez que passe pra uma geração futura esse filho esteja herdando as funções dos antigos*/
                const n = new Neuron();
                n.bias = neuron.bias
                n.weightList = neuron.weightList; /* O weightList no nosso caso ele vai servir pra atribuir a importância
                das entradas e ele vai ajudar na nossa rede a aprender a tomar decisões com base nos dados que vão entrar*/
                return n;
            });

        });
    }catch /* Pra fechar nosso try precisa digitar o código */ /* Ele vai servir pra capturar ele com erros do JS,
    ele vai permitir que você tome algumas ações quando um erro acontecer no meu código, a gente só ta usando ele
    pra caso aconteça um error a gente vai retornar alguma coisa */(e){
        return;

    }
    /* Função que vai salvar a nossa RNA atual*/
    save(); {
        return this.levelList;
    }
}
/* Vamos exportar a classe RNA */
export default RNA;
/* Criamos a nossa inteligência Artifícial*/