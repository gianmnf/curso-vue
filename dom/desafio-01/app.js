new Vue({
    el: '#desafio',
    data:{
        nome: 'Gian',
        idade: 21,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods:{
        idadeMult: function(){
            return this.idade * 3
        },
        randomizacao: function(){
            return Math.random()
        }
    }
})