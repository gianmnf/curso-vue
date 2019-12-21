new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta(){
            alert('Exibindo alerta!')
        },
        atualiza(e){
            this.valor = e.target.value
        }
    }
})