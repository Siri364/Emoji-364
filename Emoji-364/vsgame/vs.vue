    var player = new Vue({
        el: '#player',
        data: {
            HPPLAYER1: 100,
            HPPLAYER2: 100,
            HPMAX: 0,
        },
        methods: {
            c1:function(){
                this.HPPLAYER1 = 100;
                this.HPPLAYER2 = 100;
                this.HPMAX = 0;
            },
            c2:function(min,max){
                var ranPLA = Math.max(Math.floor(Math.random() * max) + 1, min);
                var ranMON = Math.max(Math.floor(Math.random() * 15) + 1, 5);
                this.HPPLAYER2 -= ranPLA;
                this.HPMAX += 1;
                var vm = this;
                setTimeout(function () { vm.HPPLAYER1 -= ranMON; }, 500);
            },
            c3:function(min,max){
                var randomNum = Math.max(Math.floor(Math.random() * max) + 1, min);
                var randomMon = Math.max(Math.floor(Math.random() * 15) + 1, 5);
                this.HPPLAYER2 -= randomNum;
                this.HPMAX = 0;
                var vm = this;
                setTimeout(function () { vm.HPPLAYER1 -= randomMon; }, 500);
            }
        },
    })