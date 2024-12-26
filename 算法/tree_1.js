function Tree(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
let tree = {
    val:"A",
    left:{
        val:"B",
        left:{
            val:"C",
        },
        right:{
            val:"D"
        }
    },
    right:{
        val:"E",
        left:{
            val:"F",
        },
        right:{
            val:"G"
        }
    }
}
function front(tree){
    if(!tree)return;
    console.log(tree.val);
    if(tree.left){
        front(tree.left);
    }
    if(tree.right){
        front(tree.right);
    }
}
function middleOrder(tree){
    if(!tree)return;
    if(tree.left){
        middleOrder(tree.left);
    }
    console.log(tree.val);
    if(tree.right){
        middleOrder(tree.right);
    }
}
function lastOrder(tree){
    if(!tree)return;
    if(tree.left){
        lastOrder(tree.left);
    }
    if(tree.right){
        lastOrder(tree.right);
    }
    console.log(tree.val);

}
lastOrder(tree);