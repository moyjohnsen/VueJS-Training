var voo = new Vue({
    el: '#maincontainer',
    data: {
        message: 'Playing with VueJs',
        change: true,
        buttonchange: 'Blue',
        awesome: true,
        visible: true,
        tableBtn: 'Hide table',
        arr: []
    },
    methods: {
        changeColor: changeColor,
        toggleTable: toggleTable,
        alertResult: alertResult,
        letThemPass: letThemPass,
        letThemFail: letThemFail
    },
    mounted: loadEvent
});

function toggleTable(){
    voo.visible = !voo.visible;
    if(voo.tableBtn === 'Hide table'){
        voo.tableBtn = 'Show table'
    }
    else{
        voo.tableBtn = 'Hide table'
    }
}

function loadEvent(){
    let info = this;
    arrData(info);
}

function arrData(info){
    info.arr = [
        {
            'uid': 1,
            'name': 'George',
            'age': 25,
            'rollno': 450,
            'result': 'Passed'
        },
        {
            'uid': 2,
            'name': 'Bryan',
            'age': 29,
            'rollno': 462,
            'result': 'Failed'
        },
        {
            'uid': 3,
            'name': 'Max',
            'age': 23,
            'rollno': 465,
            'result': 'Passed'
        },
        {
            'uid': 4,
            'name': 'Peter',
            'age': 27,
            'rollno': 470,
            'result': 'Failed'
        },
        {
            'uid': 5,
            'name': 'Alex',
            'age': 28,
            'rollno': 473,
            'result': 'Passed'
        }
    ]
}

function changeColor(){
    voo.change = !voo.change;
    if(voo.buttonchange === 'Blue'){
        voo.buttonchange = 'Purple'
    }
    else{
        voo.buttonchange = 'Blue'
    }
}

function alertResult(){
    let num = 0;
    for(let i=0; i<voo.arr.length; i++){
        if(voo.arr[i].result === 'Passed'){
            num++;
        }
    }
    if(num === voo.arr.length){
        alert('All students passed')
    }
    else if(num === 0){
        alert('All students failed')
    }
    else alert(num+" "+"student(s) passed.");
}

function letThemPass(){
    for(let i=0; i<voo.arr.length; i++){
        voo.arr[i].result = 'Passed'
    }
}

function letThemFail(){
    for(let i=0; i<voo.arr.length; i++){
        voo.arr[i].result = 'Failed'
    }
}