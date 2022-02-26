document.write('hello!<br>');

var m = prompt('how many?','10000');
if(m<30000){
    m = Number(m);
    alert(m+1);
}else if(m>10000000){
    alert('有錢人!');
}else{
    alert('NO!');
}

var n = 0;
while(n<=10){
    n++;
    document.write(n+'<br>');
    console.log(n);
}

初始區塊; 判斷; 迴圈區塊
for(var i=1; i<=10; i++){
    document.write(i+'<br>');
    console.log(i);
}

var n = 0;
while(n<=100){
    if(n==20){
        break;
    }
    n++
    console.log(n)
}



function test(n1,n2){
    // alert(n1+n2);
    return n1+n2
}

var a = test(1,4);
document.write(a);

function test(n1,n2){
    // alert(n1+n2);
    n1 = String(n1)
    n2 = String(n2)
    return n1+n2
}

var a = test('rrr','ddd');
document.write(a);


var x = 3; //全域變數
function test(){
    var y = 5; //區域變數
    document.write(y);
}

test()




var point=new Object();
// 建立物件的成員
point.x = 3; //屬性
point.y = 4;
point.getPosition = function(){ //方法
    document.write(this.x + "," + this.y + '<br>');
    document.write('2222')
    return 5555
};

console.log(point.getPosition());



// ----------物件設計----------
// 物件設計
var player=new Object();
player.name = "Amy";
player.hp = 100
player.fight = function(){
    this.hp = this.hp-2;
    
};
player.reset = function(){
    this.hp++;

};
player.report = function(){
    document.write(this.name + ": " + this.hp);
};

// 物件使用
player.fight();
player.reset();
player.report();




// ----------建構式物件----------
function Player(name, hp = 100){ //建構物件的函式, 第一個字大寫
    // this 代表新建的空白物件
    this.name = name;
    this.hp = hp;
    this.fight = function(){
        this.hp -= 2;
    }
    this.reset = function(){
        this.hp += 1;
    }
    this.report = function(){
        document.write(this.name + ": " + this.hp + "<br>");
    }
} 

var player = new Player("Bee", 200);
player.fight();
player.reset();
player.report();

var player2 = new Player("Cat");
player2.fight();
player2.reset();
player2.report();